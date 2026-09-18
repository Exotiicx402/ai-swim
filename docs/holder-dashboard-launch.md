# Holder dashboard launch setup

The public preview is `/dashboard/preview`. `/dashboard` is the access screen. `/dashboard/member` verifies authentication and the current token balance on the server before rendering. The public preview must never receive unpublished or holder-only data.

## Current implementation

- Six dashboard sections: overview, network updates, slate, opportunities, community, and interests.
- Updates are public descriptions of the network plan, not a live CMS feed.
- No shows, active votes, open jobs, or referral earnings are fabricated.
- Interests persist in browser local storage only, with explicit UI disclosure. They do not create email subscriptions or persist to a member profile.
- Phantom/injected Solana wallet sign-in uses Supabase Web3 authentication, then server-side balance verification. No transaction or transfer is requested.
- Supabase verifies the signed message and issues an access token. The server calls `auth.getUser(token)` and uses only the verified Web3 identity, not user-editable metadata or a client-supplied wallet address.
- Balance verification queries the configured mint using `getTokenAccountsByOwner`, sums raw integer balances across accounts, and denies access on RPC errors or malformed data.
- The HTTP-only, same-site session cookie lasts 10 minutes. Every protected page request checks authentication and balance again; the browser also checks every minute and on focus. Already rendered content cannot be made unseen after a token transfer. Every future private API must independently call `currentHolder()`.
- Session mutation endpoints reject cross-origin requests. Private responses are not cached. Logout removes the application session cookie.

## Configuration required before enabling access

1. Confirm the exact pump.fun Solana mint and minimum holding with the project owner. Use a mainnet RPC endpoint and the actual mint, not a symbol or pool address.
2. Set `SWIM_TOKEN_MINT`, `SOLANA_RPC_URL`, and `SWIM_MINIMUM_RAW_BALANCE` on Vercel. The minimum is a positive integer in raw units: for a mint with 6 decimals, one whole token is 1000000 raw units. There is deliberately no default threshold.
3. The existing `SUPABASE_URL` and `SUPABASE_ANON_KEY` are required. Only the public anonymous key is passed to the browser. Never substitute a service-role key.
4. Enable the Solana Web3 provider in Supabase Authentication. Configure the production site URL and allowed sign-in URLs, including `https://www.aiswim.live/` and `https://www.aiswim.live/dashboard/` per Supabase's redirect matching rules. Add localhost only for development and avoid wildcard production origins.
5. Set `HOLDER_ACCESS_ENABLED=true` only after the above is configured. Missing configuration keeps the gate closed.
6. Test real wallet sign-in, rejection, a non-holder, a qualifying holder, expiration, logout, and a token transfer below the threshold. Test desktop Phantom and Phantom's mobile browser. Test provider/RPC failures and confirm the protected URL cannot be opened while signed out.

No live wallet verification has been completed yet because the mint, threshold, provider setup, and production RPC configuration are pending. The feature is not ready to advertise as live holder utility until those checks pass.

## Checks

`npm run lint`

`npx tsc --noEmit`

`node --experimental-strip-types --test tests/holder-balance.test.ts` (Node 22.6+)

## References

- [Supabase Web3 authentication](https://supabase.com/docs/guides/auth/auth-web3)
- [Phantom message signing](https://docs.phantom.com/solana/signing-a-message)
- [Solana token account lookup](https://solana.com/docs/rpc/http/gettokenaccountsbyowner)
