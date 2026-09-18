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
              Roadmap
            </a>
            <a href="/dashboard" className="transition-colors hover:text-white">
              Holder room
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
          <p className="network-label"><span className="signal-dot" />THE NETWORK STARTS WITH $SWIM</p>
          <h1>Independent entertainment.<br /><span>Built from the beginning.</span></h1>
          <p className="launch-hero-copy">A Web3 network for original shows and the people who make them. Token first. Producer development next. A home for exceptional AI-assisted entertainment to follow.</p>
          <div className="launch-hero-actions"><a href="#waitlist" className="network-button">Get launch updates <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a><a href="#roadmap" className="launch-text-link">See what comes next <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a></div>
          <p className="launch-hero-note">PRE-LAUNCH · PROGRAMMING IN DEVELOPMENT</p>
        </div>
      </section>

      <main className="network-page">
        <div className="launch-sequence" aria-label="Planned launch sequence"><div className="network-wrap"><span><b>01</b> Launch $SWIM</span><span><b>02</b> Develop the first shows</span><span><b>03</b> Open subscriptions</span></div></div>
        <section id="waitlist" className="network-wrap signup-section">
          <div>
            <h2>Be here for the beginning.</h2>
            <p className="network-copy">Join the founding community’s update list. Follow the token launch, the first producer opportunities, and the road to our first previews.</p>
          </div>
          <div className="signup-form">
            <WaitlistForm />
            <p className="network-note">Free email updates. No token purchase or subscription required.</p>
          </div>
        </section>

        <section id="thesis" className="manifesto-section">
          <div className="network-wrap">
            <div className="section-index"><span>01 / THE NETWORK</span></div>
            <h2>First, a community.<br /><span>Then, a network worth watching.</span></h2>
            <div className="manifesto-bottom">
              <span className="bracket-mark" aria-hidden="true">[<ArrowUpRight className="icon-arrow" />]</span>
              <div>
                <p>ai swim is building a Web3 entertainment network for independent shows and films made with the help of AI. We’re starting with the planned $SWIM token launch, before a finished show library.</p>
                <p>Next, independent producers introduce their ideas through pilot previews. The community discovers them, $SWIM holders help shape the lineup, and the network develops selected projects into original productions.</p>
              </div>
            </div>
            <div className="production-commitment">
              <div><p className="network-label">CREATIVE FREEDOM + PRODUCTION SUPPORT</p><h3>We back the people behind the shows.</h3></div>
              <p>Our ambition is to give selected producers funding, tools, collaborators, and distribution while making room for distinctive creative voices. Original commissions and in-house development are part of the network we’re building.</p>
            </div>
          </div>
        </section>

        <section id="swim" className="token-section token-utility-section" aria-labelledby="swim-heading">
          <div className="network-wrap token-layout">
            <div className="token-intro">
              <p className="network-label">02 / THE NETWORK TOKEN</p>
              <h2 id="swim-heading">$SWIM</h2>
              <SwimCoin />
              <p>The token comes first.<br />Help shape what follows.</p>
              <p className="token-description">The planned $SWIM ICO is our first launch milestone. It brings the founding community together ahead of the first shows, with participation features rolling out as the network develops.</p>
              <a href="#waitlist" className="network-button token-cta">Get ICO updates <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a>
            </div>
            <div className="token-rows utility-cards">
              {[
                { title: "Know what launches first", body: "Before the ICO, we’ll publish token terms, the intended use of proceeds, and which features will be available at launch. Future utility will be distinguished from day-one access." },
                { title: "Discover the first previews", body: "Planned holder access to early previews and producer updates as the first slate takes shape. Finished shows are not part of the token-launch offering." },
                { title: "Help shape the lineup", body: "Once previews are available, planned holder voting will inform programming decisions alongside story quality, production feasibility, and editorial judgment." },
                { title: "Contribute ideas", body: "Planned community proposals give holders a way to suggest programming and network initiatives. Paid work and referral opportunities have their own eligibility and terms." },
              ].map((item, i) => <article key={item.title}><span className="token-index">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
          </div>
          <p className="network-wrap token-status">PRE-LAUNCH — Tokenomics, use of proceeds, eligibility, and launch-day utility are still being defined. The token, viewing subscription, and paid contribution programs serve different purposes.</p>
        </section>

        <section id="how" className="network-wrap network-section">
          <div className="section-index"><span>03 / PAID CONTRIBUTION</span></div>
          <div className="section-heading"><h2>Help build the network.<br /><span>Get paid for what you contribute.</span></h2><p className="network-copy">ai swim is building a home for independent entertainment—and opportunities for the people behind it. Producers can earn through commissioned projects, creative contributors through paid work, and community partners through qualifying subscriber referrals.</p></div>
          <div className="process-grid">
            {[
              { number: "01", title: "Make original shows.", detail: "PRODUCER COMMISSIONS · PLANNED", body: "Introduce a world, a story, and a point of view through a pilot preview. Selected producers can be offered paid development or production commissions with an agreed scope and budget." },
              { number: "02", title: "Bring your craft.", detail: "CREATIVE WORK · PLANNED", body: "Writing, editing, sound, design, and production. We plan to publish paid briefs as projects are funded, with deliverables and payment terms stated before work begins." },
              { number: "03", title: "Grow the audience.", detail: "SUBSCRIBER REFERRALS · LATER", body: "When paid subscriptions launch, a planned partner program will offer rewards for qualifying subscriber referrals. Eligibility, attribution, and payment terms will be published before it opens." },
            ].map((step) => <article key={step.number} className="process-step"><div className="process-number"><span>{step.number}</span><ArrowUpRight aria-hidden="true" className="icon-arrow" /></div><h3>{step.title}</h3><p>{step.body}</p><span className="network-label">{step.detail}</span></article>)}
          </div>
          <p className="discovery-note">These are planned earning opportunities, not open jobs or guaranteed income. Each requires an available budget, selection or eligibility, and agreed terms. Holding $SWIM alone does not earn a payment.</p>
        </section>

        <section id="standards" className="token-section">
          <div className="network-wrap token-layout">
            <div className="token-intro"><p className="network-label">04 / THE VIEWING EXPERIENCE</p><h2 className="standards-title">Shows worth<br />coming back for.</h2><p>A paid subscription.<br />When the programming is ready.</p></div>
            <div className="token-rows">
              {[
                { title: "One curated home", body: "Original shows first, with films to follow. A considered library brings independent entertainment together instead of leaving viewers to search across scattered accounts." },
                { title: "Quality, however much AI it takes", body: "Fully generated or lightly assisted: story, direction, performance, and craft set the standard. The tools are part of the process; the entertainment has to stand on its own." },
                { title: "Subscribe when there’s something to watch", body: "Paid viewing comes later, when programming and a release schedule are ready. Pricing, access, and the first slate will be announced before subscriptions open." },
                { title: "Revenue that supports the next shows", body: "The model is to put a portion of subscription and other network earnings into new commissions, in-house productions, and paid creative work. Early projects will need separately allocated funding." },
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
          <p className="discovery-note">Audience response and planned $SWIM holder voting inform selection alongside story, craft, and production feasibility.</p>
        </section>

        <section id="roadmap" className="network-wrap network-section">
          <div className="section-index"><span>06 / BUILDING THE NETWORK</span></div>
          <div className="section-heading"><h2>The token is the start.<br /><span>Here’s what comes after.</span></h2><p className="network-copy">No finished shows are planned for token launch. These are the milestones between the founding community and a functioning entertainment network.</p></div>
          <div className="schedule">
            {[
              { phase: "01", title: "Launch $SWIM", body: "Publish tokenomics, intended use of proceeds, eligibility, and launch-day utility before the planned ICO. Establish the founding community and communicate development progress." },
              { phase: "02", title: "Introduce the first previews", body: "Recruit independent producers and establish budgets for the first development opportunities. Introduce pilot previews and community input as projects become ready." },
              { phase: "03", title: "Produce the first originals", body: "Select feasible projects, agree paid commissions, and develop the first shows. Publish creative briefs when funded work is available, and share production milestones." },
              { phase: "04", title: "Open the viewing network", body: "Launch paid subscriptions with programming worth watching and a release schedule. Introduce qualifying subscriber referrals and reinvest a portion of network earnings into the next shows." },
            ].map((item) => <article key={item.phase} className="schedule-row"><span className="schedule-block">PHASE {item.phase}</span><div><h3>{item.title}</h3></div><p>{item.body}</p><ArrowUpRight aria-hidden="true" className="icon-arrow schedule-arrow" /></article>)}
          </div>
          <p className="schedule-note">Milestones depend on funding, producer agreements, and production readiness. Dates will be announced as those requirements are met.</p>
        </section>

        <footer className="network-footer">
          <div className="network-wrap">
            <div className="footer-invite"><h2>Be part of<br />what comes next.</h2><a href="#waitlist" className="network-button">Get on the list <ArrowUpRight aria-hidden="true" className="icon-arrow" /></a></div>
            <div className="footer-rule"><a href="#top" className="footer-brand" style={displayFont}>[ai swim]</a><nav aria-label="Footer"><a href="#thesis">The network</a><a href="#how">Get involved</a><a href="#swim">$SWIM</a><a href="/dashboard">Holder room</a></nav></div>
            <p className="footer-disclaimer">ai swim is in development. The ICO, token features, shows, subscriptions, and contribution programs described here are planned. Joining the update list does not purchase tokens, reserve paid work, or include a subscription. Earnings require qualifying work or referrals under published terms; token ownership alone does not entitle holders to payments or network revenue.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
