import { i as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, n as Header, r as Item, s as Slot, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as ArrowUpRight, i as ChevronDown, o as ArrowDownRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as object, n as email, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as useMotionValueEvent, n as useSpring, o as AnimatePresence, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4t8EXFkM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var heroScroll = { current: 0 };
var site = {
	name: "Mudasir Chandio",
	tagline: "Fullstack Web Developer · SaaS Builder · Problem Solver",
	email: "mudasirc350@gmail.com",
	location: "Old Memon Society Qasimabad Hyderabad"
};
var nav = [
	{
		href: "#practices",
		label: "Practices"
	},
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#method",
		label: "Method"
	},
	{
		href: "#team",
		label: "Team"
	},
	{
		href: "#briefing",
		label: "Contact"
	}
];
var stats = [
	{
		value: "20+",
		label: "Projects delivered"
	},
	{
		value: "3.2×",
		label: "Median efficiency lift on rebuilt systems"
	},
	{
		value: "18d",
		label: "Median time to first production"
	},
	{
		value: "41%",
		label: "Faster issue resolution for clients"
	}
];
var clients = [
	"Northwind",
	"Lumen",
	"Harbor Mutual",
	"Kite",
	"Vesper Health",
	"Arden Retail",
	"Sable Freight",
	"Helio Bank",
	"Ornament",
	"Pylon"
];
var practices$1 = [{
	id: "fde",
	index: "01",
	name: "Fullstack & AI Engineering",
	kicker: "Build & Ship",
	image: "/images/practice-fde.jpg",
	lead: "I sit with operators until the product is a tool they reach for on a Tuesday — not a demo they saw in Q2.",
	body: "From APIs to polished UIs, I embed inside the workflow. Agents, evaluations, retrieval, and the unglamorous glue that keeps a system honest after launch.",
	points: [
		"Production apps with real tool use, memory, and human gates",
		"Evaluation harnesses tied to real operator outcomes",
		"Retrieval, permissions, and audit that survive review",
		"Observability, fallbacks, and ownership you can take over"
	]
}, {
	id: "performance",
	index: "02",
	name: "Product & Growth Systems",
	kicker: "Growth Specialists",
	image: "/images/practice-perf.jpg",
	lead: "Acquisition and retention are systems, not campaigns. We engineer product loops, media, and measurement until the numbers move — and stay moved.",
	body: "Treat spend and product as an experiment design problem. Incrementality over vanity, creative science over asset dumps, and a stack your stakeholders can read without a translator.",
	points: [
		"Media mix, bid policy, and always-on creative engines",
		"Incrementality, geo-lifts, and holdouts — not last-click theatre",
		"Lifecycle, catalog, and feed systems that compound",
		"A measurement layer finance will actually sign"
	]
}];
var cases = [
	{
		id: "northwind",
		client: "Northwind Logistics",
		practice: "Fullstack & AI Engineering",
		title: "Exception copilot on the yard",
		metric: "41%",
		metricLabel: "faster clearance",
		image: "/images/case-logistics.jpg",
		year: "2025",
		summary: "Night-shift supervisors were drowning in exception tickets. We embedded for nine weeks, shipped a gated copilot on their TMS, and left an eval suite tied to dwell time — not chatbot CSAT.",
		outcome: [
			"41% faster exception clearance across three hubs",
			"Human gate retained on every high-cost reroute",
			"On-call handed to Northwind’s ops engineering in week 10"
		]
	},
	{
		id: "lumen",
		client: "Lumen Beauty",
		practice: "Product & Growth Systems",
		title: "A media system, not a moodboard",
		metric: "3.2×",
		metricLabel: "ROAS in 90 days",
		image: "/images/case-beauty.jpg",
		year: "2025",
		summary: "Spend was creative-led and unmeasured. We rebuilt the account as a closed loop: offer architecture, always-on creative, geo-holdouts, and a weekly decision ritual the CMO still runs.",
		outcome: [
			"3.2× ROAS on prospecting within a quarter",
			"Creative cycle time from 18 days to 4",
			"Incrementality read finance accepted in the board pack"
		]
	},
	{
		id: "harbor",
		client: "Harbor Mutual",
		practice: "Fullstack & AI Engineering",
		title: "Underwriting assistant, in production",
		metric: "18d",
		metricLabel: "to production",
		image: "/images/case-finance.jpg",
		year: "2024",
		summary: "The model already existed. The work did not. We sat with credit officers, mapped the actual packet, and shipped an assistant that cites source pages and refuses when the file is thin.",
		outcome: [
			"First production traffic in 18 days",
			"Citation rate > 97% on sampled files",
			"Refusal path cut silent errors that used to reach committee"
		]
	},
	{
		id: "kite",
		client: "Kite Athletic",
		practice: "Both practices",
		title: "Creative engine with a field team",
		metric: "−27%",
		metricLabel: "CAC",
		image: "/images/case-athletic.jpg",
		year: "2026",
		summary: "Performance wanted volume. Brand wanted control. We built a generation-and-gate pipeline on their DAM; growth ran the media science. CAC fell without lighting the brand on fire.",
		outcome: [
			"27% CAC reduction over two peaks",
			"Legal-approved variant pool, refreshed weekly",
			"Shared weekly ritual across brand, media, and data"
		]
	}
];
var method = [
	{
		step: "01",
		name: "Diagnostic",
		duration: "2 weeks",
		text: "We start in the room — queues, spend, tickets, the actual Tuesday. A written map of the system, the constraint, and the smallest production cut that would matter."
	},
	{
		step: "02",
		name: "Embed",
		duration: "The field",
		text: "Engineers sit with operators. Growth sits with media and finance. No offsite ‘innovation’. Access, instrumentation, and a working loop inside your tools."
	},
	{
		step: "03",
		name: "Ship",
		duration: "Production",
		text: "Gated release, evals on real outcomes, fallbacks, ownership. If it cannot be handed over, it is not shipped."
	},
	{
		step: "04",
		name: "Compound",
		duration: "Ongoing",
		text: "A weekly decision ritual. Creative and model updates against a scoreboard both practices share. The system gets quieter, and the numbers get less interesting — in the right way."
	}
];
var capabilities = {
	fde: [
		"Production apps & tool use",
		"Evaluation harnesses",
		"Retrieval, memory, permissions",
		"Human-in-the-loop gates",
		"Workflow instrumentation",
		"Observability & on-call handover"
	],
	performance: [
		"Media mix & bid policy",
		"Creative science & always-on",
		"Incrementality & geo-lifts",
		"Lifecycle & catalog systems",
		"Measurement for finance",
		"Offer architecture"
	]
};
var teamFde = [
	{
		name: "Mudasir Chandio",
		role: "Founder · Principal Fullstack & AI Systems Architect",
		bio: "Architects scalable fullstack web applications, SaaS platforms, and production AI agents. Bridges high-throughput infrastructure with intuitive, human-centered interfaces.",
		image: "/images/portrait-maya.jpg"
	},
	{
		name: "Emad Ahmed",
		role: "Co-Founder · Product Design & UI/UX Director",
		bio: "Transforms convoluted operational workflows into calm, tactile design systems. Commands micro-interactions, typographic rhythm, and the final mile of product craft.",
		image: "/images/portrait-julian.jpg"
	},
	{
		name: "Zoya Qureshi",
		role: "Lead AI Research & Agentic Systems",
		bio: "Directs evaluation frameworks, contextual memory models, and deterministic tool-calling workflows. If an agent cannot reliably prove its accuracy, it does not deploy.",
		image: "/images/portrait-priya.jpg"
	}
];
var teamPerformance = [
	{
		name: "Tariq Farooq",
		role: "Distributed Systems & Cloud Architect",
		initials: "TF",
		bio: "Engineers zero-downtime microservices, event-driven streaming, and fault-tolerant Postgres backends built to survive real load on a Tuesday."
	},
	{
		name: "Samir Varma",
		role: "Growth & Quantitative Systems Lead",
		initials: "SV",
		bio: "Builds customer acquisition as an engineered statistical loop. Focuses on incrementality, holdout science, and financial attribution that CFOs endorse."
	},
	{
		name: "Ayla Noor",
		role: "Creative Technologist & 3D Systems",
		initials: "AN",
		bio: "Designs WebGL shaders, kinetic physics, and interactive 3D spatial experiences. Fuses real-time rendering with accessible web engineering."
	},
	{
		name: "Danial Raza",
		role: "High-Assurance & Platform Security",
		initials: "DR",
		bio: "Audits permission boundaries, cryptographic flows, and zero-trust data access. Protects autonomous agent systems in hostile environments."
	}
];
var testimonials = [
	{
		quote: "They did not pitch us another copilot. They sat the night shift, mapped the exceptions, and left a system the supervisors actually open.",
		name: "R. Okonkwo",
		title: "COO, Northwind Logistics"
	},
	{
		quote: "The first time our board pack had an incrementality read instead of a ROAS fairy tale. That is the engagement.",
		name: "S. Pellier",
		title: "CMO, Lumen Beauty"
	},
	{
		quote: "Eighteen days, in production, with citations. Legal stopped being the bottleneck because the assistant knew when to refuse.",
		name: "J. Hartmann",
		title: "Head of Credit, Harbor Mutual"
	}
];
var faqs = [
	{
		q: "How is the engineering practice different from staff augmentation?",
		a: "We embed to ship a production system with evals, gates, and an owner on your side — then we leave. We are not a bench of extra tickets. The unit of work is a working loop, not a sprint of hours."
	},
	{
		q: "Do you run media in-house?",
		a: "Yes. Growth specialists operate spend, creative systems, and measurement. We can sit alongside your in-house team or run the stack. We will not take an account we cannot instrument."
	},
	{
		q: "What does a first engagement look like?",
		a: "A two-week diagnostic in the field, a written cut of the smallest production change that would matter, then an embed. Most engineering cuts land in production inside a month. Growth rebuilds show a clean read inside a quarter."
	},
	{
		q: "Who owns the models, code, and media?",
		a: "You do. We build in your cloud, your ad accounts, your repos. Handover is a release criterion, not a phase we invoice extra for."
	},
	{
		q: "Can we start with only one practice?",
		a: "Yes. Many clients hire engineering or growth alone. When both are in the room the scoreboard is shared and the work compounds faster."
	},
	{
		q: "Is there a minimum?",
		a: "Diagnostic is a fixed two-week engagement. Ongoing field work is scoped to a system, not a retainer of vague hours. If the constraint is a slide deck, we are the wrong fit."
	}
];
function Clients() {
	const row = [...clients, ...clients];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-line bg-bg-elevated py-6",
		"aria-label": "Selected clients",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track gap-12 px-6 md:gap-16",
				children: row.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl tracking-tight text-muted/80 md:text-3xl",
					children: name
				}, `${name}-${i}`))
			})
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-[transform,background-color,color,opacity,box-shadow,border-color] duration-200 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg font-semibold shadow-[0_2px_14px_rgba(255,107,107,0.28)] hover:bg-primary-hover hover:shadow-[0_4px_24px_rgba(255,107,107,0.45)] ring-1 ring-white/25 active:shadow-none",
			secondary: "bg-bg-elevated/80 text-fg ring-1 ring-fg/15 hover:bg-bg-subtle hover:ring-primary/40 hover:text-white backdrop-blur-xs",
			inverted: "bg-paper-ink text-paper hover:bg-paper-ink/90 shadow-sm",
			ghost: "bg-transparent text-fg hover:bg-primary/10 hover:text-primary"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-sm",
			sm: "h-9 rounded-sm px-3.5 text-xs"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("h-12 w-full rounded-md bg-bg-elevated px-4 text-sm text-fg ring-1 ring-fg/12 placeholder:text-subtle transition-[box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium uppercase tracking-[0.14em] text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg bg-bg-elevated px-4 py-3 text-sm text-fg ring-1 ring-fg/12 placeholder:text-subtle transition-[box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70", className),
		...props
	});
}
function Reveal({ children, className, delay = 0 }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-12%"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Eyebrow({ children, className, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-mono text-[11px] uppercase tracking-[0.18em]", tone === "dark" ? "text-muted" : "text-paper-muted", className),
		children
	});
}
var schema = object({
	name: string().min(2, "Please add your name."),
	email: email("A working email, please."),
	company: string().min(2, "Company is required."),
	practice: _enum([
		"fde",
		"performance",
		"both"
	]),
	challenge: string().min(24, "A little more context helps us prepare.")
});
var practices = [
	{
		id: "fde",
		label: "Fullstack & AI Engineering"
	},
	{
		id: "performance",
		label: "Product & Growth Systems"
	},
	{
		id: "both",
		label: "Both practices"
	}
];
function Contact() {
	const [ref, setRef] = (0, import_react.useState)(null);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			company: "",
			practice: "both",
			challenge: ""
		}
	});
	const onSubmit = (values) => {
		const id = `MC-${Date.now().toString(36).toUpperCase()}`;
		const payload = {
			...values,
			id,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prev = JSON.parse(localStorage.getItem("mudasir-briefings") ?? "[]");
		localStorage.setItem("mudasir-briefings", JSON.stringify([payload, ...prev].slice(0, 20)));
		setRef(id);
		form.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "briefing",
		className: "bg-bg py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "08 — Briefing" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl tracking-[-0.03em] md:text-5xl",
					children: "Tell us the constraint."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: "A partner reads every note. If there is a fit, we propose a two-week diagnostic in the field — not a deck."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 space-y-5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-fg transition-[opacity] duration-150 hover:opacity-70",
							href: `mailto:${site.email}`,
							children: site.email
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
						children: "Field"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-fg",
						children: site.location
					})] })]
				})
			] }), ref ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-bg-elevated p-8 shadow-[var(--shadow-border)] md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted",
						children: "Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-3xl tracking-tight",
						children: "We’ll be in the room shortly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Reference ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-fg tabular-nums",
								children: ref
							}),
							". A partner replies within two business days."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						variant: "secondary",
						onClick: () => setRef(null),
						children: "Send another"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "rounded-2xl bg-bg-elevated p-5 shadow-[var(--shadow-border)] md:p-8",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							error: form.formState.errors.name?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoComplete: "name",
								...form.register("name")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							error: form.formState.errors.email?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								autoComplete: "email",
								...form.register("email")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							error: form.formState.errors.company?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								autoComplete: "organization",
								...form.register("company")
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Practice" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-2",
							children: practices.map((p) => {
								const selected = form.watch("practice") === p.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: cn("flex min-h-11 cursor-pointer items-center rounded-md px-4 text-sm transition-all duration-150", selected ? "bg-primary text-primary-fg font-medium shadow-[0_2px_12px_rgba(255,107,107,0.3)] ring-1 ring-white/20" : "bg-bg text-muted ring-1 ring-fg/10 hover:text-fg hover:ring-primary/40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										className: "sr-only",
										value: p.id,
										...form.register("practice")
									}), p.label]
								}, p.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "The constraint",
							error: form.formState.errors.challenge?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								placeholder: "What has to be true in 90 days that is not true today?",
								...form.register("challenge")
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-7 w-full md:w-auto",
						children: "Send briefing"
					})
				]
			})]
		})
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-muted",
				children: error
			}) : null
		]
	});
}
function Accordion({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-paper-line", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 py-6 text-left font-display text-xl leading-snug text-paper-ink transition-[opacity] duration-150 hover:opacity-70 [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-paper-muted transition-transform duration-200 ease-out" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden data-[state=closed]:animate-none",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pb-6 pr-8 text-sm leading-normal text-paper-muted", className),
			children
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-paper py-24 text-paper-ink md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-[0.9fr_1.4fr] lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "paper",
					children: "07 — Questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl tracking-[-0.03em] md:text-5xl",
					children: "Before you write."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-sm text-sm text-paper-muted",
					children: "Short answers. If you need a longer one, that is what the briefing is for."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: item.q,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
				}, item.q))
			})]
		})
	});
}
function Logo({ className, showText = true, size = "md", tone = "dark" }) {
	const iconSizes = {
		sm: "size-7",
		md: "size-9",
		lg: "size-11"
	};
	const textSizes = {
		sm: "text-lg",
		md: "text-xl",
		lg: "text-2xl"
	};
	const isLight = tone === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-3 select-none group", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105", iconSizes[size], isLight ? "bg-paper-line/50 text-paper-ink shadow-[0_1px_4px_rgba(0,0,0,0.08)] ring-1 ring-paper-ink/10" : "bg-bg-elevated text-fg shadow-[0_2px_12px_rgba(255,107,107,0.12)] ring-1 ring-white/10 group-hover:ring-primary/40"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 40 40",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className: "size-full p-1.5",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "mcGrad",
							x1: "4",
							y1: "4",
							x2: "36",
							y2: "36",
							gradientUnits: "userSpaceOnUse",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#ff7b7b" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0.5",
									stopColor: "#ff5252"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "1",
									stopColor: "#f43f5e"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "mcGlow",
							x1: "0",
							y1: "0",
							x2: "40",
							y2: "40",
							gradientUnits: "userSpaceOnUse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								stopColor: "#ff8a8a",
								stopOpacity: "0.8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "1",
								stopColor: "#e11d48",
								stopOpacity: "0.2"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
							id: "subtleGlow",
							x: "-20%",
							y: "-20%",
							width: "140%",
							height: "140%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
								stdDeviation: "1.5",
								result: "blur"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
								in: "SourceGraphic",
								in2: "blur",
								operator: "over"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "3",
						width: "34",
						height: "34",
						rx: "8",
						fill: isLight ? "#f5f3ef" : "#141514",
						stroke: "url(#mcGlow)",
						strokeWidth: "1.2",
						strokeOpacity: "0.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M10 29V12L16.5 21.5L23 12V29",
						stroke: "url(#mcGrad)",
						strokeWidth: "2.8",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M31 14.8C29.6 12.8 27.2 11.5 24.5 11.5C19.8 11.5 16 15.3 16 20C16 24.7 19.8 28.5 24.5 28.5C27.2 28.5 29.6 27.2 31 25.2",
						stroke: isLight ? "#1c1917" : "#edeae3",
						strokeWidth: "2.4",
						strokeLinecap: "round",
						strokeOpacity: "0.9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "20",
						cy: "9.5",
						r: "1.8",
						fill: "#ff7b7b",
						filter: "url(#subtleGlow)"
					})
				]
			})
		}), showText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display font-medium tracking-tight leading-none transition-colors duration-150", textSizes[size], isLight ? "text-paper-ink" : "text-fg group-hover:text-white"),
				children: "Mudasir Chandio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary/80 leading-none",
				children: "Systems & Studio"
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-bg pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-14 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-sm text-sm text-muted",
				children: site.tagline
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "transition-[color] duration-150 hover:text-fg",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${site.email}`,
					className: "transition-[color] duration-150 hover:text-fg",
					children: site.email
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle md:px-10 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Mudasir Chandio"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.location })]
		})]
	});
}
function HeroFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/hero-studio.jpg",
			alt: "",
			className: "h-full w-full object-cover opacity-50"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" })]
	});
}
function Hero() {
	const reduce = useReducedMotion();
	const root = (0, import_react.useRef)(null);
	const [Field, setField] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./hero-field-BHiJqWhi.mjs").then((m) => {
			if (live) setField(() => m.HeroField);
		}).catch(() => {});
		return () => {
			live = false;
		};
	}, []);
	useGSAP(() => {
		if (typeof window === "undefined") return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		ScrollTrigger.create({
			trigger: root.current,
			start: "top top",
			end: "bottom top",
			onUpdate: (self) => {
				heroScroll.current = self.progress;
			}
		});
	}, { scope: root });
	const ease = [
		.22,
		1,
		.36,
		1
	];
	const variants = {
		hidden: {
			opacity: 0,
			y: reduce ? 0 : 18,
			filter: reduce ? "none" : "blur(6px)"
		},
		show: (i) => ({
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				delay: .12 + i * .1,
				duration: .7,
				ease
			}
		})
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		className: "relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 md:pointer-events-auto md:left-[38%]",
				children: Field ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFallback, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/88 to-bg/20 md:via-bg/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-10 lg:px-16 lg:pb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						custom: 0,
						initial: "hidden",
						animate: "show",
						variants,
						className: "inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mudasir Chandio · Fullstack & AI Studio" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						custom: 1,
						initial: "hidden",
						animate: "show",
						variants,
						className: "mt-5 max-w-4xl font-display text-3xl leading-[1.05] tracking-[-0.035em] text-fg md:text-[clamp(3.4rem,7vw,6.4rem)]",
						children: [
							"Field-ready",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "intelligence."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						custom: 2,
						initial: "hidden",
						animate: "show",
						variants,
						className: "mt-6 max-w-xl text-base leading-normal text-muted md:text-lg",
						children: "I build scalable web applications and production AI systems from front to back. SaaS platforms, APIs, and tools operators actually use on a Tuesday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						custom: 3,
						initial: "hidden",
						animate: "show",
						variants,
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#briefing",
								children: ["Start a briefing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								children: "See the work"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
						custom: 4,
						initial: "hidden",
						animate: "show",
						variants,
						className: "mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-3xl tracking-tight text-fg tabular-nums md:text-4xl",
							children: s.value
						})] }, s.label))
					})
				]
			})
		]
	});
}
function Manifesto() {
	const root = (0, import_react.useRef)(null);
	const fill = (0, import_react.useRef)(null);
	useGSAP(() => {
		if (typeof window === "undefined") return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 768px)", () => {
			if (reduced) return;
			gsapWithCSS.fromTo(fill.current, { backgroundPositionX: "100%" }, {
				backgroundPositionX: "0%",
				ease: "none",
				scrollTrigger: {
					trigger: root.current,
					start: "top top",
					end: "+=140%",
					pin: true,
					scrub: .6,
					anticipatePin: 1
				}
			});
		});
		return () => mm.revert();
	}, { scope: root });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: root,
		className: "relative flex min-h-[100svh] items-center bg-paper text-paper-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-28 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "paper",
					children: "01 — Stance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					ref: fill,
					className: "mt-8 max-w-5xl font-display text-[clamp(1.85rem,4.2vw,4.1rem)] leading-[1.15] tracking-[-0.03em] text-paper-muted md:bg-[linear-gradient(to_right,var(--color-paper-ink)_50%,var(--color-paper-muted)_50%)] md:bg-[length:200%_100%] md:bg-clip-text md:text-transparent",
					children: "Most AI programs stall in the gap between a promising demo and a Tuesday morning. I exist to close it. I embed with your operators, ship production systems, and leave tools people actually open — not slides."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-xl text-sm leading-normal text-paper-muted md:text-base",
					children: "If the work cannot be handed over, it is not shipped. If the media cannot be measured, it is not spend. That is the whole practice."
				})
			]
		})
	});
}
function Method() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		className: "bg-paper py-24 text-paper-ink md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "paper",
					children: "04 — Method"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl",
					children: "Diagnose. Embed. Ship. Compound."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-4 md:grid-cols-2",
					children: method.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex h-full flex-col rounded-2xl bg-bg/0 p-6 ring-1 ring-paper-ink/10 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] tracking-[0.16em] text-paper-muted",
										children: step.step
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] uppercase tracking-[0.14em] text-paper-muted",
										children: step.duration
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-3xl tracking-tight",
									children: step.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-normal text-paper-muted md:text-base",
									children: step.text
								})
							]
						})
					}, step.step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-10 border-t border-paper-line pt-14 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "paper",
						children: "FDE capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y divide-paper-line",
						children: capabilities.fde.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "py-3 font-display text-2xl tracking-tight",
							children: item
						}, item))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "paper",
						children: "Performance capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y divide-paper-line",
						children: capabilities.performance.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "py-3 font-display text-2xl tracking-tight",
							children: item
						}, item))
					})] })]
				})
			]
		})
	});
}
function Nav() {
	const [hidden, setHidden] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious() ?? 0;
		if (open) {
			setHidden(false);
			return;
		}
		setHidden(latest > 80 && latest > prev);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		className: cn("fixed inset-x-0 top-0 z-40 border-b border-transparent transition-colors duration-200", open ? "bg-paper" : "bg-bg/75 backdrop-blur-md border-line/40"),
		animate: { y: hidden ? "-100%" : "0%" },
		transition: {
			duration: .28,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[4.25rem] md:px-10 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					"aria-label": "Mudasir Chandio Home",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						tone: open ? "light" : "dark",
						size: "sm"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-muted transition-[color] duration-150 hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden md:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#briefing",
							children: "Start a briefing"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("relative inline-flex size-11 items-center justify-center rounded-md md:hidden", open ? "text-paper-ink" : "text-fg"),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-30 flex flex-col bg-paper px-5 pt-24 text-paper-ink md:hidden",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .25,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-col gap-2",
			"aria-label": "Mobile",
			children: nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
				href: item.href,
				onClick: () => setOpen(false),
				className: "border-b border-paper-line py-4 font-display text-4xl",
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .05 * i,
					duration: .35
				},
				children: item.label
			}, item.href))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size: "lg",
			variant: "inverted",
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#briefing",
				onClick: () => setOpen(false),
				children: "Start a briefing"
			})
		})]
	}) : null })] });
}
function Practices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "practices",
		className: "bg-bg py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "02 — Practices" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] text-fg md:text-5xl",
					children: "Two practices. One standard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Hire one practice, or both. The scoreboard is shared either way: production systems that operators use, and growth that pays for itself."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 lg:grid-cols-2",
				children: practices$1.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col overflow-hidden rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: "",
								className: "media aspect-[4/3] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute top-4 left-4 font-mono text-[11px] tracking-[0.16em] text-fg",
								children: [
									p.index,
									" / ",
									p.kicker
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col px-4 pt-6 pb-5 md:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl tracking-tight text-fg",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base text-fg/90",
									children: p.lead
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: p.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2.5",
									children: p.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-accent" }), point]
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#briefing",
									className: "mt-8 inline-flex items-center gap-1.5 self-start text-sm text-fg transition-[opacity] duration-150 hover:opacity-70",
									children: ["Brief this practice", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})
							]
						})]
					})
				}, p.id))
			})]
		})
	});
}
function Proof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-bg py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "06 — Proof" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl",
					children: "Quiet numbers. Loud handover."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-8 border-y border-line py-10 md:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl tabular-nums tracking-tight md:text-5xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-[16ch] text-xs leading-snug text-muted",
						children: s.label
					})] }, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 lg:grid-cols-3",
					children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex h-full flex-col rounded-2xl bg-bg-elevated p-7 shadow-[var(--shadow-border)] md:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xl leading-snug tracking-tight text-fg md:text-2xl",
								children: [
									"“",
									t.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-auto pt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-fg",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle",
									children: t.title
								})]
							})]
						})
					}, t.name))
				})
			]
		})
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 28,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "fixed top-0 left-0 z-50 h-[2px] origin-left bg-accent",
		style: { scaleX }
	});
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger, useGSAP);
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const lenis = new Lenis({
			autoRaf: false,
			lerp: .12,
			smoothWheel: true
		});
		lenis.on("scroll", ScrollTrigger.update);
		const ticker = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(ticker);
		gsapWithCSS.ticker.lagSmoothing(0);
		const onResize = () => ScrollTrigger.refresh();
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
			gsapWithCSS.ticker.remove(ticker);
			lenis.destroy();
		};
	}, []);
	return children;
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "bg-bg py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "05 — The field team" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-3xl font-display text-2xl tracking-[-0.03em] md:text-5xl",
						children: "Engineers in the room. Operators on the numbers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "A small practice on purpose. Principals stay on the engagement — no bait-and-switch from a pitch team to a junior bench."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-3",
					children: teamFde.map((person, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .07,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group overflow-hidden rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border)] transition-all duration-200 hover:ring-1 hover:ring-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: person.image,
									alt: person.name,
									className: "media aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-3 pt-5 pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl tracking-tight text-fg group-hover:text-white transition-colors",
										children: person.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary/80",
										children: person.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: person.bio
									})
								]
							})]
						})
					}, person.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Specialist Systems & Growth" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-2 lg:grid-cols-4",
						children: teamPerformance.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group bg-bg-elevated p-6 md:p-7 transition-colors duration-150 hover:bg-bg-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-13 items-center justify-center rounded-lg bg-paper font-display text-xl text-paper-ink ring-1 ring-white/10 group-hover:ring-primary/50 group-hover:shadow-[0_0_16px_rgba(255,107,107,0.2)] transition-all duration-200",
									children: person.initials
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl tracking-tight text-fg group-hover:text-white transition-colors",
									children: person.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary/80",
									children: person.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: person.bio
								})
							]
						}, person.name))
					})]
				})
			]
		})
	});
}
function Work() {
	const root = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(null);
	useGSAP(() => {
		if (typeof window === "undefined") return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 900px)", () => {
			if (reduced || !track.current || !root.current) return;
			const distance = () => track.current.scrollWidth - window.innerWidth + 80;
			gsapWithCSS.to(track.current, {
				x: () => -distance(),
				ease: "none",
				scrollTrigger: {
					trigger: root.current,
					start: "top top",
					end: () => `+=${distance()}`,
					pin: true,
					scrub: .65,
					anticipatePin: 1,
					invalidateOnRefresh: true
				}
			});
		});
		return () => mm.revert();
	}, { scope: root });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		ref: root,
		className: "relative overflow-hidden bg-bg py-24 md:py-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1400px] px-5 md:px-10 lg:px-16 md:pt-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "03 — Selected work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-2xl font-display text-2xl tracking-[-0.03em] md:text-5xl",
						children: "Systems in production. Media that compounds."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden max-w-xs text-sm text-muted md:block",
						children: "Scroll the field — four engagements, two practices, one standard of handover."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: track,
				className: "mt-10 flex flex-col gap-8 px-5 md:mt-16 md:h-[72vh] md:flex-row md:items-stretch md:gap-8 md:px-10 lg:px-16",
				children: cases.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex w-full shrink-0 flex-col md:w-[min(72vw,920px)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActive(item),
						className: "group relative overflow-hidden rounded-2xl text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "media aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] md:h-[46vh] md:aspect-auto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[11px] tracking-[0.16em] text-muted",
									children: [
										String(i + 1).padStart(2, "0"),
										" / ",
										item.year
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-4xl tabular-nums text-fg md:text-5xl",
									children: item.metric
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
							children: [
								item.client,
								" · ",
								item.practice
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl tracking-tight md:text-3xl",
							children: item.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted md:max-w-xs",
							children: item.metricLabel
						})]
					})]
				}, item.id))
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-end justify-center bg-bg/70 p-4 backdrop-blur-sm md:items-center",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "case-title",
				onClick: () => setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-bg-elevated p-2 shadow-[var(--shadow-border-hover)]"),
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: "",
						className: "media aspect-video w-full rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-6 md:px-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.16em] text-subtle",
								children: [
									active.client,
									" · ",
									active.practice
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								id: "case-title",
								className: "mt-2 font-display text-3xl tracking-tight",
								children: active.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-normal text-muted",
								children: active.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2",
								children: active.outcome.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-accent" }), line]
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-8 text-sm text-muted transition-[color] duration-150 hover:text-fg",
								onClick: () => setActive(null),
								children: "Close"
							})
						]
					})]
				})
			}) : null
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SmoothScroll, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#practices",
		className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
		children: "Skip to content"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clients, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Practices, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proof, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	})] });
}
//#endregion
export { heroScroll as n, routes_exports as t };
