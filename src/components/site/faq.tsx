import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
import { Eyebrow, Reveal } from "@/components/site/reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-paper py-24 text-paper-ink md:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-[0.9fr_1.4fr] lg:px-16">
        <Reveal>
          <Eyebrow tone="paper">07 — Questions</Eyebrow>
          <h2 className="mt-4 font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Before you write.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-paper-muted">
            Short answers. If you need a longer one, that is what the briefing is for.
          </p>
        </Reveal>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
