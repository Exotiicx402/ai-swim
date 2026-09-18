import "server-only";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSolanaAddress, meetsHoldingRequirement } from "./balance";

export const HOLDER_COOKIE = "ai-swim-holder";
export function holderConfig() {
  const mint = process.env.SWIM_TOKEN_MINT;
  const minimum = process.env.SWIM_MINIMUM_RAW_BALANCE;
  const rpc = process.env.SOLANA_RPC_URL;
  const configured = process.env.HOLDER_ACCESS_ENABLED === "true" && isSolanaAddress(mint) && !!minimum && /^[1-9]\d*$/.test(minimum) && !!rpc && !!process.env.SUPABASE_URL && !!process.env.SUPABASE_ANON_KEY;
  return { configured, mint, minimum, rpc };
}
export type HolderResult = { status: "verified"; wallet: string } | { status: "unavailable" | "unauthenticated" | "not-holder" };

export async function verifyHolder(accessToken?: string): Promise<HolderResult> {
  const config = holderConfig();
  if (!config.configured) return { status: "unavailable" };
  if (!accessToken || accessToken.length > 10000) return { status: "unauthenticated" };
  try {
    // getUser verifies the supplied token with Supabase Auth. Never trust client metadata.
    const { data, error } = await createSupabaseServerClient().auth.getUser(accessToken);
    if (error || !data.user) return { status: "unauthenticated" };
    const identity = data.user.identities?.find(item => item.provider === "web3" && item.identity_data?.chain === "solana" && isSolanaAddress(item.identity_data?.address) && item.id === `web3:solana:${item.identity_data.address}`);
    const wallet: unknown = identity?.identity_data?.address;
    if (!isSolanaAddress(wallet)) return { status: "unauthenticated" };
    const response = await fetch(config.rpc!, {
      method: "POST", headers: { "Content-Type": "application/json" }, cache: "no-store", signal: AbortSignal.timeout(8000),
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getTokenAccountsByOwner", params: [wallet, { mint: config.mint }, { encoding: "jsonParsed", commitment: "confirmed" }] }),
    });
    if (!response.ok) return { status: "unavailable" };
    return meetsHoldingRequirement(await response.json(), wallet, config.mint!, config.minimum!) ? { status: "verified", wallet } : { status: "not-holder" };
  } catch { return { status: "unavailable" }; }
}
export async function currentHolder() {
  return verifyHolder((await cookies()).get(HOLDER_COOKIE)?.value);
}
