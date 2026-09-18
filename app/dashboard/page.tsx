import Link from "next/link";
import { ArrowUpRight, LockKeyhole, ShieldCheck } from "lucide-react";
import { holderConfig } from "@/lib/holders/server";
import { WalletAccess } from "@/components/dashboard/wallet-access";
import { SwimCoin } from "@/components/swim-coin";

export default function HolderAccess() {
  const config = holderConfig();
  return (
    <div className="holder-access">
      <header className="access-header"><Link href="/" className="holder-brand">[ai swim]</Link><span className="holder-kicker">THE HOLDER ROOM</span></header>
      <main className="access-layout">
        <div>
          <span className="holder-badge"><LockKeyhole size={13} /> SOLANA / $SWIM HOLDER ACCESS</span>
          <h1>Your place<br />in the network.</h1>
          <p className="access-intro">Follow the first shows from idea to production. Get closer to the producers, explore opportunities, and see what’s coming next.</p>
          <div className="access-status"><ShieldCheck size={22} /><div><h2>{config.configured ? "Verify your SWIM holdings." : "Verification opens with the token."}</h2><p>{config.configured ? "Connect the Solana wallet holding SWIM. We verify wallet ownership and check its current token balance before opening the dashboard." : "SWIM is launching on pump.fun. Holder access opens once the Solana mint and holding requirement are confirmed and verification is enabled."}</p></div></div>
          {config.configured && <WalletAccess url={process.env.SUPABASE_URL!} anonKey={process.env.SUPABASE_ANON_KEY!} />}
          <Link href="/dashboard/preview" className="holder-button">Explore the dashboard preview <ArrowUpRight size={16} /></Link>
          <p className="holder-muted access-note">Public preview only. No wallet connection, token purchase, or signature required.</p>
        </div>
        <div className="access-coin"><SwimCoin /><p className="holder-kicker">$SWIM / A VOICE IN WHAT COMES NEXT</p></div>
      </main>
      <footer className="access-footer"><span>Independent entertainment.</span><Link href="/#waitlist">Get launch updates ↗</Link></footer>
    </div>
  );
}
