import { capabilities, method } from "@/lib/content";
import { Eyebrow, Reveal } from "@/components/site/reveal";

export function Method() {
  return (
    <section id="method" className="bg-paper py-24 text-paper-ink md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow tone="paper">04 — Method</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Diagnose. Embed. Ship. Compound.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-4 md:grid-cols-2">
          {method.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <li className="flex h-full flex-col rounded-2xl bg-bg/0 p-6 ring-1 ring-paper-ink/10 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-paper-muted">
                    {step.step}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-muted">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl tracking-tight">{step.name}</h3>
                <p className="mt-3 text-sm leading-normal text-paper-muted md:text-base">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-paper-line pt-14 md:grid-cols-2">
          <div>
            <Eyebrow tone="paper">FDE capabilities</Eyebrow>
            <ul className="mt-5 divide-y divide-paper-line">
              {capabilities.fde.map((item) => (
                <li key={item} className="py-3 font-display text-2xl tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow tone="paper">Performance capabilities</Eyebrow>
            <ul className="mt-5 divide-y divide-paper-line">
              {capabilities.performance.map((item) => (
                <li key={item} className="py-3 font-display text-2xl tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
