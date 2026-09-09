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
    <div className="w-full max-w-md">
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          disabled={pending || done}
          className="w-full flex-1 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#FF3399] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={pending || done}
          className="shrink-0 rounded-lg bg-[#FF3399] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {done ? "You're in" : pending ? "Joining…" : "Join waitlist"}
        </button>
      </form>
      {state.message && (
        <p
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
