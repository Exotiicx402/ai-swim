import { SwimCoin } from "@/components/swim-coin";
import { ArrowUpRight } from "lucide-react";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { WaitlistForm } from "@/components/waitlist-form";

const displayFont = {
  fontFamily:
    "'Helvetica Neue Condensed Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontStretch: "condensed" as const,
};

export default function Home() {
  return (
    <div className="site-shell bg-black text-white">
      <header className="network-header fixed z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight" style={displayFont}>
            [ai swim]
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-white/70 lg:flex">
            <a href="#thesis" className="transition-colors hover:text-white">
              The network
            </a>
            <a href="#how" className="transition-colors hover:text-white">
              Get involved
            </a>
            <a href="#swim" className="transition-colors hover:text-white">
              $SWIM utility
            </a>
            <a href="/dashboard" className="transition-colors hover:text-white">
              Holder room
            </a>
          </nav>
          <a
            href="#waitlist"
            className="network-button header-cta"
          >
            Get updates <ArrowUpRight aria-hidden="true" className="icon-arrow" />
          </a>
        </div>
      </header>

      <section id="top" className="brand-hero relative flex w-full items-center justify-center overflow-hidden bg-black" aria-label="ai swim">
        <div className="brand-hero-art" aria-hidden="true"><AnimatedGrid
          startColor={[255, 0, 0]}
          endColor={[255, 0, 255]}
          animationStartColor={[255, 0, 0]}
          animationEndColor={[255, 0, 255]}
          rows={10}
          cols={15}
          cellSize="6rem"
          animationDuration="2s"
        /></div>
        <h1 className="brand-hero-mark" style={displayFont}>[ai swim]</h1>
      </section>

      <main className="network-page compact-landing">
        <section id="thesis" className="network-wrap compact-intro" aria-labelledby="network-intro-heading">
          <div>
            <p className="network-label"><span className="signal-dot" /> A WEB3 ENTERTAINMENT NETWORK</p>
            <h2 id="network-intro-heading">Good shows.<br /><span>Less noise.</span></h2>
          </div>
          <div className="compact-intro-copy">
            <p>Independent shows and films made with AI. Selected for the story, the craft, and the feeling that you need to see what happens next.</p>
            <p>Discover a pilot preview. Follow the shows you love. We help selected producers turn promising ideas into original productions.</p>
            <a href="/dashboard" className="network-button">Explore the network <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a>
          </div>
        </section>

        <section id="swim" className="token-section token-utility-section" aria-labelledby="swim-heading">
          <div className="network-wrap compact-token">
            <div className="compact-coin"><SwimCoin /></div>
            <div>
              <p className="network-label">THE NETWORK TOKEN</p>
              <h2 id="swim-heading">Your way in. $SWIM.</h2>
              <p className="network-copy">The community token connecting you to the holder room.</p>
              <ul className="compact-utilities">
                <li>Show previews &amp; network updates</li>
                <li>Creative opportunities &amp; commissions</li>
                <li>Lineup votes &amp; community proposals</li>
              </ul>
              <a href="/dashboard" className="network-button">Enter the holder room <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a>
              <p className="network-note compact-access-note">Explore as a guest. Holder sign-in is currently unavailable; check the dashboard for feature availability.</p>
            </div>
          </div>
        </section>

        <section id="how" className="network-wrap compact-contribute" aria-labelledby="contribute-heading">
          <div className="compact-section-heading">
            <p className="network-label">MAKE SOMETHING THAT MATTERS</p>
            <h2 id="contribute-heading">Help build the network.<br /><span>Get paid for what you contribute.</span></h2>
          </div>
          <div className="process-grid">
            {[
              { title: "Make a show.", body: "Pitch a pilot preview. Selected producers receive paid development or production commissions." },
              { title: "Bring your craft.", body: "Writing, editing, sound, design. Find paid briefs with a clear scope and payment terms." },
              { title: "Grow the audience.", body: "Earn through qualifying subscriber referrals when programs are available." },
            ].map((item) => <article key={item.title} className="process-step"><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
          <div className="compact-backing"><p>Our model reinvests a portion of network earnings into original shows and the people who make them.</p><a href="/dashboard" className="launch-text-link">Find opportunities <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a></div>
          <p className="network-note">Paid opportunities depend on available programs and qualifying contributions. Holding $SWIM alone does not earn payments.</p>
        </section>

        <section id="waitlist" className="network-wrap signup-section">
          <div><h2>Stay in the loop.</h2><p className="network-copy">New shows, creative opportunities, and network news.</p></div>
          <div className="signup-form"><WaitlistForm /><p className="network-note">Free updates. No token or subscription required.</p></div>
        </section>

        <footer className="network-footer">
          <div className="network-wrap">
            <div className="footer-rule"><a href="#top" className="footer-brand" style={displayFont}>[ai swim]</a><nav aria-label="Footer"><a href="#thesis">The network</a><a href="#how">Get involved</a><a href="#swim">$SWIM</a><a href="/dashboard">Holder room</a></nav></div>
            <p className="footer-disclaimer">Check the dashboard for show, subscription, and participation availability. Token ownership does not entitle holders to payments or network revenue.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
