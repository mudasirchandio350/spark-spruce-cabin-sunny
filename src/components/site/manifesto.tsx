import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Eyebrow } from "@/components/site/reveal";

export function Manifesto() {
  const root = useRef<HTMLElement>(null);
  const fill = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (reduced) return;
        gsap.fromTo(
          fill.current,
          { backgroundPositionX: "100%" },
          {
            backgroundPositionX: "0%",
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=140%",
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center bg-paper text-paper-ink"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-28 lg:px-16">
        <Eyebrow tone="paper">01 — Stance</Eyebrow>
        <p
          ref={fill}
          className="mt-8 max-w-5xl font-display text-[clamp(1.85rem,4.2vw,4.1rem)] leading-[1.15] tracking-[-0.03em] text-paper-muted md:bg-[linear-gradient(to_right,var(--color-paper-ink)_50%,var(--color-paper-muted)_50%)] md:bg-[length:200%_100%] md:bg-clip-text md:text-transparent"
        >
          Most AI programs stall in the gap between a promising demo and a Tuesday
          morning. I exist to close it. I embed with your operators, ship production
          systems, and leave tools people actually open — not slides.
        </p>
        <p className="mt-10 max-w-xl text-sm leading-normal text-paper-muted md:text-base">
          If the work cannot be handed over, it is not shipped. If the media cannot
          be measured, it is not spend. That is the whole practice.
        </p>
      </div>
    </section>
  );
}
