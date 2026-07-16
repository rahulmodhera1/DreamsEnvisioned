import { Mail, MapPin } from "lucide-react";
import { InstagramGlyph } from "@/components/icons/InstagramGlyph";
import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/content";

const stats = [
  { label: "Reply Time", value: "24 hrs" },
  { label: "Book Ahead", value: "9–12 mo" },
  { label: "Coverage", value: "The GTA" },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-20 sm:py-24">
      <SlateDivider scene="06" take="1" label="Book The Date" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-semibold text-ivory sm:text-5xl">
              Let&apos;s talk about your wedding.
            </h2>
            <p className="mt-4 max-w-md text-ivory-dim">
              Reach out even if your date is close — we&apos;ll always try to
              make it work.
            </p>

            <div className="mt-8 grid grid-cols-3 border-y border-white/10 py-5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center first:text-left">
                  <p className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-ivory-dim uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory hover:text-gold transition-colors"
              >
                <InstagramGlyph size={18} className="text-gold" />
                <span className="font-mono text-sm tracking-[0.05em]">
                  {site.instagramHandle}
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-ivory hover:text-gold transition-colors"
              >
                <Mail size={18} className="text-gold" />
                <span className="font-mono text-sm tracking-[0.05em]">
                  {site.email}
                </span>
              </a>
              <div className="flex items-center gap-3 text-ivory-dim">
                <MapPin size={18} className="text-gold" />
                <span className="font-mono text-sm tracking-[0.05em]">
                  {site.location}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
