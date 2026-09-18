"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wallet } from "lucide-react";

type Provider = {
  connect: () => Promise<unknown>;
  publicKey?: { toBase58: () => string } | null;
  signMessage: (message: Uint8Array, encoding?: string) => Promise<Uint8Array | { signature: Uint8Array }>;
};
export function WalletAccess({ url, anonKey }: { url: string; anonKey: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function connect() {
    setBusy(true); setMessage("");
    try {
      const wallets = window as unknown as { phantom?: { solana?: Provider }; solana?: Provider };
      const provider = wallets.phantom?.solana ?? wallets.solana;
      if (!provider?.connect || !provider.signMessage) { setMessage("Open this page in Phantom’s in-app browser or enable a compatible Solana wallet extension, then try again."); return; }
      await provider.connect();
      const client = createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } });
      const { data, error } = await client.auth.signInWithWeb3({
        chain: "solana", statement: "Sign in to the ai swim holder dashboard. This does not authorize a transaction or transfer tokens.",
        wallet: { publicKey: provider.publicKey, signMessage: async (bytes, encoding) => { const result = await provider.signMessage(bytes, encoding); return result instanceof Uint8Array ? result : result.signature; } },
        options: { signInWithSolana: { nonce: crypto.randomUUID().replaceAll("-", ""), expirationTime: new Date(Date.now() + 300000).toISOString() } },
      });
      if (error || !data.session) { setMessage("Wallet sign-in was not completed. Try again; if it keeps failing, holder sign-in may not be enabled yet."); return; }
      const response = await fetch("/api/holders/session", { method: "POST", headers: { Authorization: `Bearer ${data.session.access_token}` } });
      const result = await response.json();
      if (!response.ok) { setMessage(result.error ?? "Unable to verify holder access."); return; }
      router.replace("/dashboard/member");
      router.refresh();
    } catch { setMessage("Connection or signature was declined, or the service could not be reached. You can try again."); }
    finally { setBusy(false); }
  }
  return <div><button className="holder-button" onClick={connect} disabled={busy}><Wallet size={16} />{busy ? "Verifying access…" : "Connect Solana wallet"}</button><p className="holder-muted access-note">Sign a message to prove wallet ownership. No transaction or token transfer is requested.</p><p className="wallet-access-message" role="status">{message}</p></div>;
}
