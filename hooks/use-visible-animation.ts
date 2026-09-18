"use client";

import { useEffect, useRef } from "react";

/** Pause decorative CSS animation without running work on every scroll event. */
export function useVisibleAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let visible = false;
    const update = () => {
      element.style.setProperty("--ambient-play-state", visible && !document.hidden ? "running" : "paused");
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return ref;
}
