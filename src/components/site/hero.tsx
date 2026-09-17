import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { heroScroll } from "@/lib/hero-scroll";
import { stats } from "@/lib/content";

function HeroFallback() {
  return (
    <div className="absolute inset-0">
      <img
        src="/images/hero-studio.jpg"
        alt=""
        className="h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const [Field, setField] = useState<ComponentType | null>(null);

  useEffect(() => {
    let live = true;
    import("./hero-field")
      .then((m) => {
        if (live) setField(() => m.HeroField);
      })
      .catch(() => {
        /* fallback image remains */
      });
    return () => {
      live = false;
    };
  }, []);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          heroScroll.current = self.progress;
        },
      });
    },
    { scope: root },
  );

  const ease = [0.22, 1, 0.36, 1] as const;
  const variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18, filter: reduce ? "none" : "blur(6px)" },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: 0.12 + i * 0.1, duration: 0.7, ease },
    }),
  };

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg"
    >
      {/* Cinematic background image — sits below the 3D field */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-40"
          fetchPriority="high"
        />
        {/* Dark vignette over the bg image */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg/90 via-bg/60 to-bg/30" />
      </div>

      <div className="pointer-events-none absolute inset-0 md:pointer-events-auto md:left-[38%]">
        {Field ? <Field /> : <HeroFallback />}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/82 to-bg/10 md:via-bg/75" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-10 lg:px-16 lg:pb-14">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={variants}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          <span className="inline-block size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
          <span>Mudasir Chandio · Fullstack & AI Studio</span>
        </motion.div>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={variants}
          className="mt-5 max-w-4xl font-display text-3xl leading-[1.05] tracking-[-0.035em] text-fg md:text-[clamp(3.4rem,7vw,6.4rem)]"
        >
          Field-ready
          <br />
          <span className="italic">intelligence.</span>
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={variants}
          className="mt-6 max-w-xl text-base leading-normal text-muted md:text-lg"
        >
          I build scalable web applications and production AI systems from front to back.
          SaaS platforms, APIs, and tools operators actually use on a Tuesday.
        </motion.p>
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={variants}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg">
            <a href="#briefing">
              Start a briefing
              <ArrowDownRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#work">See the work</a>
          </Button>
        </motion.div>

        <motion.dl
          custom={4}
          initial="hidden"
          animate="show"
          variants={variants}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{s.label}</dt>
              <dd className="mt-2 font-display text-3xl tracking-tight text-fg tabular-nums md:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
