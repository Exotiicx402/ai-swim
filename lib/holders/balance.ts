export function isSolanaAddress(value: unknown): value is string {
  return typeof value === "string" && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(value);
}

// Use raw integer amounts, never floating-point UI balances.
export function meetsHoldingRequirement(result: unknown, owner: string, mint: string, minimum: string): boolean {
  if (!/^[1-9]\d*$/.test(minimum)) throw new Error("Invalid minimum holding");
  const response = result as { error?: unknown; result?: { value?: unknown[] } };
  if (!response || response.error || !Array.isArray(response.result?.value)) throw new Error("Invalid balance response");
  let balance = BigInt(0);
  for (const entry of response.result.value) {
    const account = (entry as { account?: { data?: { parsed?: { type?: string; info?: { mint?: string; owner?: string; tokenAmount?: { amount?: string } } } } } })?.account;
    const parsed = account?.data?.parsed;
    if (parsed?.type !== "account" || parsed.info?.owner !== owner || parsed.info?.mint !== mint) throw new Error("Unexpected token account");
    const amount = parsed.info.tokenAmount?.amount;
    if (typeof amount !== "string" || !/^\d+$/.test(amount)) throw new Error("Invalid token amount");
    balance += BigInt(amount);
  }
  return balance >= BigInt(minimum);
}
