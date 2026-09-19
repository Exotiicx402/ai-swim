"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useVisibleAnimation } from "@/hooks/use-visible-animation";
import { LockKeyhole, Pause, Play } from "lucide-react";

// Only public promotional artwork belongs here. Never add trailer or pilot URLs.
const teasers = [
  { title: "Trench Days", image: "/covers/show-01.jpg" },
  { title: "The Simple Life", image: "/covers/show-02.jpg" },
  { title: "Multiverse Musk", image: "/covers/show-03.jpg" },
  { title: "Kirkinator", image: "/covers/show-04.jpg" },
];

export function ShowTeasers() {
  const animationRef = useVisibleAnimation();
  const [paused, setPaused] = useState(false);
  const [repeats, setRepeats] = useState(3);
  useEffect(() => {
    const element = animationRef.current;
    if (!element) return;
    // Each half must fill the viewport, including at the loop boundary.
    const observer = new ResizeObserver(([entry]) => {
      const cardStride = window.matchMedia("(max-width: 700px)").matches ? 222 : 276;
      setRepeats(Math.max(1, Math.ceil(entry.contentRect.width / (teasers.length * cardStride))));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [animationRef]);
  return (
    <div ref={animationRef} className="show-teasers">
      <div className="network-wrap teaser-caption">
        <p><LockKeyhole size={13} aria-hidden="true" /> A first look here. Trailers &amp; pilots for $SWIM holders.</p>
        <button type="button" aria-label={paused ? "Resume show banner" : "Pause show banner"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>
      </div>
      <div className="teaser-window" role="region" aria-label="Show artwork teasers">
        <div className={`teaser-track${paused ? " is-paused" : ""}`} style={{ animationDuration: `${repeats * 60}s` }}>
          {[0, 1].map((copy) => <div className="teaser-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {Array.from({ length: repeats }, (_, repeat) => teasers.map((show) => <Link href="/dashboard" className="teaser-card" key={`${repeat}-${show.title}`} aria-hidden={copy > 0 || repeat > 0 ? true : undefined} tabIndex={copy > 0 || repeat > 0 ? -1 : undefined} aria-label={`${show.title} — holder access`}>
              <Image src={show.image} alt={show.title} fill loading="eager" sizes="(max-width: 700px) 210px, 260px" />
              <span className="teaser-lock"><LockKeyhole size={12} aria-hidden="true" /> HOLDER ACCESS</span>
            </Link>))}
          </div>)}
        </div>
      </div>
    </div>
  );
}
