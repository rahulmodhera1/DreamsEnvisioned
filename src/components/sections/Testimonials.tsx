import { Quote } from "lucide-react";
import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="relative bg-ink py-20 sm:py-28">
      <SlateDivider scene="05" take="1" label="Words From The Families" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mt-12 max-w-2xl sm:mt-16">
          <h2 className="text-balance font-display text-4xl font-semibold text-ivory sm:text-5xl">
            What families tell us once the film arrives.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={(index % 2) * 0.1}>
              <figure className="flex h-full flex-col border-l-2 border-gold pl-6">
                <Quote
                  aria-hidden="true"
                  size={24}
                  className="mb-4 text-gold"
                  fill="currentColor"
                />
                <blockquote className="flex-1">
                  <p className="text-balance font-sans text-lg leading-relaxed text-ivory sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-5 font-mono text-[11px] tracking-[0.15em] text-ivory-dim uppercase">
                  {t.name} — {t.detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
