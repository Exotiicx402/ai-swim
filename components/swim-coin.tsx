"use client";

import { useRef, useState, type PointerEvent } from "react";
import { RotateCw } from "lucide-react";

// Original CSS geometry; visual research: 21st.dev's MetallicBusinessCard.
export function SwimCoin() {
  const [flipped, setFlipped] = useState(false);
  const stage = useRef<HTMLDivElement>(null);

  function tilt(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    stage.current?.style.setProperty("--coin-x", `${-y * 24}deg`);
    stage.current?.style.setProperty("--coin-y", `${x * 30}deg`);
  }

  function resetTilt() {
    stage.current?.style.setProperty("--coin-x", "-10deg");
    stage.current?.style.setProperty("--coin-y", "-18deg");
  }

  return (
    <div className="swim-coin-display">
      <div className="swim-coin-stage" ref={stage}>
        <button
          type="button"
          className="swim-coin-control"
          aria-label={flipped ? "Show the SWIM coin front" : "Show the SWIM coin reverse"}
          aria-pressed={flipped}
          onClick={() => setFlipped(!flipped)}
          onPointerMove={tilt}
          onPointerLeave={resetTilt}
          onBlur={resetTilt}
        >
          <span className={`swim-coin${flipped ? " is-flipped" : ""}`} aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className="swim-coin-edge" style={{ transform: `translateZ(${i - 6}px)` }} />
            ))}
            <span className="swim-coin-face swim-coin-front">
              <span className="coin-inscription">THE NETWORK TOKEN</span>
              <span className="coin-emblem">[s]</span>
              <span className="coin-wordmark">$SWIM</span>
            </span>
            <span className="swim-coin-face swim-coin-back">
              <span className="coin-inscription">A VOICE IN WHAT COMES NEXT</span>
              <span className="coin-reverse-mark">[ai swim]</span>
              <span className="coin-wordmark">DISCOVER. CREATE.</span>
              <span className="coin-inscription">INDEPENDENT ENTERTAINMENT</span>
            </span>
          </span>
        </button>
      </div>
      <p className="coin-interaction-hint"><RotateCw size={12} aria-hidden="true" /> Tap the coin to turn it</p>
    </div>
  );
}
