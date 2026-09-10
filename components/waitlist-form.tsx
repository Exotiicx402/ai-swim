"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initialState: WaitlistState = { status: "idle" };

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );
  const done = state.status === "success";

  return (
    <div className="waitlist-form">
      <form action={formAction}>
        <label htmlFor="waitlist-email">Your email address</label>
        <div className="waitlist-controls">
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          aria-describedby={state.message ? "waitlist-status" : undefined}
          name="email"
          required
          placeholder="you@email.com"
          disabled={pending || done}
        />
        <button
          type="submit"
          className="network-button"
          disabled={pending || done}
        >
          {done ? "You're in" : pending ? "Joining…" : "Join waitlist"}
          <span aria-hidden="true">{done ? "✓" : "↗"}</span>
        </button>
        </div>
      </form>
      {state.message && (
        <p
          id="waitlist-status"
          role="status"
          className={`mt-3 text-sm ${
            state.status === "error" ? "text-red-400" : "text-white/60"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
