import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg pb-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-14 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16">
        <div>
          <p className="font-display text-5xl tracking-tight md:text-7xl">Fieldline</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{site.tagline} An AI agency of FDE engineers and performance marketers.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-[color] duration-150 hover:text-fg">
              {item.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="transition-[color] duration-150 hover:text-fg">
            {site.email}
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle md:px-10 lg:px-16">
        <span>© {new Date().getFullYear()} Fieldline</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
