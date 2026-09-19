import { teamFde, teamPerformance } from "@/lib/content";
import { Eyebrow, Reveal } from "@/components/site/reveal";

export function Team() {
  return (
    <section id="team" className="bg-bg py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>05 — The field team</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Engineers in the room. Operators on the numbers.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A small practice on purpose. Principals stay on the engagement — no bait-and-switch
            from a pitch team to a junior bench.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {teamFde.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border)] transition-all duration-200 hover:ring-1 hover:ring-primary/40">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="media aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="px-3 pt-5 pb-4">
                  <h3 className="font-display text-2xl tracking-tight text-fg group-hover:text-white transition-colors">{person.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary/80">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Eyebrow>Specialist Systems & Growth</Eyebrow>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-2 lg:grid-cols-4">
            {teamPerformance.map((person) => (
              <article key={person.name} className="group bg-bg-elevated p-6 md:p-7 transition-colors duration-150 hover:bg-bg-subtle">
                <div className="flex size-13 items-center justify-center rounded-lg bg-paper font-display text-xl text-paper-ink ring-1 ring-white/10 group-hover:ring-primary/50 group-hover:shadow-[0_0_16px_rgba(255,107,107,0.2)] transition-all duration-200">
                  {person.initials}
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-fg group-hover:text-white transition-colors">{person.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary/80">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
