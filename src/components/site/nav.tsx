import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (open) {
      setHidden(false);
      return;
    }
    setHidden(latest > 80 && latest > prev);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b border-transparent transition-colors duration-200",
          open ? "bg-paper" : "bg-bg/75 backdrop-blur-md border-line/40",
        )}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[4.25rem] md:px-10 lg:px-16">
          <a
            href="#top"
            aria-label="Mudasir Chandio Home"
            className="flex items-center gap-2"
          >
            <Logo tone={open ? "light" : "dark"} size="sm" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-[color] duration-150 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <a href="#briefing">Start a briefing</a>
            </Button>
            <button
              type="button"
              className={cn(
                "relative inline-flex size-11 items-center justify-center rounded-md md:hidden",
                open ? "text-paper-ink" : "text-fg",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col bg-paper px-5 pt-24 text-paper-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-paper-line py-4 font-display text-4xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <Button asChild size="lg" variant="inverted" className="mt-8">
              <a href="#briefing" onClick={() => setOpen(false)}>
                Start a briefing
              </a>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
