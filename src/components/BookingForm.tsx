"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/content";

const functionsOptions = [
  "Ceremony",
  "Reception",
  "Mehndi",
  "Sangeet",
  "Baraat",
  "Rehearsal Dinner",
];

const fieldClass =
  "w-full rounded-sm border border-ink/15 bg-white/60 px-3.5 py-2.5 text-ink placeholder:text-ink-dim/50 transition-colors focus:border-gold-deep focus:bg-white focus:outline-none";

const labelClass =
  "mb-1.5 block font-mono text-[10px] tracking-[0.2em] text-ink-dim uppercase";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [selected, setSelected] = useState<string[]>([]);

  function toggleFunction(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `Couple: ${form.get("names")}`,
      `Wedding date: ${form.get("date") || "TBD"}`,
      `Venue(s): ${form.get("venue") || "TBD"}`,
      `Functions: ${selected.length ? selected.join(", ") : "TBD"}`,
      `Package interest: ${form.get("package") || "Not sure yet"}`,
      "",
      `${form.get("message") || ""}`,
    ];
    const subject = encodeURIComponent(
      `Wedding inquiry — ${form.get("names") || "New couple"}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative border border-ink/10 bg-paper p-6 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.5)] sm:p-8"
    >
      <p className="font-mono text-[10px] tracking-[0.25em] text-gold-deep uppercase">
        Start the Conversation
      </p>
      <p className="mt-1.5 font-display text-2xl font-semibold text-ink">
        Wedding Inquiry
      </p>

      <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={labelClass}>Couple&apos;s names</span>
          <input
            required
            name="names"
            type="text"
            placeholder="e.g. Priya & Arjun"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Wedding date</span>
          <input name="date" type="date" className={fieldClass} />
        </label>

        <label className="block">
          <span className={labelClass}>Venue(s)</span>
          <input
            name="venue"
            type="text"
            placeholder="e.g. Paradise Banquet Hall"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            required
            name="email"
            type="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Package interest</span>
          <div className="relative">
            <select
              name="package"
              defaultValue=""
              className={`${fieldClass} appearance-none pr-9`}
            >
              <option value="" disabled>
                Select a package
              </option>
              <option>The Short Film</option>
              <option>The Feature</option>
              <option>The Full Saga</option>
              <option>Not sure yet</option>
            </select>
            <ChevronDown
              aria-hidden="true"
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-dim"
            />
          </div>
        </label>

        <div className="block sm:col-span-2">
          <span className={labelClass}>Functions we&apos;d film</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {functionsOptions.map((f) => {
              const active = selected.includes(f);
              return (
                <button
                  type="button"
                  key={f}
                  onClick={() => toggleFunction(f)}
                  aria-pressed={active}
                  className={`border px-3 py-1 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-150 ease-out active:scale-95 ${
                    active
                      ? "border-gold-deep bg-gold/15 text-gold-deep"
                      : "border-ink/20 text-ink-dim hover:border-gold-deep hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <label className="block sm:col-span-2">
          <span className={labelClass}>Tell us about your day</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Number of guests, cities involved, anything you want captured..."
            className={`${fieldClass} resize-none`}
          />
        </label>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
        <p className="max-w-sm text-xs text-ink-dim">
          Submitting opens your email client with the details filled in —
          we reply within one business day.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-ink uppercase transition-all duration-150 ease-out hover:bg-gold-deep hover:text-ivory active:scale-[0.97]"
        >
          Send Inquiry
          <Send size={14} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {status === "sent" && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-gold-deep uppercase"
          >
            <CheckCircle2 size={14} aria-hidden="true" />
            Opening your email client — see you soon.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
