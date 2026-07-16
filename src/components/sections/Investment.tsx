import { ArrowUpRight, Film } from "lucide-react";
import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { packages } from "@/lib/content";

export function Investment() {
  return (
    <section className="relative bg-surface py-24 sm:py-32">
      <SlateDivider scene="05" take="1" label="Investment" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mt-12 max-w-2xl sm:mt-16">
          <h2 className="text-balance font-display text-3xl text-ivory sm:text-4xl">
            Every wedding is priced around your day, not a fixed menu.
          </h2>
          <p className="mt-4 text-ivory-dim">
            These are starting points, not price tags — a place to begin the
            conversation. Final coverage is scoped around your functions,
            venues, and how many days we&apos;re filming.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.08}>
              <div className="flex h-full flex-col border border-surface-2 bg-ink p-7">
                <Film aria-hidden="true" size={20} className="text-gold" />
                <h3 className="mt-5 font-display text-2xl text-ivory">
                  {pkg.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-gold uppercase">
                  {pkg.length}
                </p>
                <p className="mt-4 text-sm text-ivory-dim">{pkg.coverage}</p>
                <p className="mt-4 flex-1 text-ivory-dim">
                  {pkg.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] text-ivory uppercase hover:text-gold transition-colors"
                >
                  Inquire
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
