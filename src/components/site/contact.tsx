import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow } from "@/components/site/reveal";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please add your name."),
  email: z.email("A working email, please."),
  company: z.string().min(2, "Company is required."),
  practice: z.enum(["fde", "performance", "both"]),
  challenge: z.string().min(24, "A little more context helps us prepare."),
});

type FormValues = z.infer<typeof schema>;

const practices = [
  { id: "fde", label: "Fullstack & AI Engineering" },
  { id: "performance", label: "Product & Growth Systems" },
  { id: "both", label: "Both practices" },
] as const;

export function Contact() {
  const [ref, setRef] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      practice: "both",
      challenge: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const id = `MC-${Date.now().toString(36).toUpperCase()}`;
    const payload = { ...values, id, at: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("mudasir-briefings") ?? "[]") as unknown[];
    localStorage.setItem("mudasir-briefings", JSON.stringify([payload, ...prev].slice(0, 20)));
    setRef(id);
    form.reset();
  };

  return (
    <section id="briefing" className="bg-bg py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        <div>
          <Eyebrow>08 — Briefing</Eyebrow>
          <h2 className="mt-4 font-display text-2xl tracking-[-0.03em] md:text-5xl">
            Tell us the constraint.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            A partner reads every note. If there is a fit, we propose a two-week diagnostic
            in the field — not a deck.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Email</dt>
              <dd className="mt-1">
                <a className="text-fg transition-[opacity] duration-150 hover:opacity-70" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Field</dt>
              <dd className="mt-1 text-fg">{site.location}</dd>
            </div>
          </dl>
        </div>

        {ref ? (
          <div className="rounded-2xl bg-bg-elevated p-8 shadow-[var(--shadow-border)] md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Received</p>
            <h3 className="mt-4 font-display text-3xl tracking-tight">We’ll be in the room shortly.</h3>
            <p className="mt-3 text-sm text-muted">
              Reference <span className="font-mono text-fg tabular-nums">{ref}</span>. A partner
              replies within two business days.
            </p>
            <Button className="mt-8" variant="secondary" onClick={() => setRef(null)}>
              Send another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-2xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] md:p-8"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" error={form.formState.errors.name?.message}>
                <Input autoComplete="name" {...form.register("name")} />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input type="email" autoComplete="email" {...form.register("email")} />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Company" error={form.formState.errors.company?.message}>
                <Input autoComplete="organization" {...form.register("company")} />
              </Field>
            </div>
            <fieldset className="mt-6">
              <Label>Practice</Label>
              <div className="mt-3 grid gap-2">
                {practices.map((p) => {
                  const selected = form.watch("practice") === p.id;
                  return (
                    <label
                      key={p.id}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-center rounded-md px-4 text-sm transition-all duration-150",
                        selected
                          ? "bg-primary text-primary-fg font-medium shadow-[0_2px_12px_rgba(255,107,107,0.3)] ring-1 ring-white/20"
                          : "bg-bg text-muted ring-1 ring-fg/10 hover:text-fg hover:ring-primary/40",
                      )}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        value={p.id}
                        {...form.register("practice")}
                      />
                      {p.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <div className="mt-6">
              <Field label="The constraint" error={form.formState.errors.challenge?.message}>
                <Textarea
                  placeholder="What has to be true in 90 days that is not true today?"
                  {...form.register("challenge")}
                />
              </Field>
            </div>
            <Button type="submit" size="lg" className="mt-7 w-full md:w-auto">
              Send briefing
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-xs text-muted">{error}</p> : null}
    </label>
  );
}
