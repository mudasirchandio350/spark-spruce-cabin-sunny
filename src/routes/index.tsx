import { createFileRoute } from "@tanstack/react-router";
import { Clients } from "@/components/site/clients";
import { Contact } from "@/components/site/contact";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Manifesto } from "@/components/site/manifesto";
import { Method } from "@/components/site/method";
import { Nav } from "@/components/site/nav";
import { Practices } from "@/components/site/practices";
import { Proof } from "@/components/site/proof";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Team } from "@/components/site/team";
import { Work } from "@/components/site/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SmoothScroll>
      <a
        href="#practices"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div id="top" className="relative">
        <div className="grain" aria-hidden />
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          <Clients />
          <Manifesto />
          <Practices />
          <Work />
          <Method />
          <Team />
          <Proof />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
