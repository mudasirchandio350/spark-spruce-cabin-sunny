import { stats, testimonials } from "@/lib/content";
import { Eyebrow, Reveal } from "@/components/site/reveal";

export function Proof() {
  return (
    <section className="border-t border-line bg-bg py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>06 — Proof</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Quiet numbers. Loud handover.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 border-y border-line py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl tabular-nums tracking-tight md:text-5xl">{s.value}</p>
              <p className="mt-2 max-w-[16ch] text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-bg-elevated p-7 shadow-[var(--shadow-border)] md:p-8">
                <p className="font-display text-xl leading-snug tracking-tight text-fg md:text-2xl">
                  “{t.quote}”
                </p>
                <footer className="mt-auto pt-8">
                  <p className="text-sm text-fg">{t.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    {t.title}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
