import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { process } from "@/lib/content";
import {
  MessageSquare,
  Coffee,
  Camera,
  Film,
  PackageCheck,
} from "lucide-react";

const icons = [MessageSquare, Coffee, Camera, Film, PackageCheck];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <SlateDivider scene="02" take="1" label="The Experience" theme="light" />
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal className="mt-12 sm:mt-16">
          <h2 className="text-balance font-display text-4xl font-semibold text-ink sm:text-5xl">
            From first email to the film you&apos;ll watch for decades.
          </h2>
        </Reveal>

        <ol className="relative mt-16 flex flex-col gap-8 sm:mt-20 sm:gap-10">
          <div
            aria-hidden="true"
            className="absolute left-7 top-2 bottom-2 w-px bg-gold/25 sm:left-8"
          />

          {process.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={step.number} delay={index * 0.08}>
                <li className="group relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex-shrink-0">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-paper text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-paper sm:h-16 sm:w-16">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                  </div>

                  <div className="relative flex-1 overflow-hidden border border-ink/10 bg-paper-2/40 px-6 py-6 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold/40 group-hover:bg-paper-2 group-hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] sm:px-8 sm:py-7">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -top-8 font-display text-[6.5rem] font-black text-ink/[0.04] sm:text-[8rem]"
                    >
                      {step.number}
                    </span>
                    <span className="relative font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
                      Step {step.number}
                    </span>
                    <h3 className="relative mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="relative mt-2 max-w-xl text-ink-dim">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
