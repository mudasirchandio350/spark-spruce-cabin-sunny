import { ArrowUpRight } from "lucide-react";
import { practices } from "@/lib/content";
import { Eyebrow, Reveal } from "@/components/site/reveal";

export function Practices() {
  return (
    <section id="practices" className="bg-bg py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>02 — Practices</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] text-fg md:text-5xl">
            Two teams. One field.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Hire one practice, or both. The scoreboard is shared either way:
            production systems that operators use, and media that pays for itself.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {practices.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt=""
                    className="media aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.16em] text-fg">
                    {p.index} / {p.kicker}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-4 pt-6 pb-5 md:px-6">
                  <h3 className="font-display text-3xl tracking-tight text-fg">{p.name}</h3>
                  <p className="mt-3 text-base text-fg/90">{p.lead}</p>
                  <p className="mt-3 text-sm text-muted">{p.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-muted">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#briefing"
                    className="mt-8 inline-flex items-center gap-1.5 self-start text-sm text-fg transition-[opacity] duration-150 hover:opacity-70"
                  >
                    Brief this practice
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
