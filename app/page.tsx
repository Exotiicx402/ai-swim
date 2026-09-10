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
    <div className="bg-black text-white">
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
            className="hidden rounded-md bg-[#FF3399] px-4 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90 sm:inline-block"
          >
            Join waitlist
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

      <section id="waitlist" className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#FF3399] uppercase">
            Get notified
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={displayFont}
          >
            Be first when the queue opens.
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            Submissions open in Block 02. Join the list and we&apos;ll let you
            know the moment the network is ready for your show.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section id="thesis" className="mx-auto max-w-3xl px-6 py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#FF3399] uppercase">
          Why now
        </p>
        <h2
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          style={displayFont}
        >
          The cartoons are already here.
          <br />
          The channel isn&apos;t.
        </h2>
        <div className="mt-8 space-y-5 text-white/70">
          <p>
            Something changed in the last few weeks. New generation models finally
            hold a character&apos;s face, voice, and world steady across shot
            after shot — the single biggest blocker creators have complained
            about since AI animation started. The result: people aren&apos;t
            posting one-off clips anymore. They&apos;re building{" "}
            <strong className="text-white">
              recurring characters, serialized episodes, original IP
            </strong>{" "}
            — real shows, made by one person with a laptop.
          </p>
          <p>
            Those shows are scattered across a dozen feeds with no shared home,
            no lineup, no sense of a channel you&apos;d tune into. Cartoon
            Network and Adult Swim were built for a world with a handful of
            studios and a broadcast slot to fill. This world has thousands of
            studios of one, publishing faster than any programming department
            could ever greenlight.
          </p>
          <p>
            <strong className="text-white">
              [ai swim] is the channel for that world
            </strong>{" "}
            — a network where the lineup is decided by the people watching it,
            not a network executive, and where the token that funds the
            curation is the same token that pays the creators.
          </p>
        </div>
      </section>

      <section id="how" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#FF3399] uppercase">
            Signal chain
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={displayFont}
          >
            How the network runs
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              {
                step: "01 — Submit",
                title: "Creators upload",
                body: "A finished episode, pilot, or short goes into the network's queue — open to any AI-made show, any tool, any style.",
                icon: (
                  <path d="M12 3v12M12 3l-4 4M12 3l4 4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
                ),
              },
              {
                step: "02 — Curate",
                title: "$SWIM holders vote",
                body: "Each week's queue is watched and ranked by the token-holding audience. No pitch meetings, no executives — the votes are the greenlight.",
                icon: <path d="M4 12h4l3 7 4-14 3 7h2" />,
              },
              {
                step: "03 — Air",
                title: "Top votes hit the lineup",
                body: "Winning shows are featured on the network channel for the week, and a share of the rewards pool pays out to the creator.",
                icon: (
                  <>
                    <rect x="3" y="5" width="18" height="12" rx="1" />
                    <path d="M8 21h8M12 17v4" />
                  </>
                ),
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col gap-4 bg-black p-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-8 w-8 text-[#FF3399]"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
                <span className="text-xs font-semibold tracking-[0.15em] text-white/50">
                  {s.step}
                </span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="swim" className="mx-auto max-w-3xl px-6 py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#FF3399] uppercase">
          Token utility
        </p>
        <h2
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          style={displayFont}
        >
          What $SWIM actually does
        </h2>

        <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10">
          {[
            {
              label: "Curation voting",
              swatch: "#FF3399",
              body: "Holding $SWIM is how you vote. Weekly rounds decide which submitted shows get featured in the network's lineup — the audience programs the schedule, not a studio.",
            },
            {
              label: "Creator rewards",
              swatch: "#FF0000",
              body: "A rewards pool pays out to the creators of aired and top-voted shows — the reason to submit here instead of just posting to a feed and hoping the algorithm notices.",
            },
            {
              label: "Submission access",
              swatch: "#FF00FF",
              body: "Entering a show into the review queue costs or requires holding $SWIM — keeps the queue spam-free and ties submitters' incentives to the network's, not just a random upload button.",
            },
            {
              label: "Network governance",
              swatch: "#8A8A8A",
              body: "Longer-term calls — treasury spend, new formats, what \"airing\" even means as the network grows — move to token-holder proposals and votes over time.",
            },
          ].map((row) => (
            <div key={row.label} className="grid gap-2 p-6 sm:grid-cols-[200px_1fr] sm:gap-6">
              <div className="flex items-start gap-3 text-sm font-semibold">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: row.swatch }}
                  aria-hidden="true"
                />
                {row.label}
              </div>
              <p className="text-sm leading-relaxed text-white/60">{row.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#FF3399] uppercase">
            Program schedule
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={displayFont}
          >
            Roadmap
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {[
              {
                block: "Block 01",
                tag: "Signal on",
                title: "Launch",
                body: "Brand and $SWIM go live. Community channels open. A first, hand-picked lineup airs to prove the format before the queue opens to everyone.",
                accent: "#FF3399",
              },
              {
                block: "Block 02",
                tag: "Open feed",
                title: "Submissions open",
                body: "The public submission queue and curation voting mechanic ship. The creator rewards pool activates and pays out its first winners.",
                accent: "#FF0000",
              },
              {
                block: "Block 03",
                tag: "Prime time",
                title: "Scheduled programming",
                body: "The weekly lineup becomes a real scheduled channel — recurring shows earn season slots, and the network starts to feel like a channel, not a feed.",
                accent: "#FF00FF",
              },
              {
                block: "Block 04",
                tag: "Network IP",
                title: "Studio flywheel",
                body: "Treasury-funded commissions for breakout creators, plus licensing and merch for the shows that prove they have an audience.",
                accent: "#8A8A8A",
              },
            ].map((b) => (
              <div key={b.block} className="overflow-hidden rounded-xl border border-white/10 bg-black">
                <div
                  className="flex items-baseline justify-between px-6 py-3 text-xs font-semibold tracking-[0.1em] text-black uppercase"
                  style={{ background: b.accent }}
                >
                  <span>{b.block}</span>
                  <span>{b.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <span className="text-base font-bold" style={displayFont}>
              [ai swim]
            </span>
            <nav className="flex gap-6 text-xs font-semibold tracking-[0.1em] text-white/50 uppercase">
              <a href="#thesis" className="hover:text-white">
                Thesis
              </a>
              <a href="#swim" className="hover:text-white">
                $SWIM
              </a>
              <a href="#roadmap" className="hover:text-white">
                Roadmap
              </a>
            </nav>
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-white/40">
            $SWIM is a utility and curation token for the [ai swim] network — it
            is not a security, an investment contract, or a promise of profit,
            and nothing on this page is financial advice. Token mechanics,
            timelines, and features are in design and subject to change before
            launch.
          </p>
        </div>
      </footer>
    </div>
  );
}
