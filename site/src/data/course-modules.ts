export interface Lesson {
  id: string;
  title: string;
  slug: string;
  summary: string;
  concepts: Section[];
  rules: string[];
  workedExample: WorkedExample;
  commonMistakes: string[];
}

export interface Section {
  heading: string;
  content: string;
}

export interface WorkedExample {
  title: string;
  steps: string[];
  keyInsight: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  lessons: Lesson[];
  lessonCount: number;
}

export interface PersonalizationProfile {
  experience: "beginner" | "intermediate" | "advanced" | "prop_firm";
  ictTime: "lt6m" | "6to12m" | "1to2y" | "2plus";
  instruments: string[];
  style: "discretionary" | "quant-curious" | "hybrid" | "systematic";
  struggles: string[];
  goals: string[];
}

export interface CourseProgress {
  profileCompleted: boolean;
  profile: PersonalizationProfile | null;
  modules: Record<
    string,
    {
      lessonsCompleted: string[];
      quizScore: number | null;
      chartIdScore: number | null;
      scenarioScore: number | null;
      engagementScore: number | null;
      passed: boolean;
      attempts: number;
      weakAreas: string[];
    }
  >;
  entryModelsUnlocked: boolean;
  completedAt: string | null;
}

export const STRUGGLES = [
  { id: "cant-identify", label: "Can't identify setups in real-time" },
  { id: "cant-execute", label: "Know concepts but can't execute" },
  { id: "overtrade", label: "Overtrade / take bad setups" },
  { id: "no-bias", label: "Can't build a daily bias" },
  { id: "no-structure", label: "Don't understand market structure" },
  { id: "risk-mgmt", label: "Struggle with risk management" },
  { id: "cant-backtest", label: "Can't backtest my ideas" },
  { id: "no-setups", label: "Don't know which setups work for me" },
] as const;

export const GOALS = [
  { id: "prop-firm", label: "Pass a prop firm challenge" },
  { id: "consistent", label: "Become consistently profitable" },
  { id: "automate", label: "Automate my strategy" },
  { id: "understand", label: "Understand ICT concepts deeply" },
  { id: "systematic", label: "Build a systematic trading process" },
] as const;

export const modules: Module[] = [
  {
    id: 1,
    title: "Foundations",
    subtitle: "Liquidity, Fair Value Gaps, and Practice",
    slug: "module-1",
    lessonCount: 3,
    lessons: [
      {
        id: "1.1",
        title: "What Moves the Market",
        slug: "what-moves-the-market",
        summary:
          "Every price move travels from liquidity to inefficiency or from inefficiency to liquidity. When doing neither, it consolidates — engineering more liquidity for a future move.",
        concepts: [
          {
            heading: "Liquidity",
            content:
              "Liquidity exists because of stop orders. <strong>Buy-Side Liquidity (BSL)</strong> rests above swing highs — traders who went short placed stops there. <strong>Sell-Side Liquidity (SSL)</strong> rests below swing lows. The algorithm targets these stops daily, making swing highs and lows your <strong>Draw on Liquidity (DOL)</strong> — the daily price magnet.",
          },
          {
            heading: "Swing Highs & Swing Lows",
            content:
              "A swing is a <strong>three-candle pattern</strong>. Swing high: candle 2 is the highest. Swing low: candle 2 is the lowest. Mark candle 2's price — a single price level, not a zone. One tick beyond is sufficient to collect the stops.",
          },
          {
            heading: "Inefficiency (Fair Value Gap)",
            content:
              "Unlike liquidity, inefficiency requires <strong>displacement</strong> — price moving rapidly in one direction. The gap left behind is the <strong>Fair Value Gap (FVG)</strong>. Three candles form it: Candle 1 (before the move), Candle 2 (the void), Candle 3 (the new move). Price must return to deliver in both directions.",
          },
          {
            heading: "BISI and SIBI",
            content:
              "<strong>BISI</strong> (Buy Side Imbalance, Sell Side Inefficiency) — a bullish FVG. Used for long entries targeting BSL above. <strong>SIBI</strong> (Sell Side Imbalance, Buy Side Inefficiency) — a bearish FVG. Used for short entries targeting SSL below.",
          },
        ],
        rules: [
          "Above swing highs = BSL. Below swing lows = SSL. These are your daily targets.",
          "A swing is exactly three candles. Mark candle 2's price level, not a zone.",
          "One tick beyond the swing high/low collects the stops.",
          "An FVG requires displacement. Slow ranges don't create valid FVGs.",
          "Price only needs to dip into the FVG — it doesn't need to fully fill.",
          "Bullish → find a BISI. Bearish → find a SIBI.",
          "Mark DOL on 1H/15M. Find FVG entry on 5M–1M.",
        ],
        workedExample: {
          title: "AXL's NQ Trade (Class 1)",
          steps: [
            "Identified equal lows on 1M — a rejection block (engineered by the algorithm).",
            "Market swept those equal lows (took SSL), then displaced higher.",
            "Displacement created a volume imbalance below equilibrium.",
            "Entered at the volume imbalance, stop below the sweep swing.",
            "Result: 1 risk, 36 reward.",
          ],
          keyInsight:
            "Equal lows swept → displacement → FVG/volume imbalance near EQ → entry → run to target.",
        },
        commonMistakes: [
          "Using zones instead of prices — the swing high/low is a single price level.",
          "Waiting for a full FVG fill — a tag is enough (mitigation sufficiency).",
          "Trading without a DOL — an FVG entry without a target is gambling.",
          "Ignoring timeframe alignment — only use 5M–1M FVGs when HTF DOL is aligned.",
        ],
      },
      {
        id: "1.2",
        title: "Fair Value Gaps",
        slug: "fair-value-gaps",
        summary:
          "Deeper FVG mechanics: how to measure precisely, which FVGs to prioritize, and the IOFED and BAG conditions that signal the highest-probability entries.",
        concepts: [
          {
            heading: "Entry Precision",
            content:
              "For a bullish FVG (BISI), the best entry is <strong>at or below Candle 3's low</strong> — the bottom of the gap's top edge. One tick below is the most precise entry. Do not enter at the top 50% — you'll miss trades where price only dips and runs.",
          },
          {
            heading: "Consequent Encroachment (CE)",
            content:
              "The CE is the <strong>50% midpoint</strong> of the FVG (Candle 1 extreme to Candle 3 extreme). Important as the threshold for the IOFED condition. Stop loss goes below Candle 1 of the FVG, not at the CE.",
          },
          {
            heading: "IOFED — Highest Probability Entry",
            content:
              "<strong>Institutional Order Flow Entry Drill.</strong> Price creates an FVG, retraces back to it, but does <strong>not close below the CE</strong>. This signals institutional order flow is using the FVG as support. Must be the first FVG of the move.",
          },
          {
            heading: "BAG — Breakaway Gap",
            content:
              "When price creates an FVG and <strong>never returns to it</strong>, skipping it entirely. This confirms the move is strongly directional. Do not wait for a BAG to fill — look for the next FVG.",
          },
          {
            heading: "Inversion FVG",
            content:
              "A bearish FVG (SIBI) that price <strong>closes above</strong> inverts into bullish support. When price returns to the former bearish FVG, it now acts as a bullish entry zone. Respect the 50% of the inverted zone.",
          },
        ],
        rules: [
          "Mark the exact FVG range: Candle 1's extreme to Candle 3's extreme.",
          "Enter at Candle 3's area (top edge of bullish FVG), not the middle.",
          "Stop goes below Candle 1 of the FVG.",
          "Price returns to FVG, doesn't close below CE → IOFED → highest probability.",
          "Price skips the FVG entirely → BAG → look for the next opportunity.",
          "Bearish FVG with price closing above it → inversion FVG → bullish support.",
          "Multiple FVGs on one displacement: enter on the first, allow stop for the second.",
          "Volume imbalances behave like FVGs — use the 50% for entry.",
        ],
        workedExample: {
          title: "MrWitness on NQ — Inversion FVG (Class 2)",
          steps: [
            "Asia session created consolidation range. Low of consolidation = SSL target for London.",
            "London swept the Asia lows (took SSL).",
            "SMT divergence: ES made lower low, NQ did not.",
            "Displacement higher created an inversion FVG above consolidation EQ.",
            "Price returned to the inversion FVG twice, respecting the 50%.",
            "Third touch: price closed above EQ + inversion FVG → highest-probability long entry.",
            "Price expanded to previous day high.",
          ],
          keyInsight:
            "When a candle closes above the bearish FVG AND above the consolidation equilibrium — it's killing two birds with one stone.",
        },
        commonMistakes: [
          "Entering at the top 50% of the FVG — price frequently only dips to the lower portion.",
          "Waiting for a full fill when IOFED is met — the gap is 'done,' enter now.",
          "Marking zones instead of precise candle levels — an FVG is a void, not a zone.",
          "Treating every displacement as a valid FVG — it must be rapid and directional.",
        ],
      },
      {
        id: "1.3",
        title: "Homework & Practice",
        slug: "homework-and-practice",
        summary:
          "Two homework assignments from MrWitness: back-test the liquidity + FVG setup, then back-test the consolidation model. Analysis only — no live trades.",
        concepts: [
          {
            heading: "Class 1 Homework: Liquidity & Inefficiency",
            content:
              "On 1H/15M, identify swing highs and lows (DOL). On 5M–1M, find a displacement FVG aligned with the DOL direction. Mark the ideal entry, stop loss, and target. Screenshot must include time of entry. Post 1–5 examples.",
          },
          {
            heading: "Class 2 Homework: Consolidation Model",
            content:
              "Find a consolidation range (bodies define the range, not wicks). Mark the 50% (EQ). Identify a PDA at or below the EQ. Mark entry, stop, TP1 (low end of range), TP2 (optional — PDH/PDL). Label the kill zone and PDA type.",
          },
          {
            heading: "Readiness Check",
            content:
              "Before Module 2, you should be able to: mark swings without hesitation, identify valid FVGs, distinguish displacement from slow ranges, apply IOFED, find consolidation EQ, and locate a PDA in discount.",
          },
        ],
        rules: [
          "Back-test only — no live or demo trades.",
          "Mark single price levels, not zones.",
          "FVG entries on 5M–1M only, DOL on 1H/15M.",
          "Every screenshot needs the time of entry visible.",
          "Consolidation ranges use bodies, not wicks.",
          "PDAs for bullish setups must be at or below the 50% (EQ).",
        ],
        workedExample: {
          title: "MrWitness's Consolidation Example",
          steps: [
            "Consolidation formed from Sunday overnight to Monday pre-market (Asia).",
            "EQ marked at the 50% of the consolidation range.",
            "London swept the SSL (consolidation lows).",
            "SMT divergence at the lows (ES lower low, NQ did not).",
            "Price closed back above the EQ.",
            "Inversion FVG appeared at the EQ — bearish FVG inverted to bullish support.",
            "Entry at 4:14 AM at the inversion FVG, below EQ.",
          ],
          keyInsight:
            "This setup appears in Asia, London, AM, PM, or lunch. The time doesn't matter — the structure does.",
        },
        commonMistakes: [
          "Skipping back-testing and jumping to live trades.",
          "Using wicks instead of bodies to define consolidation ranges.",
          "Entering PDAs above the EQ (premium zone) for bullish setups.",
          "Not labeling time and kill zone context on screenshots.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Price Delivery",
    subtitle:
      "Algorithmic Price Delivery, Consolidation, Expansion, Reversals",
    slug: "module-2",
    lessonCount: 4,
    lessons: [],
  },
  {
    id: 3,
    title: "Session Context & Bias",
    subtitle: "Power of Three, Kill Zones, Deviations, Daily Bias",
    slug: "module-3",
    lessonCount: 4,
    lessons: [],
  },
  {
    id: 4,
    title: "Market Structure",
    subtitle: "Swing Classification, Fractality, Structure Deviations, OTE",
    slug: "module-4",
    lessonCount: 4,
    lessons: [],
  },
  {
    id: 5,
    title: "Order Flow & SMT",
    subtitle: "HTF/LTF Order Flow, SMT Divergence",
    slug: "module-5",
    lessonCount: 2,
    lessons: [],
  },
];

export function getDefaultProgress(): CourseProgress {
  const moduleProgress: CourseProgress["modules"] = {};
  for (const mod of modules) {
    moduleProgress[mod.slug] = {
      lessonsCompleted: [],
      quizScore: null,
      chartIdScore: null,
      scenarioScore: null,
      engagementScore: null,
      passed: false,
      attempts: 0,
      weakAreas: [],
    };
  }
  return {
    profileCompleted: false,
    profile: null,
    modules: moduleProgress,
    entryModelsUnlocked: false,
    completedAt: null,
  };
}

export function getPersonalizedPath(
  profile: PersonalizationProfile
): { moduleId: number; priority: string; note: string }[] {
  const path: { moduleId: number; priority: string; note: string }[] = [];

  if (profile.experience === "beginner") {
    path.push(
      { moduleId: 1, priority: "required", note: "Start here" },
      { moduleId: 2, priority: "required", note: "" },
      { moduleId: 3, priority: "required", note: "" },
      { moduleId: 4, priority: "required", note: "" },
      { moduleId: 5, priority: "required", note: "" }
    );
  } else if (profile.experience === "intermediate") {
    path.push(
      { moduleId: 1, priority: "review", note: "Quick review" },
      { moduleId: 2, priority: "required", note: "" },
      { moduleId: 3, priority: "required", note: "" },
      { moduleId: 4, priority: "required", note: "" },
      { moduleId: 5, priority: "required", note: "" }
    );
    if (profile.struggles.includes("no-bias")) {
      const m3 = path.find((p) => p.moduleId === 3)!;
      m3.priority = "priority";
      m3.note = "PRIORITY — matches your struggle with daily bias";
    }
    if (profile.struggles.includes("no-structure")) {
      const m4 = path.find((p) => p.moduleId === 4)!;
      m4.priority = "priority";
      m4.note = "PRIORITY — key for real-time identification";
    }
  } else if (profile.experience === "advanced") {
    path.push(
      { moduleId: 1, priority: "optional", note: "Skip if confident" },
      { moduleId: 2, priority: "optional", note: "Skip if confident" },
      { moduleId: 3, priority: "review", note: "Review for gaps" },
      { moduleId: 4, priority: "required", note: "Deep dive" },
      { moduleId: 5, priority: "required", note: "Deep dive" }
    );
  } else {
    path.push(
      { moduleId: 1, priority: "review", note: "Quick review" },
      { moduleId: 2, priority: "review", note: "" },
      {
        moduleId: 3,
        priority: "priority",
        note: "Key for execution discipline",
      },
      { moduleId: 4, priority: "required", note: "" },
      { moduleId: 5, priority: "required", note: "" }
    );
  }

  return path;
}
