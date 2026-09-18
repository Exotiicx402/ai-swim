"use client";
import { useEffect, useState } from "react";

export function HolderSession({ children }: { children: React.ReactNode }) {
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function recheck() {
      try { const response = await fetch("/api/holders/session", { cache: "no-store" }); if (!response.ok) window.location.replace("/dashboard"); }
      catch { window.location.replace("/dashboard"); }
    }
    const timer = window.setInterval(recheck, 60000);
    window.addEventListener("focus", recheck);
    return () => { clearInterval(timer); window.removeEventListener("focus", recheck); };
  }, []);
  async function signOut() {
    setSigningOut(true); setError("");
    try { const result = await fetch("/api/holders/session", { method: "DELETE" }); if (!result.ok) throw new Error(); window.location.replace("/dashboard"); }
    catch { setError("Could not sign out. Please try again."); setSigningOut(false); }
  }
  return <><div className="holder-session-bar"><span>Verified session · Balance checked periodically</span><button onClick={signOut} disabled={signingOut}>{signingOut ? "Signing out…" : "Sign out"}</button><span role="status">{error}</span></div>{children}</>;
}
