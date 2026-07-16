"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/content";

const functionsOptions = [
  "Mehndi",
  "Sangeet",
  "Baraat",
  "Ceremony",
  "Reception",
];

const fieldClass =
  "peer w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-ink placeholder:text-ink-dim/60 focus:border-gold-deep focus:outline-none";

const labelClass =
  "font-mono text-[10px] tracking-[0.2em] text-ink-dim uppercase";

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
      className="relative bg-paper p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink/15 pb-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] text-gold-deep uppercase">
            Production
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-ink">
            Wedding Film Inquiry
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] tracking-[0.25em] text-ink-dim uppercase">
            Director
          </p>
          <p className="mt-1 font-mono text-xs text-ink-dim">{site.name}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
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
                  className={`border px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] uppercase transition-colors ${
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
          <span className={labelClass}>Package interest</span>
          <select
            name="package"
            defaultValue=""
            className={`${fieldClass} appearance-none`}
          >
            <option value="" disabled>
              Select one (or skip — we&apos;ll help you choose)
            </option>
            <option>The Short Film</option>
            <option>The Feature</option>
            <option>The Full Saga</option>
            <option>Not sure yet</option>
          </select>
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
          <span className={labelClass}>Phone (optional)</span>
          <input name="phone" type="tel" className={fieldClass} />
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>Tell us about your day</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Number of guests, cities involved, anything you want captured..."
            className={`${fieldClass} resize-none`}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6">
        <p className="max-w-sm text-xs text-ink-dim">
          Submitting opens your email client with the details filled in —
          we reply within one business day.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-paper uppercase transition-colors hover:bg-gold-deep"
        >
          Send Inquiry
          <Send size={14} />
        </button>
      </div>

      {status === "sent" && (
        <p
          role="status"
          className="mt-4 font-mono text-[11px] tracking-[0.15em] text-gold-deep uppercase"
        >
          Opening your email client — see you soon.
        </p>
      )}
    </form>
  );
}
