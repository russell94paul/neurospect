export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  lessonRef: string;
}

export interface ScenarioQuestion {
  id: string;
  context: string;
  question: string;
  options: { text: string; grade: "A+" | "B" | "C" | "F"; explanation: string }[];
  correctIndex: number;
  lessonRef: string;
}

export interface MatchingPair {
  term: string;
  definition: string;
}

export interface SequencingQuestion {
  id: string;
  instruction: string;
  items: string[];
  correctOrder: number[];
  explanation: string;
}

export interface EngagementData {
  matching: { id: string; instruction: string; pairs: MatchingPair[] }[];
  sequencing: SequencingQuestion[];
}

export const module1Quiz: QuizQuestion[] = [
  {
    id: "m1q1",
    question: "According to ICT, what two things make the market move?",
    options: [
      "Supply and demand",
      "Liquidity and inefficiency",
      "Buyers and sellers",
      "Support and resistance",
    ],
    correctIndex: 1,
    explanation:
      "Every price move travels from liquidity to inefficiency or from inefficiency to liquidity. When doing neither, it consolidates — engineering more liquidity.",
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1q2",
    question: "Where does Buy-Side Liquidity (BSL) rest?",
    options: [
      "Below swing lows",
      "At the equilibrium of a range",
      "Above swing highs",
      "At the opening price of a session",
    ],
    correctIndex: 2,
    explanation:
      "BSL rests above swing highs because traders who went short after a swing high placed their stop loss above it.",
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1q3",
    question: "How many candles define a swing high or swing low?",
    options: [
      "Two candles",
      "Three candles",
      "Five candles (fractals)",
      "It varies by timeframe",
    ],
    correctIndex: 1,
    explanation:
      "A swing is a three-candle pattern. Swing high: candle 2 is the highest. Swing low: candle 2 is the lowest. ICT refined this from Larry Williams' five-candle fractal.",
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1q4",
    question: "What creates a Fair Value Gap (FVG)?",
    options: [
      "A moving average crossover",
      "A three-candle displacement leaving a price gap between candle 1 and candle 3",
      "A volume spike above the 20-period average",
      "A gap between Friday close and Monday open",
    ],
    correctIndex: 1,
    explanation:
      "An FVG is a three-candle pattern where a displacement candle (candle 2) leaves a gap between candle 1's extreme and candle 3's extreme. This creates an area of price inefficiency.",
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1q5",
    question:
      "True or false: You must wait for price to fully fill the FVG before continuing to the target.",
    options: [
      "True — the gap must be completely filled",
      "False — price only needs to dip into the FVG (mitigation sufficiency)",
    ],
    correctIndex: 1,
    explanation:
      "Mitigation sufficiency means price only needs to tag or dip into the FVG (often to Candle 3's open/close area). A full fill all the way to Candle 1 is not required.",
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1q6",
    question: "What is a BISI?",
    options: [
      "A bearish FVG used for short entries",
      "A break of internal structure",
      "A bullish FVG (Buy Side Imbalance, Sell Side Inefficiency) used for long entries",
      "A buy signal from institutional order flow",
    ],
    correctIndex: 2,
    explanation:
      "BISI = Buy Side Imbalance, Sell Side Inefficiency. It's a bullish FVG — price displaced higher, leaving a gap. Enter at the gap targeting BSL above.",
    lessonRef: "Lesson 1.2 — Fair Value Gaps",
  },
  {
    id: "m1q7",
    question: "What is the IOFED condition?",
    options: [
      "When an FVG forms during a news event",
      "When price creates an FVG, returns to it, but does NOT close below the CE (50%)",
      "When two equal FVGs form at the same level",
      "When the order flow confirms the trade direction",
    ],
    correctIndex: 1,
    explanation:
      "IOFED (Institutional Order Flow Entry Drill): price creates the first FVG of a move, returns to it, but does not close below the CE. This is the highest-probability entry condition.",
    lessonRef: "Lesson 1.2 — Fair Value Gaps",
  },
  {
    id: "m1q8",
    question: "What is a Breakaway Gap (BAG)?",
    options: [
      "An FVG that price returns to and fills completely",
      "An FVG that price never returns to — it skips it entirely",
      "A gap between two trading sessions",
      "An FVG on the weekly timeframe",
    ],
    correctIndex: 1,
    explanation:
      "A BAG is an FVG that price skips entirely and never returns to. It confirms strongly directional movement. Don't wait for a BAG to fill — look for the next FVG.",
    lessonRef: "Lesson 1.2 — Fair Value Gaps",
  },
  {
    id: "m1q9",
    question: "On which timeframes should you identify your Draw on Liquidity (DOL)?",
    options: [
      "1M and 5M",
      "1H and 15M",
      "4H and Daily",
      "Any timeframe works equally",
    ],
    correctIndex: 1,
    explanation:
      "Mark swing highs and lows for the DOL on 1H and 15M. Then find your FVG entry on 5M–1M. This timeframe alignment is critical.",
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1q10",
    question:
      "What happens when price closes above a bearish FVG (SIBI)?",
    options: [
      "The FVG is invalidated — ignore it",
      "The FVG inverts and becomes a bullish support zone",
      "It signals a reversal to bearish bias",
      "Nothing — the FVG remains bearish",
    ],
    correctIndex: 1,
    explanation:
      "A bearish FVG that price closes above inverts into bullish support. When price returns to it, it acts as a bullish entry zone. Respect the 50% of the inverted zone for entries.",
    lessonRef: "Lesson 1.2 — Fair Value Gaps",
  },
];

export const module1Scenarios: ScenarioQuestion[] = [
  {
    id: "m1s1",
    context:
      "NQ — New York AM Session. It's 9:35 AM ET. Price swept the previous day's low during London, then displaced upward through a 1H Fair Value Gap.",
    question: "What do you look for next before entering long?",
    options: [
      {
        text: "Enter immediately — displacement is enough",
        grade: "C",
        explanation:
          "Entering without a pullback risks a poor entry and wide stop. Displacement confirms direction but doesn't give you a precise entry.",
      },
      {
        text: "Wait for pullback into the FVG on LTF",
        grade: "A+",
        explanation:
          "Waiting for a pullback into the FVG on a lower timeframe gives the best entry with clear invalidation (below the FVG).",
      },
      {
        text: "Wait for SMT divergence confirmation",
        grade: "B",
        explanation:
          "SMT confirmation adds confluence but isn't required for this setup. It's a bonus, not a requirement.",
      },
      {
        text: "Skip — no HTF bias was established",
        grade: "F",
        explanation:
          "A daily bias WAS established: sweep of PDL (liquidity taken) + displacement through a 1H FVG = bullish bias formation.",
      },
    ],
    correctIndex: 1,
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
  {
    id: "m1s2",
    context:
      "You identified a BISI (bullish FVG) on the 5M chart. Price is pulling back toward it. The CE (50%) is at 18,450. Candle 3's low is at 18,465.",
    question: "Where do you place your limit order?",
    options: [
      {
        text: "At the CE (18,450)",
        grade: "B",
        explanation:
          "The CE is an acceptable entry but you may miss trades where price only dips to Candle 3's area and runs.",
      },
      {
        text: "At or just below Candle 3's low (18,464)",
        grade: "A+",
        explanation:
          "The best entry is at or below Candle 3's low — the top edge of the gap. One tick below is the most precise entry.",
      },
      {
        text: "Below Candle 1's high (bottom of the gap)",
        grade: "C",
        explanation:
          "This would place your entry at the very bottom of the FVG. While it fills, many valid FVGs only get a partial dip and run.",
      },
      {
        text: "Above Candle 3's low (outside the gap)",
        grade: "F",
        explanation:
          "Entering above the FVG gives no edge. You need price to dip INTO the gap for the algorithmic return to play out.",
      },
    ],
    correctIndex: 1,
    lessonRef: "Lesson 1.2 — Fair Value Gaps",
  },
  {
    id: "m1s3",
    context:
      "You're backtesting the consolidation model. You've found a consolidation range with the EQ at 18,500. You see an FVG at 18,510 (above EQ) and an order block at 18,480 (below EQ).",
    question: "Which PDA do you use for your bullish entry?",
    options: [
      {
        text: "The FVG at 18,510 (above EQ)",
        grade: "F",
        explanation:
          "PDAs for bullish setups must be at or below the EQ (in discount). 18,510 is above the 18,500 EQ — that's premium territory.",
      },
      {
        text: "The order block at 18,480 (below EQ)",
        grade: "A+",
        explanation:
          "Correct. PDAs for bullish setups must be at or below the 50% (EQ). 18,480 is below the 18,500 EQ — that's in discount.",
      },
      {
        text: "Either one — the EQ doesn't matter for entries",
        grade: "F",
        explanation:
          "The EQ matters. MrWitness explicitly requires entries at or below the EQ for bullish setups (in discount zone).",
      },
      {
        text: "Neither — wait for a new PDA to form at the EQ",
        grade: "C",
        explanation:
          "While a PDA at the EQ is valid, you already have one below it. Waiting unnecessarily means potentially missing the setup.",
      },
    ],
    correctIndex: 1,
    lessonRef: "Lesson 1.3 — Homework & Practice",
  },
  {
    id: "m1s4",
    context:
      "Price created a bullish FVG during London. Price returns to the FVG and closes a candle right at the CE (50%). The next candle opens above the CE.",
    question: "Is the IOFED condition met?",
    options: [
      {
        text: "Yes — price returned but did not close below the CE",
        grade: "A+",
        explanation:
          "The IOFED condition is met: price returned to the FVG and did NOT close below the CE. The candle closed at the CE, not below it.",
      },
      {
        text: "No — price needs to close above the FVG entirely",
        grade: "F",
        explanation:
          "IOFED doesn't require closing above the FVG. It requires returning to the FVG without closing below the CE.",
      },
      {
        text: "No — the CE was touched, so the FVG is invalidated",
        grade: "F",
        explanation:
          "Touching the CE doesn't invalidate the FVG. The rule is: price must NOT close BELOW the CE. Touching or closing at it is fine.",
      },
      {
        text: "Maybe — you need to check the next candle first",
        grade: "C",
        explanation:
          "The IOFED condition was already confirmed when price closed at (not below) the CE. No need to wait for confirmation candles.",
      },
    ],
    correctIndex: 0,
    lessonRef: "Lesson 1.2 — Fair Value Gaps",
  },
  {
    id: "m1s5",
    context:
      "You've identified equal lows at 18,300 on the 15M chart. Price is approaching from above. The overall daily bias is bearish.",
    question: "What do you expect to happen at the equal lows?",
    options: [
      {
        text: "Price will bounce — equal lows are strong support",
        grade: "F",
        explanation:
          "Equal lows are NOT support. They're a rejection block — the algorithm engineered those equal lows to collect stops below them.",
      },
      {
        text: "Price will sweep below, take the SSL, then potentially reverse",
        grade: "A+",
        explanation:
          "Equal lows create a liquidity pool. The algorithm targets these stops. A sweep below collects the SSL, and the post-sweep reaction tells you what's next.",
      },
      {
        text: "Price will consolidate at this level",
        grade: "C",
        explanation:
          "While price may consolidate temporarily, equal lows are a magnet — the algorithm will eventually sweep them. Consolidation near them often builds more liquidity.",
      },
      {
        text: "Skip — equal lows are irrelevant to ICT",
        grade: "F",
        explanation:
          "Equal lows are highly relevant — they create rejection blocks and liquidity pools that the algorithm specifically targets.",
      },
    ],
    correctIndex: 1,
    lessonRef: "Lesson 1.1 — What Moves the Market",
  },
];

export const module1Engagement: EngagementData = {
  matching: [
    {
      id: "m1match1",
      instruction: "Match each ICT term to its definition:",
      pairs: [
        { term: "BSL", definition: "Liquidity resting above swing highs" },
        { term: "SSL", definition: "Liquidity resting below swing lows" },
        { term: "FVG", definition: "Three-candle price inefficiency gap" },
        { term: "DOL", definition: "Draw on Liquidity — the daily price magnet" },
        { term: "BISI", definition: "Bullish FVG — buy side imbalance" },
        { term: "SIBI", definition: "Bearish FVG — sell side imbalance" },
      ],
    },
    {
      id: "m1match2",
      instruction: "Match each condition to what it signals:",
      pairs: [
        { term: "IOFED", definition: "Highest-probability FVG entry — price returns but doesn't close below CE" },
        { term: "BAG", definition: "Strongly directional — FVG is skipped entirely" },
        { term: "Inversion FVG", definition: "Bearish FVG that price closes above — now acts as bullish support" },
        { term: "CE", definition: "Consequent Encroachment — 50% midpoint of the FVG" },
      ],
    },
  ],
  sequencing: [
    {
      id: "m1seq1",
      instruction:
        "Put the daily trading cycle in the correct order:",
      items: [
        "Enter at the FVG on LTF (5M-1M)",
        "Identify the HTF DOL (1H/15M swing high or low)",
        "Ride the move to the DOL target",
        "Wait for displacement to create an FVG in the DOL direction",
      ],
      correctOrder: [1, 3, 0, 2],
      explanation:
        "The cycle: (1) Identify HTF DOL → (2) Wait for displacement creating FVG → (3) Enter at the FVG → (4) Ride to the DOL target.",
    },
  ],
};

export const quizDataByModule: Record<string, QuizQuestion[]> = {
  "module-1": module1Quiz,
};

export const scenarioDataByModule: Record<string, ScenarioQuestion[]> = {
  "module-1": module1Scenarios,
};

export const engagementDataByModule: Record<string, EngagementData> = {
  "module-1": module1Engagement,
};
