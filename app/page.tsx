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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
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
            <a href="#roadmap" className="transition-colors hover:text-white">
              How it works
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

      <section id="top" className="launch-hero relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
        <div className="launch-hero-art" aria-hidden="true"><AnimatedGrid
          startColor={[255, 0, 0]}
          endColor={[255, 0, 255]}
          animationStartColor={[255, 0, 0]}
          animationEndColor={[255, 0, 255]}
          rows={10}
          cols={15}
          cellSize="6rem"
          animationDuration="2s"
        /></div>
        <div className="launch-hero-content">
          <p className="network-label"><span className="signal-dot" />[ai swim] / A WEB3 ENTERTAINMENT NETWORK</p>
          <h1>Independent entertainment.</h1>
          <p className="launch-hero-copy">Original shows. Independent voices. A community with a part to play. Discover the world of ai swim and the people behind it.</p>
          <div className="launch-hero-actions"><a href="/dashboard" className="network-button">Enter the holder room <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a><a href="#roadmap" className="launch-text-link">Explore the network <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a></div>
          <p className="launch-hero-note">SHOWS · PRODUCERS · COMMUNITY</p>
        </div>
      </section>

      <main className="network-page">
        <div className="launch-sequence" aria-label="The network"><div className="network-wrap"><span><b>01</b> Discover original worlds</span><span><b>02</b> Support independent voices</span><span><b>03</b> Be part of the community</span></div></div>
        <section id="waitlist" className="network-wrap signup-section">
          <div>
            <h2>Stay in the loop.</h2>
            <p className="network-copy">Show announcements, producer stories, creative opportunities, and network news. Straight to your inbox.</p>
          </div>
          <div className="signup-form">
            <WaitlistForm />
            <p className="network-note">Free email updates. No token purchase or subscription required.</p>
          </div>
        </section>

        <section id="thesis" className="manifesto-section">
          <div className="network-wrap">
            <div className="section-index"><span>01 / THE NETWORK</span></div>
            <h2>Independent voices.<br /><span>A home of their own.</span></h2>
            <div className="manifesto-bottom">
              <span className="bracket-mark" aria-hidden="true">[<ArrowUpRight className="icon-arrow" />]</span>
              <div>
                <p>ai swim is a Web3 entertainment network for independent shows and films made with the help of AI. A home for distinctive stories and the people who bring them to life.</p>
                <p>Our model connects pilot previews, community discovery, and producer development. The ambition: give original ideas the backing and audience they deserve.</p>
              </div>
            </div>
            <div className="production-commitment">
              <div><p className="network-label">CREATIVE FREEDOM + PRODUCTION SUPPORT</p><h3>We back the people behind the shows.</h3></div>
              <p>Creative freedom and practical support belong together. Our focus is original commissions, in-house development, and the resources that help independent producers bring their vision to the screen.</p>
            </div>
          </div>
        </section>

        <section id="swim" className="token-section token-utility-section" aria-labelledby="swim-heading">
          <div className="network-wrap token-layout">
            <div className="token-intro">
              <p className="network-label">02 / THE NETWORK TOKEN</p>
              <h2 id="swim-heading">$SWIM</h2>
              <SwimCoin />
              <p>Your connection<br />to the network.</p>
              <p className="token-description">$SWIM is the network’s community token. The holder room brings network updates, show discovery, and participation opportunities into one place.</p>
              <a href="/dashboard" className="network-button token-cta">Explore the holder room <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a>
            </div>
            <div className="token-rows utility-cards">
              {[
                { title: "Your holder room", body: "A space for network updates, producer stories, and opportunities. Connect your eligible wallet when sign-in is available, or take a look as a guest." },
                { title: "Get closer to the shows", body: "Explore previews, meet the producers, and follow the stories that catch your attention. Find the latest releases and announcements in Shows." },
                { title: "Find your next opportunity", body: "Bring your skills to a creative brief or explore a producer commission. Each open opportunity sets out the work, eligibility, and payment terms." },
                { title: "Take part in the community", body: "Find lineup votes and proposal rounds in the community section. Each round lists its participation rules and availability." },
              ].map((item, i) => <article key={item.title}><span className="token-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
          </div>
          <p className="network-wrap token-status">Holder sign-in is currently unavailable. Explore the dashboard as a guest; check each section for access and availability.</p>
        </section>

        <section id="how" className="network-wrap network-section">
          <div className="section-index"><span>03 / PAID CONTRIBUTION</span></div>
          <div className="section-heading"><h2>Help build the network.<br /><span>Get paid for what you contribute.</span></h2><p className="network-copy">ai swim is a home for independent entertainment—and opportunities for the people behind it. Producers can earn through commissioned projects, creative contributors through paid work, and community partners through qualifying subscriber referrals.</p></div>
          <div className="process-grid">
            {[
              { number: "01", title: "Make original shows.", detail: "PRODUCER COMMISSIONS", body: "Introduce a world, a story, and a point of view through a pilot preview. Selected producers can be offered paid development or production commissions with an agreed scope and budget." },
              { number: "02", title: "Bring your craft.", detail: "CREATIVE WORK", body: "Writing, editing, sound, design, and production. Explore funded briefs with deliverables and payment terms stated before work begins." },
              { number: "03", title: "Grow the audience.", detail: "SUBSCRIBER REFERRALS", body: "Help new viewers find the network through qualifying subscriber referrals. Check opportunities for program availability, eligibility, and payment terms." },
            ].map((step) => <article key={step.number} className="process-step"><div className="process-number"><span>{step.number}</span><ArrowUpRight aria-hidden="true" className="icon-arrow" /></div><h3>{step.title}</h3><p>{step.body}</p><span className="network-label">{step.detail}</span></article>)}
          </div>
          <p className="discovery-note">Check the dashboard for open opportunities. Payment requires qualifying work or referrals under the terms of each program. Holding $SWIM alone does not earn a payment.</p>
        </section>

        <section id="standards" className="token-section">
          <div className="network-wrap token-layout">
            <div className="token-intro"><p className="network-label">04 / THE VIEWING EXPERIENCE</p><h2 className="standards-title">Shows worth<br />coming back for.</h2><p>Exceptional entertainment.<br />However much AI it takes.</p></div>
            <div className="token-rows">
              {[
                { title: "One curated home", body: "Shows first, then films. Our focus is a considered lineup that brings independent entertainment together in one place." },
                { title: "Quality, however much AI it takes", body: "Fully generated or lightly assisted: story, direction, performance, and craft set the standard. The tools are part of the process; the entertainment has to stand on its own." },
                { title: "Follow your next favorite", body: "Explore show announcements and release updates in the dashboard. Viewing subscriptions are not open right now." },
                { title: "Revenue that supports the next shows", body: "Our model directs a portion of subscription and other network earnings back into original commissions, in-house productions, and paid creative work." },
              ].map((item, i) => <article key={item.title}><span className="token-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="discovery" className="network-wrap network-section discovery-section">
          <div className="section-index"><span>05 / DISCOVERY TO PREMIERE</span></div>
          <div className="section-heading"><h2>A moment hooks you.<br /><span>A world brings you back.</span></h2><p className="network-copy">Short-form is the introduction. A great scene can find its audience in the feed, then bring them here to follow the show behind it.</p></div>
          <div className="discovery-path">
            {[
              { number: "01", title: "Find it in the feed.", body: "A scene, a character, a moment worth sharing. Previews introduce the show wherever you’re already watching." },
              { number: "02", title: "Follow it here.", body: "Explore the premise, meet the producer, and follow the journey from preview to production in one place." },
              { number: "03", title: "Come back for the show.", body: "As selected projects reach release, premieres and new episodes give the first spark somewhere to go. Subscribers get a reason to return." },
            ].map((step) => <article key={step.number}><span className="network-label">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
          </div>
          <p className="discovery-note">Story, craft, audience response, and production feasibility guide our approach to selection.</p>
        </section>

        <section id="roadmap" className="network-wrap network-section">
          <div className="section-index"><span>06 / HOW IT WORKS</span></div>
          <div className="section-heading"><h2>From an idea<br /><span>to your next favorite.</span></h2><p className="network-copy">A great show takes more than a great premise. Here’s the path from a producer’s vision to an audience that keeps coming back.</p></div>
          <div className="schedule">
            {[
              { phase: "01", title: "Introduce the world", body: "A pilot preview introduces the story, its characters, and the producer’s point of view. Give people a reason to want the next scene." },
              { phase: "02", title: "Find its audience", body: "Previews travel through the feed and bring viewers back to the show. Audience response helps reveal the stories people connect with." },
              { phase: "03", title: "Develop the production", body: "Selected projects need an agreed budget, a production team, and space to develop. Commissioned work turns a promising concept into a complete experience." },
              { phase: "04", title: "Keep the story going", body: "A release schedule gives viewers a reason to return. The network’s reinvestment model supports new work and the people behind it." },
            ].map((item) => <article key={item.phase} className="schedule-row"><span className="schedule-block">PHASE {item.phase}</span><div><h3>{item.title}</h3></div><p>{item.body}</p><ArrowUpRight aria-hidden="true" className="icon-arrow schedule-arrow" /></article>)}
          </div>
          <p className="schedule-note">Find project announcements and release updates in the holder room.</p>
        </section>

        <footer className="network-footer">
          <div className="network-wrap">
            <div className="footer-invite"><h2>Be part of<br />what comes next.</h2><a href="#waitlist" className="network-button">Get on the list <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a></div>
            <div className="footer-rule"><a href="#top" className="footer-brand" style={displayFont}>[ai swim]</a><nav aria-label="Footer"><a href="#thesis">The network</a><a href="#how">Get involved</a><a href="#swim">$SWIM</a><a href="/dashboard">Holder room</a></nav></div>
            <p className="footer-disclaimer">Show, subscription, and participation availability is listed in the dashboard. Joining the update list does not purchase tokens, reserve paid work, or include a subscription. Earnings require qualifying work or referrals under published terms; token ownership alone does not entitle holders to payments or network revenue.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
