export const site = {
  name: "Mudasir Chandio",
  tagline: "Fullstack Web Developer · SaaS Builder · Problem Solver",
  email: "mudasirc350@gmail.com",
  location: "Old Memon Society Qasimabad Hyderabad",
};

export const nav = [
  { href: "#practices", label: "Practices" },
  { href: "#work", label: "Work" },
  { href: "#method", label: "Method" },
  { href: "#team", label: "Team" },
  { href: "#briefing", label: "Contact" },
] as const;

export const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "3.2×", label: "Median efficiency lift on rebuilt systems" },
  { value: "18d", label: "Median time to first production" },
  { value: "41%", label: "Faster issue resolution for clients" },
] as const;

export const clients = [
  "Northwind",
  "Lumen",
  "Harbor Mutual",
  "Kite",
  "Vesper Health",
  "Arden Retail",
  "Sable Freight",
  "Helio Bank",
  "Ornament",
  "Pylon",
] as const;

export const practices = [
  {
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
      "Observability, fallbacks, and ownership you can take over",
    ],
  },
  {
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
      "A measurement layer finance will actually sign",
    ],
  },
] as const;

export const cases = [
  {
    id: "northwind",
    client: "Northwind Logistics",
    practice: "Fullstack & AI Engineering",
    title: "Exception copilot on the yard",
    metric: "41%",
    metricLabel: "faster clearance",
    image: "/images/case-logistics.jpg",
    year: "2025",
    summary:
      "Night-shift supervisors were drowning in exception tickets. We embedded for nine weeks, shipped a gated copilot on their TMS, and left an eval suite tied to dwell time — not chatbot CSAT.",
    outcome: [
      "41% faster exception clearance across three hubs",
      "Human gate retained on every high-cost reroute",
      "On-call handed to Northwind’s ops engineering in week 10",
    ],
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
    summary:
      "Spend was creative-led and unmeasured. We rebuilt the account as a closed loop: offer architecture, always-on creative, geo-holdouts, and a weekly decision ritual the CMO still runs.",
    outcome: [
      "3.2× ROAS on prospecting within a quarter",
      "Creative cycle time from 18 days to 4",
      "Incrementality read finance accepted in the board pack",
    ],
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
    summary:
      "The model already existed. The work did not. We sat with credit officers, mapped the actual packet, and shipped an assistant that cites source pages and refuses when the file is thin.",
    outcome: [
      "First production traffic in 18 days",
      "Citation rate > 97% on sampled files",
      "Refusal path cut silent errors that used to reach committee",
    ],
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
    summary:
      "Performance wanted volume. Brand wanted control. We built a generation-and-gate pipeline on their DAM; growth ran the media science. CAC fell without lighting the brand on fire.",
    outcome: [
      "27% CAC reduction over two peaks",
      "Legal-approved variant pool, refreshed weekly",
      "Shared weekly ritual across brand, media, and data",
    ],
  },
] as const;

export const method = [
  {
    step: "01",
    name: "Diagnostic",
    duration: "2 weeks",
    text: "We start in the room — queues, spend, tickets, the actual Tuesday. A written map of the system, the constraint, and the smallest production cut that would matter.",
  },
  {
    step: "02",
    name: "Embed",
    duration: "The field",
    text: "Engineers sit with operators. Growth sits with media and finance. No offsite ‘innovation’. Access, instrumentation, and a working loop inside your tools.",
  },
  {
    step: "03",
    name: "Ship",
    duration: "Production",
    text: "Gated release, evals on real outcomes, fallbacks, ownership. If it cannot be handed over, it is not shipped.",
  },
  {
    step: "04",
    name: "Compound",
    duration: "Ongoing",
    text: "A weekly decision ritual. Creative and model updates against a scoreboard both practices share. The system gets quieter, and the numbers get less interesting — in the right way.",
  },
] as const;

export const capabilities = {
  fde: [
    "Production apps & tool use",
    "Evaluation harnesses",
    "Retrieval, memory, permissions",
    "Human-in-the-loop gates",
    "Workflow instrumentation",
    "Observability & on-call handover",
  ],
  performance: [
    "Media mix & bid policy",
    "Creative science & always-on",
    "Incrementality & geo-lifts",
    "Lifecycle & catalog systems",
    "Measurement for finance",
    "Offer architecture",
  ],
} as const;

export const teamFde = [
  {
    name: "Mudasir Chandio",
    role: "Founder · Principal Fullstack & AI Systems Architect",
    bio: "Architects scalable fullstack web applications, SaaS platforms, and production AI agents. Bridges high-throughput infrastructure with intuitive, human-centered interfaces.",
    image: "/images/portrait-mudasir.jpg",
  },
  {
    name: "Emad Ahmed",
    role: "Co-Founder · Product Design & UI/UX Director",
    bio: "Transforms convoluted operational workflows into calm, tactile design systems. Commands micro-interactions, typographic rhythm, and the final mile of product craft.",
    image: "/images/portrait-julian.jpg",
  },
  {
    name: "Zoya Qureshi",
    role: "Lead AI Research & Agentic Systems",
    bio: "Directs evaluation frameworks, contextual memory models, and deterministic tool-calling workflows. If an agent cannot reliably prove its accuracy, it does not deploy.",
    image: "/images/portrait-priya.jpg",
  },
] as const;

export const teamPerformance = [
  {
    name: "Tariq Farooq",
    role: "Distributed Systems & Cloud Architect",
    initials: "TF",
    bio: "Engineers zero-downtime microservices, event-driven streaming, and fault-tolerant Postgres backends built to survive real load on a Tuesday.",
  },
  {
    name: "Samir Varma",
    role: "Growth & Quantitative Systems Lead",
    initials: "SV",
    bio: "Builds customer acquisition as an engineered statistical loop. Focuses on incrementality, holdout science, and financial attribution that CFOs endorse.",
  },
  {
    name: "Ayla Noor",
    role: "Creative Technologist & 3D Systems",
    initials: "AN",
    bio: "Designs WebGL shaders, kinetic physics, and interactive 3D spatial experiences. Fuses real-time rendering with accessible web engineering.",
  },
  {
    name: "Danial Raza",
    role: "High-Assurance & Platform Security",
    initials: "DR",
    bio: "Audits permission boundaries, cryptographic flows, and zero-trust data access. Protects autonomous agent systems in hostile environments.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They did not pitch us another copilot. They sat the night shift, mapped the exceptions, and left a system the supervisors actually open.",
    name: "R. Okonkwo",
    title: "COO, Northwind Logistics",
  },
  {
    quote:
      "The first time our board pack had an incrementality read instead of a ROAS fairy tale. That is the engagement.",
    name: "S. Pellier",
    title: "CMO, Lumen Beauty",
  },
  {
    quote:
      "Eighteen days, in production, with citations. Legal stopped being the bottleneck because the assistant knew when to refuse.",
    name: "J. Hartmann",
    title: "Head of Credit, Harbor Mutual",
  },
] as const;

export const faqs = [
  {
    q: "How is the engineering practice different from staff augmentation?",
    a: "We embed to ship a production system with evals, gates, and an owner on your side — then we leave. We are not a bench of extra tickets. The unit of work is a working loop, not a sprint of hours.",
  },
  {
    q: "Do you run media in-house?",
    a: "Yes. Growth specialists operate spend, creative systems, and measurement. We can sit alongside your in-house team or run the stack. We will not take an account we cannot instrument.",
  },
  {
    q: "What does a first engagement look like?",
    a: "A two-week diagnostic in the field, a written cut of the smallest production change that would matter, then an embed. Most engineering cuts land in production inside a month. Growth rebuilds show a clean read inside a quarter.",
  },
  {
    q: "Who owns the models, code, and media?",
    a: "You do. We build in your cloud, your ad accounts, your repos. Handover is a release criterion, not a phase we invoice extra for.",
  },
  {
    q: "Can we start with only one practice?",
    a: "Yes. Many clients hire engineering or growth alone. When both are in the room the scoreboard is shared and the work compounds faster.",
  },
  {
    q: "Is there a minimum?",
    a: "Diagnostic is a fixed two-week engagement. Ongoing field work is scoped to a system, not a retainer of vague hours. If the constraint is a slide deck, we are the wrong fit.",
  },
] as const;
