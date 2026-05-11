# NeuroSpect Marketing Site — Boot Prompt

_Generated 2026-05-10. Standalone marketing/waitlist site, separate from the `app/` trading platform._

## What to Build

A simple, high-impact marketing site for NeuroSpect — the vertical AI platform for ICT traders. Static site (no auth, no backend), focused on communicating the product vision and collecting waitlist signups. Deploy separately from the `app/` (Cloudflare Pages or similar).

### Tech Recommendation

| Option | Stack | Why |
|---|---|---|
| **Recommended** | Astro + Tailwind + shadcn | Static-first, fast, Cloudflare Pages native, component reuse with `app/` later |
| Alternative | Next.js + Tailwind | Overkill for static, but familiar if you want SSR later |
| Minimal | Plain HTML + Tailwind | Fastest to ship, hardest to maintain |

Waitlist backend: Cloudflare Workers KV, or a simple Resend/Mailchimp integration, or a Google Form embed. Keep it minimal.

---

## Site Structure

### Directory

```
site/                              # New top-level dir in monorepo
├── src/
│   ├── pages/
│   │   ├── index.astro            # Landing / home
│   │   ├── compare.astro          # Competitive intelligence — "Why NeuroSpect?"
│   │   ├── performance.astro      # Performance Lab — illustrative trader analytics
│   │   ├── workflows.astro        # Trader workflow tiers
│   │   ├── architecture.astro     # System architecture diagram
│   │   └── pricing.astro          # Pricing tiers
│   ├── components/
│   │   ├── Hero.astro             # Slogan + CTA
│   │   ├── Problems.astro         # Pain points grid
│   │   ├── Features.astro         # Product features (8 cards)
│   │   ├── CoachDemo.astro        # Chat mockup demo
│   │   ├── WorkflowTier.astro     # Reusable workflow tier component
│   │   ├── WaitlistForm.astro     # Email capture
│   │   ├── ScrollAnimator.astro   # Global IntersectionObserver
│   │   ├── compare/               # /compare page components
│   │   │   ├── CompareHero.astro
│   │   │   ├── CapabilityMatrix.astro
│   │   │   ├── SubscriptionStack.astro
│   │   │   ├── WorkflowFriction.astro
│   │   │   ├── QuestionsGrid.astro
│   │   │   ├── OutperformVisual.astro
│   │   │   └── CompareCTA.astro
│   │   └── performance/           # /performance page components
│   │       ├── PerformanceHero.astro
│   │       ├── TraderMaturity.astro        # Chart.js radar
│   │       ├── EquityCurveChart.astro      # Chart.js line (centerpiece)
│   │       ├── KpiSummaryCards.astro
│   │       ├── TradeDetailPanel.astro      # Slide-in panel
│   │       ├── AnalyticsTabs.astro         # Tabbed analytics dashboard
│   │       ├── TierAnalyticsPanel.astro    # Expandable tier details
│   │       ├── TraderImprovementTable.astro
│   │       └── PerformanceBottom.astro
│   ├── data/
│   │   ├── tier-colors.ts         # Shared tier color/name mappings
│   │   ├── competitors.ts         # Capability matrix, subscription stack
│   │   ├── equity-curves.ts       # 1-month NQ equity curves + trade markers
│   │   ├── tier-kpis.ts           # KPIs, maturity dimensions, improvement plans
│   │   └── performance-analytics.ts # Day-of-week, session, mistake, setup, risk data
│   ├── layouts/
│   │   └── Base.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── og-image.png
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── CLAUDE.md
```

---

## Page 1: Landing Page (`/`)

### Section 1: Hero

**Slogan concept:**

> **The Only Platform an ICT Trader Will Ever Need.**
>
> From your first Fair Value Gap to your first automated strategy — NeuroSpect is the AI-native platform built exclusively for ICT and Smart Money Concepts traders. Learn, journal, research, backtest, and trade — all in one place, powered by an LLM that actually understands ICT.

CTA: **Join the Waitlist** (email input + submit)

### Section 2: The Problem — What Every ICT Trader Faces

Grid of 6 pain points with icons. Each has a headline, 1-2 sentence description, and what NeuroSpect does about it.

| Pain Point | Description | NeuroSpect Solution |
|---|---|---|
| **"I watch hours of mentorship content but can't apply it live"** | Video content is passive. When the chart is live, you're alone with your notes. | **AI Coach (NeuroSpect Mentor)** — An ICT-fluent AI trained on your mentor's actual content. Ask it questions mid-session, get cited answers with checklist validation. |
| **"I know my mistakes but I keep making them"** | Traders journal inconsistently, and when they do, nobody holds them accountable to the patterns. | **Mistake-Driven Coaching** — Your journal data feeds the AI. Recurring mistakes trigger targeted interventions and action items before your next session. |
| **"I can't tell if my strategy actually has edge"** | Discretionary traders have no way to statistically validate whether their ICT setups work or if they're curve-fitting from memory. | **EdgeLab Backtesting** — Event-driven backtester with ICT-native detectors (FVG, OB, MSS, SMT). Monte Carlo simulation, walk-forward validation, and null testing. |
| **"Journaling takes too long so I skip it"** | Manual entry of 20+ fields after every trade kills consistency. No data means no improvement loop. | **Frictionless Journal** — Tab-based entry, smart defaults, voice input, broker auto-fill, AI coach pre-fill. Your journal becomes a 30-second habit, not a 10-minute chore. |
| **"I blow prop firm accounts on tilt"** | Emotional trading after losses is the #1 account killer. No tool stops you in the moment. | **Risk Limit Engine** — Daily loss limits, max trade caps, cooldown timers, drawdown awareness. Prop-firm rule presets (Topstep, Apex, etc.). The guardrail between you and your worst impulses. |
| **"Generic AI tools don't understand ICT"** | ChatGPT doesn't know what a CISD is. It can't validate an OTE entry. It hallucinates ICT concepts. | **NSLM — NeuroSpect Language Model** — A bespoke ICT-aware model family built on 36K+ lines of curated ICT content, 7 machine-readable entry models, and 5 course modules. It speaks ICT natively. |

### Section 3: Platform Features (8 cards)

Each card: icon, title, 2-3 line description, and a "tier badge" showing which plan includes it.

| Feature | Description | Content Source |
|---|---|---|
| **ICT Course & Knowledge Base** | 5 structured modules, 18 lessons, from market structure to SMT divergence. Not videos — interactive, searchable, AI-queryable content. Suitable for beginner ICT traders through advanced. | `wiki/concepts/course/README.md`, `wiki/concepts/entry-models/README.md` |
| **AI Coach (NeuroSpect Mentor)** | Ask questions, get cited answers grounded in real ICT content. Checklist validation against 7 entry models. Personalized to your journal and trading history. 24/7 availability. | `roadmap/plan.md` §5 Components, `wiki/concepts/ai-coach/` |
| **Bespoke LLM (NSLM)** | Not a ChatGPT wrapper. A purpose-built ICT language model trained on private mentorship content, structured playbooks, and evaluation feedback. Prompt-versioned, model-versioned, continuously improved through EdgeLab. | `roadmap/plan.md` §5 NSLM description |
| **Trade Journal & Analytics** | 100+ ICT-specific fields, 17 specialized enums, 7 analytics views. R-distribution, mistake tracking, day-of-week analysis, breakdown tables. The most ICT-aware journal on the market. | `wiki/concepts/architecture/trade-schema.md`, `api/app/models/trade.py`, `api/app/models/enums.py` |
| **Quant + LLM Backtesting (EdgeLab)** | Event-driven backtester with ICT-native pattern detectors. Test pure quant, pure ICT, or hybrid models. Monte Carlo simulation, walk-forward optimization, deflated Sharpe ratio. NSLM prompt versioning experiments. | `roadmap/plan.md` §5 EdgeLab, §20-21 |
| **Prop Firm Data Integration** | Tradovate broker integration for auto-fill. Import fills, positions, and account data. Map prop firm rules to risk limits automatically. | `wiki/concepts/roadmap/ideas/tradovate-integration.md`, `api/app/services/tradovate.py` |
| **Risk Limit Engine** | Daily loss limits, max trades per session, cooldown after consecutive losses, drawdown circuit breakers. Prop-firm preset rule packs. Hard blocks or friction-based interventions. Stop tilting before it costs you. | `wiki/concepts/roadmap/ideas/overtrading-risk-limits.md` |
| **Psychology Profiler** | Built from your own journal data — not a quiz. Identifies whether you're a revenge trader, hesitation trader, or overtrader. Feeds coaching personalization so the AI coach addresses your specific weaknesses. | `wiki/concepts/roadmap/ideas/trader-psychology-profiler.md` |

### Section 4: Waitlist CTA (repeat)

> **Be the first to trade with an AI that thinks in ICT.**
>
> Early access. Limited spots. No credit card required.

Email input + "Join Waitlist" button.

---

## Page 2: Trader Workflows (`/workflows`)

Show how NeuroSpect serves four distinct trader profiles, from beginner to fully automated. Each tier gets a section with: profile description, workflow diagram (text/visual), which NeuroSpect components they use, and a progression arrow to the next tier.

### Tier 1: Discretionary ICT Trader

**Profile:** Traditional ICT trader. Learns from mentorship content, trades manually, journals manually. Wants to improve consistency and apply ICT concepts correctly.

**Workflow:**
```
Study (Course KB) → Prepare (Daily Bias + AI Coach) → Execute (Manual Entry)
→ Journal (Trade Form) → Review (AI Coach Post-Trade Analysis)
→ Improve (Mistake Tracking + Action Items) → Repeat
```

**NeuroSpect Components Used:**
- NeuroSpect Mentor (AI Coach)
- NeuroCore (Knowledge Retrieval)
- Trade Journal + Analytics
- Course & Knowledge Base
- Risk Limit Engine

**Value prop:** "Your mentor can't be on your shoulder for every session. NeuroSpect Mentor can."

---

### Tier 2: Quant Trader

**Profile:** Quantitative trader who wants to validate ICT strategies statistically. Doesn't care about narratives — wants data, backtests, and edge verification.

**Workflow:**
```
Define Strategy (YAML spec) → Backtest (EdgeLab event engine)
→ Validate (Monte Carlo + Walk-Forward) → Null Test (ICT vs baseline)
→ Feature Engineer (quant features) → Train Model (LightGBM)
→ Evaluate (deflated Sharpe, regime analysis) → Deploy or Reject
```

**NeuroSpect Components Used:**
- NeuroSpect EdgeLab (full suite)
- Feature Store
- Model Registry
- NeuroQuant (production scoring)

**Value prop:** "Stop guessing if ICT works. Prove it — or disprove it — with real data."

---

### Tier 3: Hybrid Trader (Quant Tools + Discretion)

**Profile:** Discretionary trader who uses quantitative tools to support decision-making. Trades manually but wants regime detection, feature ranking, and model-assisted confluence scoring.

**Workflow:**
```
Study (Course KB) → Research (EdgeLab experiments)
→ Prepare (Daily Bias + AI Coach + Regime Detection + Feature Signals)
→ Execute (Manual Entry, informed by NeuroQuant confluence score)
→ Journal (Auto-filled from broker) → Review (AI Coach + EdgeLab comparison)
→ Improve (Model feedback + Mistake tracking) → Repeat
```

**NeuroSpect Components Used:**
- Everything from Tier 1 (Discretionary)
- EdgeLab (backtesting, feature library, NSLM prompt lab)
- NeuroQuant (confluence scoring as decision support, not automation)
- NSLM (prompt experimentation)

**Value prop:** "The best of both worlds. Your intuition, backed by quantitative evidence."

---

### Tier 4: S-Tier Trader (Quant + NSLM Automated)

**Profile:** The end state. A trader who has validated their strategies through EdgeLab, promoted models to NeuroQuant, and trusts the system enough to let NeuroTrader Agent execute. Still supervises. Still has kill switches.

**Workflow:**
```
Research (EdgeLab) → Validate (Walk-Forward + Null Test)
→ Promote (Model → NeuroQuant) → Shadow (Agent watches, logs, doesn't trade)
→ Paper (Agent trades simulated) → Limited Live (Agent trades real, small size)
→ Monitor (Performance vs EdgeLab expectations) → Iterate
```

**NeuroSpect Components Used:**
- Everything from Tiers 1-3
- NeuroTrader Agent (shadow → paper → live)
- 5-layer safety architecture
- Kill switch + circuit breakers
- Post-trade LLM analysis (agent learns from mistakes)

**Value prop:** "Your strategy, running 24/5, with 5 layers of safety between it and your capital. You built the edge. NeuroTrader executes it."

**Safety callout:** NeuroTrader Agent is gated by EdgeLab evidence. No shortcuts. Shadow mode must prove positive expectancy for 30+ days before paper. Paper must prove positive expectancy before limited live. The null test must pass (p < 0.05). You approve every escalation.

---

## Suggested Additional Pages

| Page | URL | Content | Source |
|---|---|---|---|
| **How It Works** | `/how-it-works` | Visual walkthrough of the platform — from signing up to getting your first AI coaching response. Screenshots/mockups of the journal, coach panel, and analytics. | `app/src/pages/` (screenshot existing UI), `wiki/concepts/architecture/phase4-coach-frontend.md` |
| **EdgeLab Deep Dive** | `/edgelab` | Detailed breakdown of the backtesting engine, ICT detectors, Monte Carlo, walk-forward, NSLM prompt lab, feature store, model registry. For the quant-curious audience. | `roadmap/plan.md` §5 EdgeLab, §12 Schema, §20-21 Phases 7-8, §24 EdgeLab UI |
| **ICT Concepts Glossary** | `/glossary` | Public-facing, SEO-friendly subset of the wiki. Fair Value Gap, Order Block, Market Structure Shift, SMT Divergence, etc. Each links to "Learn more with NeuroSpect Mentor." | `wiki/concepts/business-logic/*.md`, `wiki/concepts/course/` modules 1-5 |
| **Pricing** | `/pricing` | Tier comparison table (Free → Mentor → Trader → Research → Quant → Team). Feature matrix. "Coming soon" badges on unreleased tiers. | `roadmap/plan.md` §15 Pricing Strategy |
| **For Educators** | `/educators` | Pitch to ICT instructors: "Turn your content into an AI coach. Your students get 24/7 personalized coaching grounded in YOUR methodology." Revenue share model. | `roadmap/plan.md` §15 B2B pricing, §16 GTM |
| **About / Team** | `/about` | The team, the mission ("built by ICT traders, for ICT traders"), the tech philosophy (vertical AI > generic wrappers). | Manual copy |
| **Blog / Updates** | `/blog` | Development updates, beta announcements, ICT concept deep dives. SEO play. | Manual, but structure can pull from `wiki/daily/` notes |
| **FAQ** | `/faq` | "Is this financial advice?" (No — educational only), "What brokers are supported?", "When does the beta launch?", "What makes NSLM different from ChatGPT?" | `roadmap/plan.md` §17 Risk/Compliance, §15 Product Strategy |

---

## Content Source Map

Where to pull copy and data for each section:

| Content Need | Primary Source | Path |
|---|---|---|
| Product hierarchy & component descriptions | v2 Plan | `roadmap/plan.md` §0 + Executive Summary |
| ICT concept explanations (for glossary, pain points) | Wiki business logic | `wiki/concepts/business-logic/*.md` |
| Entry model descriptions (for course feature) | Entry models library | `wiki/concepts/entry-models/README.md` + individual models |
| Course module structure | Course README | `wiki/concepts/course/README.md` + modules 1-5 |
| Pricing tiers | v2 Plan | `roadmap/plan.md` §15 |
| Go-to-market / waitlist strategy | v2 Plan | `roadmap/plan.md` §16 |
| Risk/compliance disclaimers | v2 Plan | `roadmap/plan.md` §17 |
| End-to-end workflows (A-E) | v2 Plan | `roadmap/plan.md` §7 |
| EdgeLab UI screens | v2 Plan | `roadmap/plan.md` §24 |
| Trader pain points | Roadmap ideas | `wiki/concepts/roadmap/ideas/overtrading-risk-limits.md`, `reduce-journaling-friction.md`, `trader-psychology-profiler.md`, `mistake-driven-action-items.md` |
| Trade schema / journal depth | Architecture | `wiki/concepts/architecture/trade-schema.md`, `api/app/models/enums.py` |
| Vertical AI positioning | Roadmap ideas | `wiki/concepts/roadmap/ideas/vertical-ai-platform.md` |
| Existing UI for screenshots | App source | `app/src/pages/*.tsx`, `app/src/components/` |

---

## Design Notes

- **Dark theme preferred** — trading platforms are dark. Match the aesthetic.
- **Minimal, high-contrast** — Let the copy and product hierarchy do the work. Not a SaaS template with 47 gradients.
- **Mobile-first** — Traders browse on phones between sessions.
- **No login on the marketing site** — pure static + waitlist form.
- **Legal disclaimer** — Every page footer: "NeuroSpect is an educational tool. Not financial advice. Past performance does not guarantee future results."

---

_The marketing site is a Phase 0 deliverable. It validates product positioning and captures the waitlist before product development begins. The app itself lives at `app/`. The marketing site lives at `site/` in the monorepo._
