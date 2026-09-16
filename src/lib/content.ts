export const site = {
  name: "Fieldline",
  tagline: "Field-ready intelligence.",
  email: "briefing@fieldline.agency",
  location: "New York · London · Remote field",
};

export const nav = [
  { href: "#practices", label: "Practices" },
  { href: "#work", label: "Work" },
  { href: "#method", label: "Method" },
  { href: "#team", label: "Team" },
  { href: "#briefing", label: "Briefing" },
] as const;

export const stats = [
  { value: "14", label: "Production agents shipped last year" },
  { value: "3.2×", label: "Median ROAS lift on rebuilt accounts" },
  { value: "18d", label: "Median time to first production" },
  { value: "41%", label: "Faster exception clearance, logistics" },
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
    name: "Forward Deployed Engineering",
    kicker: "AI FDE Engineers",
    image: "/images/practice-fde.jpg",
    lead: "We sit with your operators until the model is a tool they reach for on a Tuesday — not a demo they saw in Q2.",
    body: "Fieldline FDEs embed inside the workflow: tickets, yards, underwriting queues, care ops. They leave behind agents, evaluations, retrieval, and the unglamorous glue that keeps a system honest after launch.",
    points: [
      "Production agents with tool use, memory, and human gates",
      "Evaluation harnesses tied to real operator outcomes",
      "Retrieval, permissions, and audit that survive legal review",
      "Observability, fallbacks, and on-call the client can own",
    ],
  },
  {
    id: "performance",
    index: "02",
    name: "Performance Marketing",
    kicker: "Performance Specialists",
    image: "/images/practice-perf.jpg",
    lead: "Acquisition is a system, not a campaign. We engineer creative, media, and measurement until the numbers move — and stay moved.",
    body: "Our performance team treats spend like an experiment design problem. Incrementality over vanity, creative science over asset dumps, and a stack your board can read without a translator.",
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
    practice: "Forward Deployed Engineering",
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
    practice: "Performance Marketing",
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
    practice: "Forward Deployed Engineering",
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
      "Performance wanted volume. Brand wanted control. FDEs built a generation-and-gate pipeline on their DAM; performance ran the media science. CAC fell without lighting the brand on fire.",
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
    text: "FDEs sit with operators. Performance sits with media and finance. No offsite ‘innovation’. Access, instrumentation, and a working loop inside your tools.",
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
    "Production agents & tool use",
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
    name: "Maya Chen",
    role: "Principal, Forward Deployed Engineering",
    bio: "Former applied research lead. Ships agents into yards, clinics, and credit floors — then leaves the evals behind.",
    image: "/images/portrait-maya.jpg",
  },
  {
    name: "Julian Voss",
    role: "Staff FDE",
    bio: "Systems engineer for retrieval, permissions, and the glue most demos skip. Calm in production incidents.",
    image: "/images/portrait-julian.jpg",
  },
  {
    name: "Priya Nair",
    role: "Applied ML, Field",
    bio: "Evaluation design and model behavior. If it cannot be scored against an operator outcome, it does not ship.",
    image: "/images/portrait-priya.jpg",
  },
] as const;

export const teamPerformance = [
  {
    name: "Elena Rossi",
    role: "Partner, Performance",
    initials: "ER",
    bio: "Builds acquisition as an engineered loop. Allergic to last-click stories and moodboard media.",
  },
  {
    name: "Marcus Hale",
    role: "Media Science",
    initials: "MH",
    bio: "Mix models, holdouts, bid policy. Translates spend into a scoreboard finance will sign.",
  },
  {
    name: "Amina Diallo",
    role: "Creative Systems",
    initials: "AD",
    bio: "Always-on creative engines with brand gates. Volume without setting the house style on fire.",
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
    q: "How is FDE different from staff augmentation?",
    a: "We embed to ship a production system with evals, gates, and an owner on your side — then we leave. We are not a bench of extra tickets. The unit of work is a working loop, not a sprint of hours.",
  },
  {
    q: "Do you run media in-house?",
    a: "Yes. Performance specialists operate spend, creative systems, and measurement. We can sit alongside your in-house team or run the stack. We will not take an account we cannot instrument.",
  },
  {
    q: "What does a first engagement look like?",
    a: "A two-week diagnostic in the field, a written cut of the smallest production change that would matter, then an embed. Most FDE cuts land in production inside a month. Performance rebuilds show a clean read inside a quarter.",
  },
  {
    q: "Who owns the models, code, and media?",
    a: "You do. We build in your cloud, your ad accounts, your repos. Handover is a release criterion, not a phase we invoice extra for.",
  },
  {
    q: "Can we start with only one practice?",
    a: "Yes. Many clients hire FDE or Performance alone. When both are in the room — as with Kite — the scoreboard is shared and the work compounds faster.",
  },
  {
    q: "Is there a minimum?",
    a: "Diagnostic is a fixed two-week engagement. Ongoing field work is scoped to a system, not a retainer of vague hours. If the constraint is a slide deck, we are the wrong firm.",
  },
] as const;
