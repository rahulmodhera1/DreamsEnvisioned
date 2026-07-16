import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { process } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative bg-surface py-24 sm:py-32">
      <SlateDivider scene="03" take="1" label="The Experience" />
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal className="mt-12 sm:mt-16">
          <h2 className="text-balance font-display text-3xl text-ivory sm:text-4xl">
            From first email to the film you&apos;ll watch for decades.
          </h2>
        </Reveal>

        <ol className="mt-14 flex flex-col">
          {process.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <li className="relative flex gap-6 border-t border-surface-2 py-8 first:border-t-0 sm:gap-10">
                <span className="font-display text-4xl italic text-gold/70 sm:text-5xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ivory sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-ivory-dim">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
