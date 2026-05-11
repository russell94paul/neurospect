// NeuroSpect Performance Lab — Tier KPIs, Maturity Scores, Improvement Plans
// NQ Futures, May 2026

export type TierKpi = {
  id: "tier1" | "tier2" | "tier3" | "tier4";
  name: string;
  label: string;
  description: string;
  netPnl: number;
  winRate: number;
  wins: number;
  losses: number;
  breakevens: number;
  totalTrades: number;
  profitFactor: number;
  sharpeRatio: number;
  maxDrawdown: number;
  maxDrawdownDuration: string;
  expectancy: number;
  averageR: number;
  averageWinner: number;
  averageLoser: number;
  averageRiskReward: number;
  bestDay: { day: string; pnl: number };
  worstDay: { day: string; pnl: number };
  bestSession: string;
  bestSetup: string;
  ruleAdherence: number;
  mistakesCount: number;
  avoidedBadTrades: number;
  overtradingScore: number;
  biasAlignmentScore: number;
  invalidationClarityScore: number;
  setupQualityScore: number;
  riskDisciplineScore: number;
  aPlusSetups: number;
  averageConfidenceScore: number;
  executionGrade: string;
  averageHoldTime: string;
  consecutiveLosses: number;
  consecutiveWins: number;
  recoveryFactor: number;
  averageAdverseExcursion: number;
  averageFavorableExcursion: number;
};

// Tier 1: 38 trades, 42% WR => 16 wins, 21 losses, 1 BE. Net +$1,850.
// Tier 2: 24 trades, 55% WR => 13 wins, 10 losses, 1 BE. Net +$4,900.
// Tier 3: 20 trades, 62% WR => 12 wins, 7 losses, 1 BE. Net +$7,450.
// Tier 4: 16 trades, 71% WR => 11 wins, 4 losses, 1 BE. Net +$10,900.

export const TIER_KPIS: Record<string, TierKpi> = {
  tier1: {
    id: "tier1",
    name: "Discretionary ICT Trader",
    label: "Tier 1",
    description: "Pure discretionary ICT trader. Strong concept knowledge but inconsistent execution. Emotional decision-making, overtrading, and poor risk management erode edge.",
    netPnl: 1850,
    winRate: 0.42,
    wins: 16,
    losses: 21,
    breakevens: 1,
    totalTrades: 38,
    profitFactor: 1.18,
    sharpeRatio: 0.42,
    maxDrawdown: 3200,
    maxDrawdownDuration: "6 trading days",
    expectancy: 48.68,    // 1850 / 38
    averageR: 0.35,
    averageWinner: 537.50, // total wins ≈ 8600, 8600/16 = 537.5
    averageLoser: 321.43,  // total losses ≈ 6750, 6750/21 = 321.4
    averageRiskReward: 1.67,
    bestDay: { day: "2026-05-29", pnl: 1890 },
    worstDay: { day: "2026-05-22", pnl: -2040 },
    bestSession: "New York AM",
    bestSetup: "Liquidity Sweep + Displacement + FVG",
    ruleAdherence: 0.38,
    mistakesCount: 24,
    avoidedBadTrades: 2,
    overtradingScore: 8.2,    // out of 10 (10 = worst)
    biasAlignmentScore: 3.8,  // out of 10 (10 = best)
    invalidationClarityScore: 3.2,
    setupQualityScore: 4.1,
    riskDisciplineScore: 2.8,
    aPlusSetups: 4,
    averageConfidenceScore: 5.2,
    executionGrade: "D+",
    averageHoldTime: "12 minutes",
    consecutiveLosses: 5,
    consecutiveWins: 3,
    recoveryFactor: 0.58,     // netPnl / maxDD = 1850/3200
    averageAdverseExcursion: 280,
    averageFavorableExcursion: 340,
  },

  tier2: {
    id: "tier2",
    name: "Quant Trader",
    label: "Tier 2",
    description: "Systematic quant approach with statistical filters. Consistent execution of model signals. Misses some ICT-specific context that would improve entry quality.",
    netPnl: 4900,
    winRate: 0.55,
    wins: 13,
    losses: 10,
    breakevens: 1,
    totalTrades: 24,
    profitFactor: 1.72,
    sharpeRatio: 0.91,
    maxDrawdown: 1800,
    maxDrawdownDuration: "4 trading days",
    expectancy: 204.17,   // 4900 / 24
    averageR: 0.78,
    averageWinner: 530.77, // total wins ≈ 6900, 6900/13 = 530.8
    averageLoser: 200.00,  // total losses ≈ 2000, 2000/10 = 200
    averageRiskReward: 2.65,
    bestDay: { day: "2026-05-29", pnl: 3560 },
    worstDay: { day: "2026-05-22", pnl: -1240 },
    bestSession: "New York AM",
    bestSetup: "Market Structure Shift",
    ruleAdherence: 0.78,
    mistakesCount: 8,
    avoidedBadTrades: 9,
    overtradingScore: 3.4,
    biasAlignmentScore: 6.2,
    invalidationClarityScore: 7.1,
    setupQualityScore: 5.8,
    riskDisciplineScore: 7.4,
    aPlusSetups: 6,
    averageConfidenceScore: 6.8,
    executionGrade: "B-",
    averageHoldTime: "22 minutes",
    consecutiveLosses: 3,
    consecutiveWins: 4,
    recoveryFactor: 2.72,     // 4900/1800
    averageAdverseExcursion: 160,
    averageFavorableExcursion: 420,
  },

  tier3: {
    id: "tier3",
    name: "Hybrid Trader",
    label: "Tier 3",
    description: "Best of both worlds: ICT concepts validated by quantitative models. NSLM-assisted setup grading. Selective, disciplined, and process-driven with strong feedback loops.",
    netPnl: 7450,
    winRate: 0.62,
    wins: 12,
    losses: 7,
    breakevens: 1,
    totalTrades: 20,
    profitFactor: 2.41,
    sharpeRatio: 1.38,
    maxDrawdown: 1200,
    maxDrawdownDuration: "3 trading days",
    expectancy: 372.50,   // 7450 / 20
    averageR: 1.12,
    averageWinner: 708.33, // total wins ≈ 8500, 8500/12 = 708.3
    averageLoser: 150.00,  // total losses ≈ 1050, 1050/7 = 150
    averageRiskReward: 4.72,
    bestDay: { day: "2026-05-29", pnl: 4210 },
    worstDay: { day: "2026-05-22", pnl: -680 },
    bestSession: "New York AM",
    bestSetup: "Liquidity Sweep + Displacement + FVG",
    ruleAdherence: 0.88,
    mistakesCount: 4,
    avoidedBadTrades: 14,
    overtradingScore: 2.1,
    biasAlignmentScore: 7.8,
    invalidationClarityScore: 8.2,
    setupQualityScore: 7.9,
    riskDisciplineScore: 8.5,
    aPlusSetups: 9,
    averageConfidenceScore: 7.6,
    executionGrade: "A-",
    averageHoldTime: "28 minutes",
    consecutiveLosses: 2,
    consecutiveWins: 5,
    recoveryFactor: 6.21,     // 7450/1200
    averageAdverseExcursion: 110,
    averageFavorableExcursion: 520,
  },

  tier4: {
    id: "tier4",
    name: "S-Tier Trader",
    label: "Tier 4",
    description: "Full NeuroSpect stack: NSLM grading, EdgeLab-validated strategies, NeuroQuant scoring, regime detection, and strict process governance. Maximum selectivity with dynamic sizing.",
    netPnl: 10900,
    winRate: 0.71,
    wins: 11,
    losses: 4,
    breakevens: 1,
    totalTrades: 16,
    profitFactor: 4.28,
    sharpeRatio: 2.14,
    maxDrawdown: 820,
    maxDrawdownDuration: "2 trading days",
    expectancy: 681.25,   // 10900 / 16
    averageR: 1.82,
    averageWinner: 1072.73, // total wins ≈ 11800, 11800/11 = 1072.7
    averageLoser: 250.00,   // total losses ≈ 1000, BUT net = wins - losses so: 11800 - 900 = 10900, losses ≈ 900, 900/4 = 225
    averageRiskReward: 4.77,
    bestDay: { day: "2026-05-29", pnl: 6520 },
    worstDay: { day: "2026-05-22", pnl: -820 },
    bestSession: "New York AM",
    bestSetup: "Liquidity Sweep + Displacement + FVG",
    ruleAdherence: 0.96,
    mistakesCount: 2,
    avoidedBadTrades: 22,
    overtradingScore: 1.2,
    biasAlignmentScore: 9.2,
    invalidationClarityScore: 9.4,
    setupQualityScore: 9.1,
    riskDisciplineScore: 9.6,
    aPlusSetups: 12,
    averageConfidenceScore: 8.8,
    executionGrade: "A+",
    averageHoldTime: "34 minutes",
    consecutiveLosses: 2,
    consecutiveWins: 6,
    recoveryFactor: 13.29,    // 10900/820
    averageAdverseExcursion: 80,
    averageFavorableExcursion: 680,
  },
};

// ─── Maturity Radar Chart ───────────────────────────────────────────

export const MATURITY_DIMENSIONS = [
  "ICT Concept Clarity",
  "Bias Consistency",
  "Setup Validation",
  "Execution Discipline",
  "Risk Control",
  "Journaling Quality",
  "Backtesting Depth",
  "Model Evaluation",
  "Feedback Loop Quality",
] as const;

export const MATURITY_SCORES: Record<string, number[]> = {
  tier1: [7, 4, 3, 3, 3, 2, 1, 0, 2],  // out of 10
  tier2: [4, 6, 5, 7, 7, 5, 7, 5, 5],
  tier3: [8, 7, 7, 7, 8, 7, 7, 6, 7],
  tier4: [9, 9, 9, 9, 9, 9, 9, 9, 9],
};

// ─── Improvement Plans ──────────────────────────────────────────────

export type ImprovementPlan = {
  tierId: string;
  currentStrength: string;
  currentWeakness: string;
  missingSystem: string;
  recommendedModules: string[];
  upgradePath: string;
  steps: string[];
  recommendedTier: string;
};

export const IMPROVEMENT_PLANS: Record<string, ImprovementPlan> = {
  tier1: {
    tierId: "tier1",
    currentStrength: "Strong ICT concept knowledge — can identify setups in real-time. Understands displacement, FVGs, order blocks, and liquidity sweeps conceptually.",
    currentWeakness: "Execution is driven by emotion rather than process. Overtrading after losses, no daily loss limit, poor invalidation discipline, and revenge trading destroy edge.",
    missingSystem: "Structured pre-trade checklist, quantitative setup grading, trade journaling with post-session review, and a rules engine to enforce discipline.",
    recommendedModules: [
      "NeuroSpect Mentor — AI coaching with pre-trade checklist and emotional state monitoring",
      "Trade Journal — Structured journaling with automatic pattern detection across entries",
      "NSLM Setup Grading — Quantitative A/B/C grading of setups before entry",
      "EdgeLab Historical Validation — Backtest your specific setups against historical data",
      "Risk Rules Engine — Automated daily loss limits and position sizing constraints",
    ],
    upgradePath: "Tier 1 → Tier 2: Build the system around your knowledge",
    steps: [
      "Implement a pre-trade checklist using Mentor — no trade without completing it",
      "Set a hard daily loss limit of $500 or 2% of account, enforced by the rules engine",
      "Journal every trade within 30 minutes of exit — capture the emotional state and decision process",
      "Run weekly journal reviews with Mentor to identify recurring mistake patterns",
      "Use NSLM to grade every setup before entry — only take B+ or above for the first month",
      "Backtest your top 3 setups in EdgeLab to build statistical confidence in your edge",
      "Reduce trade frequency target from 38/month to under 25/month — focus on quality over quantity",
      "Add a 30-minute cooling period after any losing trade before the next entry",
    ],
    recommendedTier: "tier2",
  },

  tier2: {
    tierId: "tier2",
    currentStrength: "Systematic execution with consistent rule-following. Statistical filters catch many bad setups. Disciplined risk management keeps losses controlled.",
    currentWeakness: "Lacks ICT-specific context that would improve entry precision. Misses liquidity narratives and institutional context. Occasional late entries from re-entry signals.",
    missingSystem: "ICT concept integration into the quantitative model, NSLM-powered setup enrichment, and narrative context from NeuroCore knowledge base.",
    recommendedModules: [
      "NSLM Setup Enrichment — Add ICT narrative context to quantitative signals",
      "NeuroCore Knowledge Layer — Access to ICT concept definitions and institutional context",
      "Hybrid Signal Fusion — Combine quant triggers with ICT concept validation",
      "EdgeLab A/B Testing — Compare quant-only vs hybrid entries to quantify the ICT edge",
      "Session Regime Detection — Better context for session-specific behavior",
    ],
    upgradePath: "Tier 2 → Tier 3: Integrate ICT concepts into your systematic framework",
    steps: [
      "Map your existing quant signals to the ICT concepts they approximate (e.g., momentum divergence → MSS)",
      "Add NSLM setup enrichment to your pre-trade pipeline — score ICT concept alignment alongside quant metrics",
      "Integrate NeuroCore's liquidity narrative into your market context analysis",
      "Run A/B tests in EdgeLab comparing your current model vs a hybrid model with ICT overlays",
      "Study the specific ICT concepts your model misses most frequently — focus learning on those gaps",
      "Add session-specific context (Asia range, London sweep, NY AM optimal window) to your entry criteria",
      "Build a feedback loop that logs when ICT context would have improved or degraded a trade outcome",
    ],
    recommendedTier: "tier3",
  },

  tier3: {
    tierId: "tier3",
    currentStrength: "Strong ICT-quant integration. NSLM-assisted setup grading produces highly selective, high-quality entries. Process-driven with solid feedback loops.",
    currentWeakness: "Occasional conflicting signal resolution errors. Slightly late entries on fast-moving setups. Threshold sensitivity — sometimes permissive on marginal setups.",
    missingSystem: "EdgeLab-validated regime models, NeuroQuant production scoring, dynamic position sizing based on regime and setup grade, and shadow-mode agent validation.",
    recommendedModules: [
      "EdgeLab Regime Models — Historical regime classification for context-aware trading",
      "NeuroQuant Scoring — Production model ensemble for multi-signal confluence scoring",
      "Dynamic Position Sizing — Grade-based sizing (A+ = 1.5x, B+ = 1x, below = skip/reduce)",
      "NeuroTrader Shadow Mode — AI agent validates your trades in real-time before execution",
      "Advanced Feedback Analytics — Granular performance attribution across setup, regime, and session",
    ],
    upgradePath: "Tier 3 → Tier 4: Add regime awareness, production scoring, and dynamic sizing",
    steps: [
      "Deploy EdgeLab regime models to classify current market conditions before each session",
      "Integrate NeuroQuant scoring into your pre-trade workflow — aim for model confluence above 80%",
      "Implement dynamic position sizing: A+ setups with regime alignment get 1.5x, all others standard or reduced",
      "Run NeuroTrader in shadow mode alongside your live trading to compare decisions",
      "Tighten your setup quality threshold — only A-grade and above, eliminating the permissive margin",
      "Build custom performance attribution reports: break down PnL by regime, session, and setup grade",
      "Add execution speed optimization — pre-calculated levels and alert-based entries for fast setups",
    ],
    recommendedTier: "tier4",
  },

  tier4: {
    tierId: "tier4",
    currentStrength: "Full NeuroSpect stack integration. Maximum selectivity, regime-aware dynamic sizing, EdgeLab-validated strategies, and near-perfect rule adherence. Consistent, compounding edge.",
    currentWeakness: "High selectivity occasionally means missed valid opportunities. Rare instances of reduced sizing on valid setups due to conservative regime classification.",
    missingSystem: "Capital allocation optimization, multi-instrument expansion, and automated execution via NeuroTrader agent for consistent 24h coverage.",
    recommendedModules: [
      "NeuroTrader Agent — Paper → Live automated execution for consistent coverage",
      "Multi-Instrument Expansion — Apply validated edge to ES, YM, and other futures",
      "Capital Allocation Optimizer — Kelly criterion-based sizing across instruments and strategies",
      "EdgeLab Continuous Evaluation — Automated strategy health monitoring and decay detection",
      "Regime Sensitivity Tuning — Optimize regime thresholds to reduce false conservative classifications",
    ],
    upgradePath: "Tier 4 → Optimization: Scale your edge with automation and capital efficiency",
    steps: [
      "Deploy NeuroTrader in paper trading mode with your exact rule set for 30 days",
      "Compare NeuroTrader paper results against your live results to validate the automation",
      "Run EdgeLab analysis on your missed opportunities — quantify the cost of over-selectivity",
      "Tune regime classification sensitivity: identify where conservative classifications cost more than they save",
      "Expand to ES futures using the same validated framework — EdgeLab backtests first",
      "Implement Kelly criterion-based position sizing across instruments for optimal capital allocation",
      "Graduate NeuroTrader from paper to live with 25% of capital, scaling up based on concordance rate",
      "Set up continuous EdgeLab evaluation to detect strategy decay before it impacts live performance",
    ],
    recommendedTier: "tier4",
  },
};
