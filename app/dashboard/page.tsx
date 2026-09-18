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
          <p className="access-intro">Find shows worth your time. Explore curated previews, follow release updates, and discover your next favorite.</p>
          <div className="access-status"><ShieldCheck size={22} /><div><h2>{config.configured ? "Verify your SWIM holdings." : "Holder sign-in is unavailable."}</h2><p>{config.configured ? "Connect the Solana wallet holding SWIM. We verify wallet ownership and check its current token balance before opening the dashboard." : "Please check back to sign in. You can explore the dashboard as a guest."}</p></div></div>
          {config.configured && <WalletAccess url={process.env.SUPABASE_URL!} anonKey={process.env.SUPABASE_ANON_KEY!} />}
          <Link href="/dashboard/preview" className="holder-button">Explore as a guest <ArrowUpRight size={16} /></Link>
          <p className="holder-muted access-note">Guest access does not require a wallet.</p>
        </div>
        <div className="access-coin"><SwimCoin /><p className="holder-kicker">$SWIM / A VOICE IN WHAT COMES NEXT</p></div>
      </main>
      <footer className="access-footer"><span>Independent entertainment.</span><Link href="/#waitlist">Get network updates ↗</Link></footer>
    </div>
  );
}
