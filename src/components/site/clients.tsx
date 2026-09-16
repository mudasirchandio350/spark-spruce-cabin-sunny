import { clients } from "@/lib/content";

export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-line bg-bg-elevated py-6" aria-label="Selected clients">
      <div className="overflow-hidden">
        <div className="marquee-track gap-12 px-6 md:gap-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl tracking-tight text-muted/80 md:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
