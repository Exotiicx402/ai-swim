"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, AudioLines, Bell, Check, ChevronRight, Clapperboard, Compass, LayoutDashboard, LockKeyhole, Radio, Settings2, Sparkles, Users, Wallet } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "updates", label: "Network updates", icon: Radio },
  { id: "previews", label: "The first slate", icon: Clapperboard },
  { id: "opportunities", label: "Opportunities", icon: Sparkles },
  { id: "community", label: "Community", icon: Users },
  { id: "preferences", label: "Your interests", icon: Settings2 },
] as const;
type Section = typeof sections[number]["id"];
const updates = [
  { title: "The network starts with $SWIM", tag: "NETWORK PLAN", body: "The planned token launch comes before the first show library. Next come producer development, pilot previews, selected original productions, and eventually a paid viewing subscription.", detail: "The launch plan still needs published token terms, an intended use of proceeds, and a precise definition of launch-day access. This dashboard is a public preview while holder verification is being built." },
  { title: "A place for the people behind the shows", tag: "CREATIVE DIRECTION", body: "Independent producers need room to create and support to bring their work to an audience. The network’s ambition includes original commissions, in-house development, and paid creative briefs.", detail: "Opportunities will be published as budgets and projects are approved. A real brief will include scope, payment, eligibility, deadlines, and selection criteria. There are no open commissions to apply for yet." },
  { title: "From a moment in the feed to a full show", tag: "PROGRAMMING", body: "Pilot previews will introduce original worlds before full episodes are ready. Community feedback will inform development alongside craft, story, and production feasibility.", detail: "A preview is an introduction to a possible show, not a guarantee of a full series. The first slate and its producers have not been announced. Paid subscriptions will follow programming readiness." },
];
const phases = ["Define the token launch", "Introduce pilot previews", "Produce the first originals", "Open viewing subscriptions"];
const interests = ["Original shows", "Producer commissions", "Writing & development", "Editing & production", "Sound & music", "Subscriber referrals"];

export function HolderDashboard({ wallet }: { wallet?: string }) {
  const [section, setSection] = useState<Section>("overview");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [category, setCategory] = useState("All opportunities");
  const [selected, setSelected] = useState<string[]>([]);
  const [saveStatus, setSaveStatus] = useState("");
  function loadInterests() {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem("ai-swim-preview-interests") ?? "[]");
      if (Array.isArray(saved)) setSelected(saved.filter((item): item is string => typeof item === "string" && interests.includes(item)));
    } catch { /* The preview works even when local storage is unavailable. */ }
  }
  function saveInterests() {
    try { localStorage.setItem("ai-swim-preview-interests", JSON.stringify(selected)); setSaveStatus("Saved on this device. No notifications have been enabled."); }
    catch { setSaveStatus("Your browser could not save these interests. They remain selected for this visit."); }
  }
  function navigate(next: Section) {
    if (next === "preferences") { loadInterests(); setSaveStatus(""); }
    setSection(next);
  }
  return (
    <div className="holder-shell">
      <aside className="holder-sidebar">
        <Link href="/" className="holder-brand">[ai swim]</Link>
        <p className="holder-kicker sidebar-label">THE HOLDER ROOM</p>
        <nav aria-label="Dashboard">{sections.map(({ id, label, icon: Icon }) => <button type="button" key={id} aria-current={section === id ? "page" : undefined} onClick={() => navigate(id)}><Icon size={17} />{label}{section === id && <span className="nav-dot" />}</button>)}</nav>
        <div className="sidebar-bottom"><div className="sidebar-token"><span>$SWIM</span><p>The network starts here.</p></div><Link href="/dashboard"><LockKeyhole size={15} /> Access requirements <ArrowUpRight size={14} /></Link><Link href="/">Back to the network <ArrowUpRight size={14} /></Link></div>
      </aside>
      <div className="holder-workspace">
        <header className="holder-topbar"><span>THE NETWORK <span className="topbar-divider">/</span> {sections.find(item => item.id === section)?.label}</span><Link href="/dashboard" className="holder-access-pill"><Wallet size={14} />{wallet ? `${wallet.slice(0, 4)}…${wallet.slice(-4)}` : "Access not verified"}</Link></header>
        <div className="holder-preview-banner"><span><Compass size={15} />{wallet ? "Founding chapter" : "Public dashboard preview"}</span><p>{wallet ? "Holder access verified. Programming and contribution programs are still in development." : "Explore the experience. This preview does not grant holder access."}</p></div>
        <main className="holder-content" id="dashboard-content">
          <div className="holder-page-title"><p className="holder-kicker">[ai swim] / FOUNDING CHAPTER</p><h1>{section === "overview" ? "Welcome to the beginning." : sections.find(item => item.id === section)?.label}</h1><p>{section === "overview" ? "A closer look at the network we’re building together." : section === "updates" ? "The direction, the decisions, and what comes next." : section === "previews" ? "Original worlds start with a first look." : section === "opportunities" ? "Help build the network. Get paid for what you contribute." : section === "community" ? "A voice in what comes next." : "Make this space feel more like you."}</p></div>

          {section === "overview" && <>
            <div className="holder-overview-grid">
              <section className="holder-feature"><div className="broadcast-art" aria-hidden="true"><i /><i /><i /><span>[as]</span></div><div className="feature-content"><span className="holder-badge">THE NEXT CHAPTER</span><h2>Before the premiere.<br />Behind the scenes.</h2><p>Follow the path from the token launch to the first original shows. This is where the network’s progress will come into focus.</p><button className="holder-button" onClick={() => navigate("updates")}>Explore the network plan <ArrowUpRight size={16} /></button></div></section>
              <section className="holder-panel milestone-panel"><div className="panel-heading"><h2>Building the network</h2><Radio size={17} /></div><p className="holder-muted">Planned milestones</p><ol className="holder-milestones">{phases.map((phase, i) => <li key={phase}><span>{i + 1}</span><div>{phase}<small>{i === 0 ? "In planning" : "To follow"}</small></div></li>)}</ol><Link href="/#roadmap" className="holder-text-link">Read the full roadmap <ArrowUpRight size={14} /></Link></section>
            </div>
            <div className="holder-section-heading"><h2>Find your place.</h2><span>Three ways to get closer</span></div>
            <div className="holder-three-grid">{[
              { icon: Clapperboard, title: "Discover original worlds", text: "Meet the first previews when producers and projects are ready to be introduced.", target: "previews" as Section, label: "Explore the slate" },
              { icon: AudioLines, title: "Bring your craft", text: "Future commissions and creative briefs, with scope and payment terms up front.", target: "opportunities" as Section, label: "View opportunities" },
              { icon: Users, title: "Help shape what’s next", text: "Preview feedback and community proposals are part of the planned holder experience.", target: "community" as Section, label: "Explore participation" },
            ].map(({ icon: Icon, title, text, target, label }) => <section key={title} className="holder-panel pathway-card"><Icon size={23} /><h3>{title}</h3><p>{text}</p><button onClick={() => navigate(target)} className="holder-text-link">{label}<ChevronRight size={15} /></button></section>)}</div>
            <section className="holder-update-strip"><div><span className="holder-kicker">START HERE</span><h3>What does the founding chapter include?</h3><p>Read the network plan and track what’s available now versus what’s still being developed.</p></div><button aria-label="Read the founding chapter update" onClick={() => { setExpanded(0); navigate("updates"); }}><ArrowUpRight size={22} /></button></section>
          </>}

          {section === "updates" && <div className="holder-updates">{updates.map((update, i) => <article className="holder-panel" key={update.title}><span className="holder-kicker">{update.tag} · PUBLIC OVERVIEW</span><h2>{update.title}</h2><p>{update.body}</p><button className="holder-text-link" aria-expanded={expanded === i} aria-controls={`update-${i}`} onClick={() => setExpanded(expanded === i ? null : i)}>{expanded === i ? "Close details" : "Read details"}<ChevronRight size={15} /></button>{expanded === i && <div id={`update-${i}`} className="update-detail">{update.detail}</div>}</article>)}</div>}

          {section === "previews" && <><section className="holder-panel holder-empty"><Clapperboard size={36} /><span className="holder-kicker">FIRST SLATE / NOT ANNOUNCED</span><h2>The first frame is still ahead.</h2><p>No show previews have been announced. This space will introduce the premise, producer, and development stage of each selected project when it’s ready.</p><button className="holder-button" onClick={() => navigate("preferences")}>Choose your interests <ArrowUpRight size={16} /></button></section><div className="holder-three-grid slate-steps">{["Meet the producer", "Watch the preview", "Follow development"].map((title, i) => <div className="holder-panel" key={title}><span className="holder-kicker">0{i + 1} / PLANNED</span><h3>{title}</h3></div>)}</div></>}

          {section === "opportunities" && <><div className="holder-filters" role="group" aria-label="Opportunity category">{["All opportunities", "Producer commissions", "Creative briefs", "Subscriber referrals"].map(value => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</div><section className="holder-panel holder-empty"><Sparkles size={36} /><span className="holder-kicker">{category.toUpperCase()}</span><h2>{category === "Subscriber referrals" ? "An audience worth bringing back." : "Good work deserves a clear brief."}</h2><p>{category === "Subscriber referrals" ? "The referral program is planned for the subscription launch. Qualifying conversions, eligibility, and payment terms will be published before it opens." : "There are no open opportunities in this category yet. Funded opportunities will include the scope, payment, eligibility, deadline, and selection process before you apply."}</p><button className="holder-button" onClick={() => navigate("preferences")}>Set your interests <ArrowUpRight size={16} /></button></section><p className="holder-footnote">Paid opportunities depend on funded projects and published terms. Holding $SWIM alone does not earn a payment or guarantee selection.</p></>}

          {section === "community" && <><div className="holder-two-grid"><section className="holder-panel community-card"><Users size={26} /><span className="holder-badge">PLANNED</span><h2>A voice in the lineup.</h2><p>When previews are available, holder feedback and voting will help inform selection alongside story quality and production feasibility.</p><div className="holder-inline-status">No active votes</div></section><section className="holder-panel community-card"><Radio size={26} /><span className="holder-badge">PLANNED</span><h2>Ideas for the network.</h2><p>Community proposals will give holders a place to suggest programming and network initiatives. Participation rules will be published before submissions open.</p><div className="holder-inline-status">Proposals are not open</div></section></div><section className="holder-update-strip"><div><h3>Follow the launch announcements.</h3><p>Community channels and participation details will be shared through official network updates.</p></div><Link href="/#waitlist" className="holder-button">Get email updates <ArrowUpRight size={16} /></Link></section></>}

          {section === "preferences" && <section className="holder-panel preferences-panel"><Bell size={25} /><h2>What brings you to ai swim?</h2><p>Choose the parts of the network you want to follow. Your choices are saved only on this device; they are not linked to a wallet or mailing list.</p><div className="holder-interest-list">{interests.map(interest => <label key={interest}><input type="checkbox" checked={selected.includes(interest)} onChange={() => { setSaveStatus(""); setSelected(previous => previous.includes(interest) ? previous.filter(item => item !== interest) : [...previous, interest]); }} /><span>{interest}</span></label>)}</div><button className="holder-button" onClick={saveInterests}>Save interests <Check size={16} /></button><p role="status" className="interest-save-status">{saveStatus}</p></section>}
        </main>
        <footer className="holder-bottom-bar"><span>[ai swim] · Independent entertainment</span><span>{wallet ? "Verified holder session" : "Public preview · No wallet connected"}</span></footer>
      </div>
    </div>
  );
}
