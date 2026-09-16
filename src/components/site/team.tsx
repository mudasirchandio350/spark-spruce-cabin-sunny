import { teamFde, teamPerformance } from "@/lib/content";
import { Eyebrow, Reveal } from "@/components/site/reveal";

export function Team() {
  return (
    <section id="team" className="bg-bg py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>05 — The field team</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Engineers in the room. Marketers on the numbers.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A small firm on purpose. Principals stay on the engagement — no bait-and-switch
            from a pitch team to a junior bench.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {teamFde.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.07}>
              <article className="overflow-hidden rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="media aspect-[3/4] w-full rounded-xl object-cover"
                />
                <div className="px-3 pt-5 pb-4">
                  <h3 className="font-display text-2xl tracking-tight">{person.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm text-muted">{person.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Eyebrow>Performance practice</Eyebrow>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
            {teamPerformance.map((person) => (
              <article key={person.name} className="bg-bg-elevated p-7 md:p-8">
                <div className="flex size-14 items-center justify-center rounded-md bg-paper font-display text-2xl text-paper-ink">
                  {person.initials}
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{person.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
