"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, AudioLines, Bell, Check, ChevronRight, Clapperboard, Compass, LayoutDashboard, LockKeyhole, Radio, Settings2, Sparkles, Users, Wallet } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "updates", label: "Network updates", icon: Radio },
  { id: "previews", label: "Shows", icon: Clapperboard },
  { id: "opportunities", label: "Opportunities", icon: Sparkles },
  { id: "community", label: "Community", icon: Users },
  { id: "preferences", label: "Your interests", icon: Settings2 },
] as const;
type Section = typeof sections[number]["id"];
const updates = [
  { title: "Independent voices. Original worlds.", tag: "OUR NETWORK", body: "ai swim brings independent entertainment and its community together. Shows come first: distinctive stories, memorable characters, and producers with something to say.", detail: "Explore shows for previews and producer introductions. Check opportunities for paid creative work, and community for participation rounds. Availability is shown in each section." },
  { title: "A place for the people behind the shows", tag: "CREATIVE DIRECTION", body: "Creative freedom needs practical support. Our approach brings together producer development, original commissions, and the craft behind every frame.", detail: "Review each open brief for scope, payment, deadlines, and selection criteria. Earnings come from agreed work or qualifying referrals, not from holding a token alone." },
  { title: "From a moment in the feed to a full show", tag: "PROGRAMMING", body: "A scene catches your attention. A character makes you curious. A preview introduces the world behind it. Follow the projects that make you want to see more.", detail: "The network’s editorial standard is story, craft, and a distinct point of view. AI can play a little part or a large one; the entertainment has to stand on its own." },
];
const phases = ["Discover a world", "Meet its producer", "Follow the production", "Come back for the premiere"];
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
    try { localStorage.setItem("ai-swim-preview-interests", JSON.stringify(selected)); setSaveStatus("Interests saved on this device."); }
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
        <div className="sidebar-bottom"><div className="sidebar-token"><span>$SWIM</span><p>The network starts here.</p></div><Link href="/dashboard"><LockKeyhole size={15} /> Holder access <ArrowUpRight size={14} /></Link><Link href="/">Back to the network <ArrowUpRight size={14} /></Link></div>
      </aside>
      <div className="holder-workspace">
        <header className="holder-topbar"><span>THE NETWORK <span className="topbar-divider">/</span> {sections.find(item => item.id === section)?.label}</span><Link href="/dashboard" className="holder-access-pill"><Wallet size={14} />{wallet ? `${wallet.slice(0, 4)}…${wallet.slice(-4)}` : "Sign in"}</Link></header>
        <div className="holder-preview-banner"><span><Compass size={15} />{wallet ? "Your membership" : "Guest view"}</span><p>{wallet ? "Your space for network updates, shows, and opportunities." : "Sign in to verify your holder access."}</p></div>
        <main className="holder-content" id="dashboard-content">
          <div className="holder-page-title"><p className="holder-kicker">[ai swim] / YOUR DASHBOARD</p><h1>{section === "overview" ? "Welcome to the network." : sections.find(item => item.id === section)?.label}</h1><p>{section === "overview" ? "Your shows, your community, your next opportunity." : section === "updates" ? "The direction, the decisions, and what comes next." : section === "previews" ? "Original worlds start with a first look." : section === "opportunities" ? "Help build the network. Get paid for what you contribute." : section === "community" ? "A voice in what comes next." : "Make this space feel more like you."}</p></div>

          {section === "overview" && <>
            <div className="holder-overview-grid">
              <section className="holder-feature"><div className="broadcast-art" aria-hidden="true"><i /><i /><i /><span>[as]</span></div><div className="feature-content"><span className="holder-badge">INSIDE THE NETWORK</span><h2>Before the premiere.<br />Behind the scenes.</h2><p>Get closer to the stories and the people behind them. Follow production updates, explore original worlds, and find your place in the network.</p><button className="holder-button" onClick={() => navigate("updates")}>Read network updates <ArrowUpRight size={16} /></button></div></section>
              <section className="holder-panel milestone-panel"><div className="panel-heading"><h2>Inside ai swim</h2><Radio size={17} /></div><p className="holder-muted">From idea to audience</p><ol className="holder-milestones">{phases.map((phase, i) => <li key={phase}><span>{i + 1}</span><div>{phase}</div></li>)}</ol><Link href="/#roadmap" className="holder-text-link">How the network works <ArrowUpRight size={14} /></Link></section>
            </div>
            <div className="holder-section-heading"><h2>Find your place.</h2><span>Three ways to get closer</span></div>
            <div className="holder-three-grid">{[
              { icon: Clapperboard, title: "Discover original worlds", text: "Explore show previews and the producers behind them.", target: "previews" as Section, label: "Explore shows" },
              { icon: AudioLines, title: "Bring your craft", text: "Find commissions and creative briefs with clear scope and payment terms.", target: "opportunities" as Section, label: "View opportunities" },
              { icon: Users, title: "Help shape what’s next", text: "Find community discussions, lineup decisions, and ways to take part.", target: "community" as Section, label: "Explore participation" },
            ].map(({ icon: Icon, title, text, target, label }) => <section key={title} className="holder-panel pathway-card"><Icon size={23} /><h3>{title}</h3><p>{text}</p><button onClick={() => navigate(target)} className="holder-text-link">{label}<ChevronRight size={15} /></button></section>)}</div>
            <section className="holder-update-strip"><div><span className="holder-kicker">START HERE</span><h3>Get to know your network.</h3><p>Explore our approach to original shows, creative work, and community participation.</p></div><button aria-label="Read about the network" onClick={() => { setExpanded(0); navigate("updates"); }}><ArrowUpRight size={22} /></button></section>
          </>}

          {section === "updates" && <div className="holder-updates">{updates.map((update, i) => <article className="holder-panel" key={update.title}><span className="holder-kicker">{update.tag}</span><h2>{update.title}</h2><p>{update.body}</p><button className="holder-text-link" aria-expanded={expanded === i} aria-controls={`update-${i}`} onClick={() => setExpanded(expanded === i ? null : i)}>{expanded === i ? "Close details" : "Read details"}<ChevronRight size={15} /></button>{expanded === i && <div id={`update-${i}`} className="update-detail">{update.detail}</div>}</article>)}</div>}

          {section === "previews" && <><section className="holder-panel holder-empty"><Clapperboard size={36} /><span className="holder-kicker">SHOWS</span><h2>No previews to watch right now.</h2><p>Check back for new previews and producer introductions. Choose your interests to keep your favorites in mind.</p><button className="holder-button" onClick={() => navigate("preferences")}>Choose your interests <ArrowUpRight size={16} /></button></section><div className="holder-three-grid slate-steps">{["Meet the producer", "Watch the preview", "Follow development"].map((title, i) => <div className="holder-panel" key={title}><span className="holder-kicker">0{i + 1}</span><h3>{title}</h3></div>)}</div></>}

          {section === "opportunities" && <><div className="holder-filters" role="group" aria-label="Opportunity category">{["All opportunities", "Producer commissions", "Creative briefs", "Subscriber referrals"].map(value => <button key={value} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</div><section className="holder-panel holder-empty"><Sparkles size={36} /><span className="holder-kicker">{category.toUpperCase()}</span><h2>{category === "Subscriber referrals" ? "Referrals are not open right now." : "No open briefs right now."}</h2><p>{category === "Subscriber referrals" ? "Check back for subscriber referral opportunities and their payment terms." : "Check back for new opportunities in this category. Each brief includes the work, payment, deadline, and how to apply."}</p><button className="holder-button" onClick={() => navigate("preferences")}>Set your interests <ArrowUpRight size={16} /></button></section><p className="holder-footnote">Paid opportunities depend on funded projects and published terms. Holding $SWIM alone does not earn a payment or guarantee selection.</p></>}

          {section === "community" && <><div className="holder-two-grid"><section className="holder-panel community-card"><Users size={26} /><h2>A voice in the lineup.</h2><p>Find lineup votes here and review the previews, selection criteria, and participation rules before casting your vote.</p><div className="holder-inline-status">No active votes</div></section><section className="holder-panel community-card"><Radio size={26} /><h2>Ideas for the network.</h2><p>Bring ideas for programming and community initiatives. Check each proposal round for its focus and submission rules.</p><div className="holder-inline-status">No open proposal rounds</div></section></div><section className="holder-update-strip"><div><h3>Stay connected.</h3><p>Get network news and community announcements in your inbox.</p></div><Link href="/#waitlist" className="holder-button">Get email updates <ArrowUpRight size={16} /></Link></section></>}

          {section === "preferences" && <section className="holder-panel preferences-panel"><Bell size={25} /><h2>What brings you to ai swim?</h2><p>Choose the parts of the network you want to follow. Saved on this device. Email updates are managed separately.</p><div className="holder-interest-list">{interests.map(interest => <label key={interest}><input type="checkbox" checked={selected.includes(interest)} onChange={() => { setSaveStatus(""); setSelected(previous => previous.includes(interest) ? previous.filter(item => item !== interest) : [...previous, interest]); }} /><span>{interest}</span></label>)}</div><button className="holder-button" onClick={saveInterests}>Save interests <Check size={16} /></button><p role="status" className="interest-save-status">{saveStatus}</p></section>}
        </main>
        <footer className="holder-bottom-bar"><span>[ai swim] · Independent entertainment</span><span>{wallet ? "Verified holder session" : "Guest view · Not signed in"}</span></footer>
      </div>
    </div>
  );
}
