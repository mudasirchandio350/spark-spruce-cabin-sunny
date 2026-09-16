import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { cases } from "@/lib/content";
import { Eyebrow } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<(typeof cases)[number] | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        if (reduced || !track.current || !root.current) return;
        const distance = () => track.current!.scrollWidth - window.innerWidth + 80;
        gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="relative overflow-hidden bg-bg py-24 md:py-0">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16 md:pt-28">
        <Eyebrow>03 — Selected work</Eyebrow>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Systems in production. Media that compounds.
          </h2>
          <p className="hidden max-w-xs text-sm text-muted md:block">
            Scroll the field — four engagements, two practices, one standard of handover.
          </p>
        </div>
      </div>

      <div
        ref={track}
        className="mt-10 flex flex-col gap-8 px-5 md:mt-16 md:h-[72vh] md:flex-row md:items-stretch md:gap-8 md:px-10 lg:px-16"
      >
        {cases.map((item, i) => (
          <article
            key={item.id}
            className="flex w-full shrink-0 flex-col md:w-[min(72vw,920px)]"
          >
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group relative overflow-hidden rounded-2xl text-left"
            >
              <img
                src={item.image}
                alt=""
                className="media aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-[46vh] md:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                  {String(i + 1).padStart(2, "0")} / {item.year}
                </span>
                <span className="font-display text-4xl tabular-nums text-fg md:text-5xl">
                  {item.metric}
                </span>
              </div>
            </button>
            <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                  {item.client} · {item.practice}
                </p>
                <h3 className="mt-1 font-display text-2xl tracking-tight md:text-3xl">{item.title}</h3>
              </div>
              <p className="text-sm text-muted md:max-w-xs">{item.metricLabel}</p>
            </div>
          </article>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-bg/70 p-4 backdrop-blur-sm md:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-title"
          onClick={() => setActive(null)}
        >
          <div
            className={cn(
              "max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border-hover)]",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.image} alt="" className="media aspect-video w-full rounded-xl object-cover" />
            <div className="px-5 py-6 md:px-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {active.client} · {active.practice}
              </p>
              <h3 id="case-title" className="mt-2 font-display text-3xl tracking-tight">
                {active.title}
              </h3>
              <p className="mt-4 text-sm leading-normal text-muted">{active.summary}</p>
              <ul className="mt-5 space-y-2">
                {active.outcome.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-fg">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 text-sm text-muted transition-[color] duration-150 hover:text-fg"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
