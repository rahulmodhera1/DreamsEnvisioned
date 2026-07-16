import { Mail, MapPin } from "lucide-react";
import { InstagramGlyph } from "@/components/icons/InstagramGlyph";
import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <SlateDivider scene="06" take="1" label="Book The Date" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-balance font-display text-3xl text-ivory sm:text-4xl">
              Let&apos;s talk about your wedding.
            </h2>
            <p className="mt-4 max-w-md text-ivory-dim">
              Popular dates in wedding season (May–October) book out 9–12
              months ahead. Reach out even if your date is close — we&apos;ll
              always try to make it work.
            </p>

            <div className="mt-10 flex flex-col gap-4">
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
