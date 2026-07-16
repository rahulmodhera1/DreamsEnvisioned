import { ArrowUpRight, Film } from "lucide-react";
import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { packages } from "@/lib/content";

export function Investment() {
  return (
    <section className="relative bg-paper py-20 sm:py-28">
      <SlateDivider scene="03" take="1" label="Investment" theme="light" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mt-12 max-w-2xl sm:mt-16">
          <h2 className="text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            Every wedding is priced around your day, not a fixed menu.
          </h2>
          <p className="mt-4 text-ink-dim">
            These are starting points, not price tags — a place to begin the
            conversation. Final coverage is scoped around your functions,
            venues, and how many days we&apos;re filming.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.08}>
              <div className="flex h-full flex-col border-t-2 border-gold bg-ink p-7 transition-transform hover:-translate-y-1">
                <Film aria-hidden="true" size={20} className="text-gold" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-ivory">
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
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] text-ivory uppercase transition-all duration-150 ease-out hover:text-gold active:scale-95"
                >
                  Inquire
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
