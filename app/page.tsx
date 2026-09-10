import Image from "next/image";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { WaitlistForm } from "@/components/waitlist-form";

const displayFont = {
  fontFamily:
    "'Helvetica Neue Condensed Bold', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontStretch: "condensed" as const,
};

const lineup = [
  { number: "01", cover: "/covers/show-01.jpg" },
  { number: "02", cover: "/covers/show-02.jpg" },
  { number: "03", cover: "/covers/show-03.jpg" },
  { number: "04", cover: "/covers/show-04.jpg" },
  { number: "05", cover: "/covers/show-05.jpg" },
];

export default function Home() {
  return (
    <div className="site-shell bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight" style={displayFont}>
            [ai swim]
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-white/70 sm:flex">
            <a href="#lineup" className="transition-colors hover:text-white">
              Lineup
            </a>
            <a href="#thesis" className="transition-colors hover:text-white">
              Thesis
            </a>
            <a href="#how" className="transition-colors hover:text-white">
              How it works
            </a>
            <a href="#swim" className="transition-colors hover:text-white">
              $SWIM
            </a>
            <a href="#roadmap" className="transition-colors hover:text-white">
              Roadmap
            </a>
          </nav>
          <a
            href="#waitlist"
            className="network-button header-cta"
          >
            Join waitlist <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
        <AnimatedGrid
          startColor={[255, 0, 0]}
          endColor={[255, 0, 255]}
          animationStartColor={[255, 0, 0]}
          animationEndColor={[255, 0, 255]}
          rows={10}
          cols={15}
          cellSize="6rem"
          animationDuration="2s"
        />
        <span
          className="pointer-events-none absolute z-10 text-center text-7xl font-bold leading-none tracking-tighter text-white whitespace-pre-wrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
          style={displayFont}
        >
          [ai swim]
        </span>
        <p className="pointer-events-none absolute bottom-16 z-10 max-w-md px-6 text-center text-sm text-white/60">
          The first television network built for AI-made cartoons.
        </p>
      </section>

      <section id="lineup" className="overflow-hidden border-b border-white/10 py-16">
        <div className="lineup-track flex w-max gap-4">
          {[...lineup, ...lineup].map((show, i) => (
            <div
              key={`${show.number}-${i}`}
              className="group relative aspect-[2/3] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,51,153,0.25)] sm:w-[260px]"
            >
              <Image
                src={show.cover}
                alt=""
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <main className="network-page">
        <section id="waitlist" className="network-wrap signup-section">
          <div>
            <p className="network-label"><span className="signal-dot" /> THE NEXT CHANNEL IS COMING</p>
            <h2>Stay tuned.</h2>
            <p className="network-copy">A new home for independent AI animation.<br />Be first to know when submissions open.</p>
          </div>
          <div className="signup-form">
            <WaitlistForm />
            <p className="network-note">For the people making shows. And the people finding them.</p>
          </div>
        </section>

        <section id="thesis" className="manifesto-section">
          <div className="network-wrap">
            <div className="section-index"><span>01 / THE IDEA</span></div>
            <h2>The cartoons are here.<br /><span>Give them a channel.</span></h2>
            <div className="manifesto-bottom">
              <span className="bracket-mark" aria-hidden="true">[↗]</span>
              <div>
                <p>A whole new generation of creators is making original worlds, recurring characters, and shows worth following. They deserve a home beyond the feed.</p>
                <p>[ai swim] brings them together. Community favorites share the lineup with originals we commission, develop, and produce in-house.</p>
              </div>
            </div>
            <div className="production-commitment">
              <div><p className="network-label">NETWORK EARNINGS → ORIGINAL SHOWS</p><h3>We help make what comes next.</h3></div>
              <p>Part of what the network earns goes back into making shows: commissioning original work, producing in-house, and helping creators develop the shows that find their audience here.</p>
            </div>
          </div>
        </section>

        <section id="how" className="network-wrap network-section">
          <div className="section-index"><span>02 / HOW IT WORKS</span></div>
          <div className="section-heading"><h2>Good shows.<br />Their audience.<br /><span>A direct connection.</span></h2><p className="network-copy">Community curation brings great shows to the lineup. Reinvesting network earnings helps us build the next ones.</p></div>
          <div className="process-grid">
            {[
              { number: "01", title: "Make something.", detail: "CREATOR → QUEUE", body: "Submit your finished episode, pilot, or short. Any AI tool. Any animation style. Your own point of view." },
              { number: "02", title: "Find your people.", detail: "AUDIENCE → VOTE", body: "$SWIM holders watch the queue and vote on what deserves a slot. The audience helps shape the channel." },
              { number: "03", title: "Take the slot.", detail: "LINEUP → CREATOR", body: "Top-voted shows join the featured lineup, with creator rewards planned for the shows that make it to air." },
            ].map((step) => <article key={step.number} className="process-step"><div className="process-number"><span>{step.number}</span><span aria-hidden="true">↗</span></div><h3>{step.title}</h3><p>{step.body}</p><span className="network-label">{step.detail}</span></article>)}
          </div>
        </section>

        <section id="swim" className="token-section">
          <div className="network-wrap token-layout">
            <div className="token-intro"><p className="network-label">03 / THE NETWORK TOKEN</p><h2>$SWIM</h2><p>A voice in what airs.<br />A stake in the culture.</p></div>
            <div className="token-rows">
              {[
                { title: "Program the channel", body: "Vote on the weekly queue and help decide which shows enter the lineup." },
                { title: "Support the creators", body: "A planned rewards pool gives featured creators a reason to keep making their next episode." },
                { title: "Enter the queue", body: "Token-based submission access is intended to keep the queue focused on original work." },
                { title: "Shape what’s next", body: "Over time, community proposals will help guide formats, commissions, and the network’s direction." },
              ].map((item, i) => <article key={item.title}><span className="token-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="roadmap" className="network-wrap network-section">
          <div className="section-index"><span>04 / THE PROGRAM SCHEDULE</span></div>
          <div className="section-heading"><h2>Building toward<br /><span>something worth watching.</span></h2><p className="network-copy">From a first lineup to a network of original worlds. Our planned sequence.</p></div>
          <div className="schedule">
            {[
              { phase: "01", title: "Signal on", body: "Establish the network, open community channels, and introduce a hand-picked first lineup." },
              { phase: "02", title: "Open the queue", body: "Open creator submissions, introduce audience curation, and activate the creator rewards pool." },
              { phase: "03", title: "Make it a habit", body: "Build a weekly schedule. Give recurring shows season slots and audiences a reason to tune back in." },
              { phase: "04", title: "Build new worlds", body: "Reinvest a portion of network earnings into in-house productions, original commissions, and development support for standout creators." },
            ].map((item) => <article key={item.phase} className="schedule-row"><span className="schedule-block">PHASE {item.phase}</span><div><h3>{item.title}</h3></div><p>{item.body}</p><span className="schedule-arrow" aria-hidden="true">↗</span></article>)}
          </div>
          <p className="schedule-note">The direction is set. Features and timing will evolve as we build.</p>
        </section>

        <footer className="network-footer">
          <div className="network-wrap">
            <div className="footer-invite"><h2>See you on<br />the other side.</h2><a href="#waitlist" className="network-button">Get on the list <span aria-hidden="true">↗</span></a></div>
            <div className="footer-rule"><a href="#lineup" className="footer-brand" style={displayFont}>[ai swim]</a><nav aria-label="Footer"><a href="#thesis">The idea</a><a href="#swim">$SWIM</a><a href="#roadmap">Schedule</a></nav></div>
            <p className="footer-disclaimer">$SWIM is a utility and curation token for the [ai swim] network — it is not a security, an investment contract, or a promise of profit, and nothing on this page is financial advice. Token mechanics, timelines, and features are in design and subject to change before launch.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
