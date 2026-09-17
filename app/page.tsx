import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
          <nav className="hidden gap-8 text-sm font-medium text-white/70 lg:flex">
            <a href="#lineup" className="transition-colors hover:text-white">
              Lineup
            </a>
            <a href="#thesis" className="transition-colors hover:text-white">
              The network
            </a>
            <a href="#how" className="transition-colors hover:text-white">
              For producers
            </a>
            <a href="#standards" className="transition-colors hover:text-white">
              Our standard
            </a>
            <a href="#roadmap" className="transition-colors hover:text-white">
              Roadmap
            </a>
          </nav>
          <a
            href="#waitlist"
            className="network-button header-cta"
          >
            Join waitlist <ArrowUpRight aria-hidden="true" className="icon-arrow" />
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
          Original worlds. A network behind them.
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
            <h2>Stay tuned.</h2>
            <p className="network-copy">Shows worth coming back to. Original films.<br />Follow the network as our first slate takes shape.</p>
          </div>
          <div className="signup-form">
            <WaitlistForm />
            <p className="network-note">Programming announcements, producer opportunities, and first releases.</p>
          </div>
        </section>

        <section id="thesis" className="manifesto-section">
          <div className="network-wrap">
            <div className="section-index"><span>01 / THE NETWORK</span></div>
            <h2>Original worlds.<br /><span>A network behind them.</span></h2>
            <div className="manifesto-bottom">
              <span className="bracket-mark" aria-hidden="true">[<ArrowUpRight className="icon-arrow" />]</span>
              <div>
                <p>[ai swim] is building an independent entertainment network for exceptional AI-powered series and films. A home for stories with a point of view, characters that stay with you, and worlds worth returning to.</p>
                <p>We’re here to discover emerging producers and help them build lasting bodies of work—with creative development, investment in original productions, and a deliberate path to an audience.</p>
              </div>
            </div>
            <div className="production-commitment">
              <div><p className="network-label">NETWORK EARNINGS → ORIGINAL SHOWS</p><h3>We back the people behind the shows.</h3></div>
              <p>Our model puts a portion of network earnings back into original commissions, in-house productions, and producer development. The ambition is to help promising pilots become enduring series.</p>
            </div>
          </div>
        </section>

        <section id="how" className="network-wrap network-section">
          <div className="section-index"><span>02 / FOR PRODUCERS</span></div>
          <div className="section-heading"><h2>A strong vision.<br /><span>The backing to build it.</span></h2><p className="network-copy">We’re building a development home for showrunners and filmmakers, from a first concept through production and release.</p></div>
          <div className="process-grid">
            {[
              { number: "01", title: "Develop the vision.", detail: "TALENT & DEVELOPMENT", body: "Discover distinctive producers and work with selected talent on the story, characters, and creative direction that can carry a series or a film." },
              { number: "02", title: "Back the production.", detail: "FUNDING & ORIGINALS", body: "Invest in selected projects, commission original work, and develop productions in-house. Give ambitious ideas the resources and creative support to reach the screen." },
              { number: "03", title: "Build the audience.", detail: "PROGRAMMING & RELEASE", body: "Give each show a considered place in the lineup, a release plan, and promotion that helps viewers discover it—and come back for the next episode." },
            ].map((step) => <article key={step.number} className="process-step"><div className="process-number"><span>{step.number}</span><ArrowUpRight aria-hidden="true" className="icon-arrow" /></div><h3>{step.title}</h3><p>{step.body}</p><span className="network-label">{step.detail}</span></article>)}
          </div>
        </section>

        <section id="standards" className="token-section">
          <div className="network-wrap token-layout">
            <div className="token-intro"><p className="network-label">03 / OUR EDITORIAL STANDARD</p><h2 className="standards-title">Worth<br />your time.</h2><p>Every release is a reason<br />to trust the next one.</p></div>
            <div className="token-rows">
              {[
                { title: "Story comes first", body: "A clear point of view, compelling characters, and something to feel. The technology serves the story." },
                { title: "Craft in every frame", body: "Direction, performance, editing, sound, and visual continuity. We look at the complete experience." },
                { title: "A lineup with intention", body: "Original productions and carefully selected independent work, brought together by a consistent editorial vision." },
                { title: "An audience with a voice", body: "Community favorites and viewer feedback help us discover talent. The network remains responsible for what it commissions and airs." },
              ].map((item, i) => <article key={item.title}><span className="token-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="roadmap" className="network-wrap network-section">
          <div className="section-index"><span>04 / BUILDING THE NETWORK</span></div>
          <div className="section-heading"><h2>Building toward<br /><span>something worth watching.</span></h2><p className="network-copy">Producer development and original programming are at the heart of the plan, from the beginning.</p></div>
          <div className="schedule">
            {[
              { phase: "01", title: "Find the voices", body: "Scout producers, define our editorial standard, and bring together a focused slate of series, films, and ideas for development." },
              { phase: "02", title: "Back the first slate", body: "Develop selected pilots, commission original projects, and build the production relationships behind the network’s first releases." },
              { phase: "03", title: "Give people a reason to return", body: "Launch a deliberate release schedule with premieres, recurring series, and programming that builds an audience for each show." },
              { phase: "04", title: "Grow the next generation", body: "Reinvest a portion of network earnings in new producers, in-house originals, and further development of the shows audiences connect with." },
            ].map((item) => <article key={item.phase} className="schedule-row"><span className="schedule-block">PHASE {item.phase}</span><div><h3>{item.title}</h3></div><p>{item.body}</p><ArrowUpRight aria-hidden="true" className="icon-arrow schedule-arrow" /></article>)}
          </div>
          <p className="schedule-note">The direction is set. Features and timing will evolve as we build.</p>
        </section>

        <section id="swim" className="network-wrap community-section">
          <div><p className="network-label">THE COMMUNITY / $SWIM</p><h3>A voice in the network.</h3></div>
          <p>$SWIM is being designed to support community participation and creator rewards. Its role sits alongside our editorial work, with specific mechanics still in development.</p>
        </section>

        <footer className="network-footer">
          <div className="network-wrap">
            <div className="footer-invite"><h2>Your next favorite show<br />starts somewhere.</h2><a href="#waitlist" className="network-button">Get on the list <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a></div>
            <div className="footer-rule"><a href="#lineup" className="footer-brand" style={displayFont}>[ai swim]</a><nav aria-label="Footer"><a href="#thesis">The network</a><a href="#how">For producers</a><a href="#swim">$SWIM</a></nav></div>
            <p className="footer-disclaimer">$SWIM is a utility and curation token for the [ai swim] network — it is not a security, an investment contract, or a promise of profit, and nothing on this page is financial advice. Token mechanics, timelines, and features are in design and subject to change before launch.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
