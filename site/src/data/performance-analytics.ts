// NeuroSpect Performance Lab — Performance Analytics Breakdowns
// NQ Futures, May 2026, 4 trader tiers

// ─── Day of Week Performance ────────────────────────────────────────

export type DayStats = {
  day: string;
  pnl: number;
  winRate: number;
  trades: number;
};

// T1: 38 trades across 20 trading days. Best day: Tuesday.
// T2: 24 trades across 20 trading days. Best day: Wednesday.
// T3: 20 trades across 20 trading days. Best day: Tuesday.
// T4: 16 trades across 20 trading days. Best day: Thursday.

export const DAY_OF_WEEK: Record<string, DayStats[]> = {
  tier1: [
    { day: "Monday", pnl: -120,  winRate: 0.38, trades: 8 },
    { day: "Tuesday", pnl: 680,  winRate: 0.50, trades: 8 },
    { day: "Wednesday", pnl: -340, winRate: 0.33, trades: 9 },
    { day: "Thursday", pnl: 310,  winRate: 0.43, trades: 7 },
    { day: "Friday", pnl: 1320, winRate: 0.50, trades: 6 },
  ],
  tier2: [
    { day: "Monday", pnl: 420,  winRate: 0.50, trades: 4 },
    { day: "Tuesday", pnl: 540,  winRate: 0.60, trades: 5 },
    { day: "Wednesday", pnl: 1280, winRate: 0.67, trades: 6 },
    { day: "Thursday", pnl: 860,  winRate: 0.50, trades: 4 },
    { day: "Friday", pnl: 1800, winRate: 0.60, trades: 5 },
  ],
  tier3: [
    { day: "Monday", pnl: 640,  winRate: 0.60, trades: 5 },
    { day: "Tuesday", pnl: 1480, winRate: 0.75, trades: 4 },
    { day: "Wednesday", pnl: 980,  winRate: 0.67, trades: 3 },
    { day: "Thursday", pnl: 1240, winRate: 0.67, trades: 3 },
    { day: "Friday", pnl: 3110, winRate: 0.60, trades: 5 },
  ],
  tier4: [
    { day: "Monday", pnl: 560,  winRate: 0.67, trades: 3 },
    { day: "Tuesday", pnl: 1080, winRate: 0.67, trades: 3 },
    { day: "Wednesday", pnl: 980,  winRate: 1.00, trades: 2 },
    { day: "Thursday", pnl: 1760, winRate: 0.75, trades: 4 },
    { day: "Friday", pnl: 6520, winRate: 0.75, trades: 4 },
  ],
};

// ─── Session Performance ────────────────────────────────────────────

export type SessionStats = {
  session: string;
  pnl: number;
  winRate: number;
  trades: number;
  bestSetup: string;
  avoidedTrades: number;
  mistakeFrequency: number; // mistakes per trade, 0-1 scale
};

export const SESSION_DATA: Record<string, SessionStats[]> = {
  tier1: [
    {
      session: "Asia",
      pnl: -180,
      winRate: 0.25,
      trades: 4,
      bestSetup: "Session Range Expansion",
      avoidedTrades: 0,
      mistakeFrequency: 0.75,
    },
    {
      session: "London",
      pnl: 460,
      winRate: 0.43,
      trades: 7,
      bestSetup: "Liquidity Sweep + Displacement + FVG",
      avoidedTrades: 1,
      mistakeFrequency: 0.57,
    },
    {
      session: "New York AM",
      pnl: 1240,
      winRate: 0.47,
      trades: 15,
      bestSetup: "HTF Bias + LTF Entry",
      avoidedTrades: 1,
      mistakeFrequency: 0.60,
    },
    {
      session: "New York Lunch",
      pnl: -420,
      winRate: 0.29,
      trades: 7,
      bestSetup: "Order Block Continuation",
      avoidedTrades: 0,
      mistakeFrequency: 0.86,
    },
    {
      session: "New York PM",
      pnl: 750,
      winRate: 0.40,
      trades: 5,
      bestSetup: "Breaker Retest",
      avoidedTrades: 0,
      mistakeFrequency: 0.60,
    },
  ],

  tier2: [
    {
      session: "Asia",
      pnl: 240,
      winRate: 0.50,
      trades: 2,
      bestSetup: "Session Range Expansion",
      avoidedTrades: 3,
      mistakeFrequency: 0.00,
    },
    {
      session: "London",
      pnl: 680,
      winRate: 0.60,
      trades: 5,
      bestSetup: "Liquidity Sweep + Displacement + FVG",
      avoidedTrades: 2,
      mistakeFrequency: 0.20,
    },
    {
      session: "New York AM",
      pnl: 2840,
      winRate: 0.58,
      trades: 12,
      bestSetup: "Market Structure Shift",
      avoidedTrades: 3,
      mistakeFrequency: 0.25,
    },
    {
      session: "New York Lunch",
      pnl: -160,
      winRate: 0.33,
      trades: 3,
      bestSetup: "Order Block Continuation",
      avoidedTrades: 4,
      mistakeFrequency: 0.33,
    },
    {
      session: "New York PM",
      pnl: 1300,
      winRate: 0.50,
      trades: 2,
      bestSetup: "Breaker Retest",
      avoidedTrades: 2,
      mistakeFrequency: 0.00,
    },
  ],

  tier3: [
    {
      session: "Asia",
      pnl: 380,
      winRate: 1.00,
      trades: 1,
      bestSetup: "Session Range Expansion",
      avoidedTrades: 4,
      mistakeFrequency: 0.00,
    },
    {
      session: "London",
      pnl: 960,
      winRate: 0.67,
      trades: 3,
      bestSetup: "Liquidity Sweep + Displacement + FVG",
      avoidedTrades: 3,
      mistakeFrequency: 0.00,
    },
    {
      session: "New York AM",
      pnl: 4480,
      winRate: 0.64,
      trades: 11,
      bestSetup: "HTF Bias + LTF Entry",
      avoidedTrades: 5,
      mistakeFrequency: 0.18,
    },
    {
      session: "New York Lunch",
      pnl: 150,
      winRate: 0.50,
      trades: 2,
      bestSetup: "Order Block Continuation",
      avoidedTrades: 6,
      mistakeFrequency: 0.00,
    },
    {
      session: "New York PM",
      pnl: 1480,
      winRate: 0.67,
      trades: 3,
      bestSetup: "Breaker Retest",
      avoidedTrades: 3,
      mistakeFrequency: 0.33,
    },
  ],

  tier4: [
    {
      session: "Asia",
      pnl: 480,
      winRate: 1.00,
      trades: 1,
      bestSetup: "Session Range Expansion",
      avoidedTrades: 5,
      mistakeFrequency: 0.00,
    },
    {
      session: "London",
      pnl: 560,
      winRate: 1.00,
      trades: 1,
      bestSetup: "Liquidity Sweep + Displacement + FVG",
      avoidedTrades: 4,
      mistakeFrequency: 0.00,
    },
    {
      session: "New York AM",
      pnl: 7680,
      winRate: 0.73,
      trades: 11,
      bestSetup: "HTF Bias + LTF Entry",
      avoidedTrades: 8,
      mistakeFrequency: 0.09,
    },
    {
      session: "New York Lunch",
      pnl: 0,
      winRate: 0.00,
      trades: 0,
      bestSetup: "N/A",
      avoidedTrades: 8,
      mistakeFrequency: 0.00,
    },
    {
      session: "New York PM",
      pnl: 2180,
      winRate: 0.67,
      trades: 3,
      bestSetup: "Breaker Retest",
      avoidedTrades: 4,
      mistakeFrequency: 0.00,
    },
  ],
};

// ─── Mistake Tracking ───────────────────────────────────────────────

export type Mistake = {
  name: string;
  count: number;
  severity: "high" | "medium" | "low";
};

export const MISTAKES: Record<string, Mistake[]> = {
  tier1: [
    { name: "Early entry before confirmation", count: 6, severity: "high" },
    { name: "Ignored invalidation signal", count: 5, severity: "high" },
    { name: "Traded outside model / setup", count: 4, severity: "high" },
    { name: "Overtraded after loss", count: 3, severity: "high" },
    { name: "No historical validation", count: 2, severity: "medium" },
    { name: "Weak journal review", count: 2, severity: "medium" },
    { name: "Chased displacement", count: 1, severity: "medium" },
    { name: "Low-quality session entry", count: 1, severity: "low" },
  ],

  tier2: [
    { name: "Missed ICT context on entry", count: 3, severity: "medium" },
    { name: "Overfit filter rejected valid setup", count: 2, severity: "medium" },
    { name: "Ignored liquidity narrative", count: 2, severity: "medium" },
    { name: "Low-context signal entry", count: 1, severity: "low" },
  ],

  tier3: [
    { name: "Conflicting signal resolution error", count: 2, severity: "medium" },
    { name: "Slightly late entry on fast move", count: 1, severity: "low" },
    { name: "Permissive threshold on marginal setup", count: 1, severity: "low" },
  ],

  tier4: [
    { name: "Missed valid opportunity from over-selectivity", count: 1, severity: "low" },
    { name: "Reduced size on valid setup (conservative regime flag)", count: 1, severity: "low" },
  ],
};

// ─── Setup Performance ──────────────────────────────────────────────

export type SetupStats = {
  setup: string;
  trades: number;
  winRate: number;
  avgR: number;
  expectancy: number;
};

export const SETUP_PERFORMANCE: Record<string, SetupStats[]> = {
  tier1: [
    { setup: "Liquidity Sweep + Displacement + FVG", trades: 8, winRate: 0.50, avgR: 0.60, expectancy: 95 },
    { setup: "Market Structure Shift", trades: 7, winRate: 0.29, avgR: -0.40, expectancy: -120 },
    { setup: "HTF Bias + LTF Entry", trades: 6, winRate: 0.50, avgR: 0.45, expectancy: 82 },
    { setup: "Order Block Continuation", trades: 6, winRate: 0.33, avgR: -0.20, expectancy: -65 },
    { setup: "Breaker Retest", trades: 4, winRate: 0.50, avgR: 0.80, expectancy: 180 },
    { setup: "Session Range Expansion", trades: 4, winRate: 0.25, avgR: -0.30, expectancy: -85 },
    { setup: "Failed FVG Continuation", trades: 3, winRate: 0.33, avgR: -0.50, expectancy: -140 },
  ],

  tier2: [
    { setup: "Liquidity Sweep + Displacement + FVG", trades: 5, winRate: 0.60, avgR: 0.90, expectancy: 220 },
    { setup: "Market Structure Shift", trades: 5, winRate: 0.60, avgR: 0.70, expectancy: 180 },
    { setup: "HTF Bias + LTF Entry", trades: 4, winRate: 0.50, avgR: 0.60, expectancy: 140 },
    { setup: "Order Block Continuation", trades: 3, winRate: 0.67, avgR: 0.80, expectancy: 200 },
    { setup: "Breaker Retest", trades: 3, winRate: 0.67, avgR: 0.90, expectancy: 240 },
    { setup: "Session Range Expansion", trades: 2, winRate: 0.50, avgR: 0.40, expectancy: 80 },
    { setup: "Failed FVG Continuation", trades: 2, winRate: 0.50, avgR: 0.20, expectancy: 40 },
  ],

  tier3: [
    { setup: "Liquidity Sweep + Displacement + FVG", trades: 5, winRate: 0.80, avgR: 1.40, expectancy: 380 },
    { setup: "Market Structure Shift", trades: 3, winRate: 0.67, avgR: 0.90, expectancy: 240 },
    { setup: "HTF Bias + LTF Entry", trades: 4, winRate: 0.75, avgR: 1.30, expectancy: 350 },
    { setup: "Order Block Continuation", trades: 3, winRate: 0.67, avgR: 1.10, expectancy: 280 },
    { setup: "Breaker Retest", trades: 2, winRate: 0.50, avgR: 0.80, expectancy: 180 },
    { setup: "Session Range Expansion", trades: 2, winRate: 0.50, avgR: 0.60, expectancy: 120 },
    { setup: "Failed FVG Continuation", trades: 1, winRate: 0.00, avgR: -1.00, expectancy: -200 },
  ],

  tier4: [
    { setup: "Liquidity Sweep + Displacement + FVG", trades: 4, winRate: 1.00, avgR: 2.20, expectancy: 620 },
    { setup: "Market Structure Shift", trades: 2, winRate: 0.50, avgR: 0.80, expectancy: 180 },
    { setup: "HTF Bias + LTF Entry", trades: 4, winRate: 0.75, avgR: 1.60, expectancy: 480 },
    { setup: "Order Block Continuation", trades: 2, winRate: 1.00, avgR: 2.00, expectancy: 540 },
    { setup: "Breaker Retest", trades: 2, winRate: 1.00, avgR: 2.40, expectancy: 600 },
    { setup: "Session Range Expansion", trades: 1, winRate: 1.00, avgR: 2.40, expectancy: 480 },
    { setup: "Failed FVG Continuation", trades: 1, winRate: 0.00, avgR: -1.00, expectancy: -200 },
  ],
};

// ─── Risk Metrics ───────────────────────────────────────────────────

export type RiskMetrics = {
  maxDrawdown: number;
  maxDrawdownDuration: string;
  rollingWinRate: number[];      // 5-period rolling win rates across the month
  rollingProfitFactor: number[]; // 5-period rolling profit factors
  consistencyScore: number;      // 0-100
  volatilityOfReturns: number;   // std dev of daily PnL
  recoveryFactor: number;
  largestLoss: number;
  largestWin: number;
  consecutiveLosses: number;
  calmarRatio: number;
};

export const RISK_DATA: Record<string, RiskMetrics> = {
  tier1: {
    maxDrawdown: 3200,
    maxDrawdownDuration: "6 trading days",
    rollingWinRate: [0.40, 0.33, 0.38, 0.30, 0.42, 0.36, 0.50, 0.44],
    rollingProfitFactor: [1.10, 0.85, 0.92, 0.78, 1.05, 0.88, 1.30, 1.25],
    consistencyScore: 28,
    volatilityOfReturns: 680,
    recoveryFactor: 0.58,
    largestLoss: 800,
    largestWin: 1100,
    consecutiveLosses: 5,
    calmarRatio: 0.58,
  },

  tier2: {
    maxDrawdown: 1800,
    maxDrawdownDuration: "4 trading days",
    rollingWinRate: [0.50, 0.55, 0.52, 0.48, 0.55, 0.58, 0.60, 0.55],
    rollingProfitFactor: [1.50, 1.65, 1.55, 1.40, 1.70, 1.80, 1.90, 1.75],
    consistencyScore: 58,
    volatilityOfReturns: 420,
    recoveryFactor: 2.72,
    largestLoss: 640,
    largestWin: 1860,
    consecutiveLosses: 3,
    calmarRatio: 2.72,
  },

  tier3: {
    maxDrawdown: 1200,
    maxDrawdownDuration: "3 trading days",
    rollingWinRate: [0.60, 0.58, 0.62, 0.65, 0.60, 0.64, 0.68, 0.62],
    rollingProfitFactor: [2.20, 2.10, 2.35, 2.50, 2.30, 2.45, 2.60, 2.40],
    consistencyScore: 76,
    volatilityOfReturns: 310,
    recoveryFactor: 6.21,
    largestLoss: 680,
    largestWin: 2200,
    consecutiveLosses: 2,
    calmarRatio: 6.21,
  },

  tier4: {
    maxDrawdown: 820,
    maxDrawdownDuration: "2 trading days",
    rollingWinRate: [0.70, 0.68, 0.72, 0.74, 0.70, 0.72, 0.75, 0.71],
    rollingProfitFactor: [3.80, 3.60, 4.10, 4.40, 4.00, 4.20, 4.50, 4.30],
    consistencyScore: 91,
    volatilityOfReturns: 220,
    recoveryFactor: 13.29,
    largestLoss: 820,
    largestWin: 3400,
    consecutiveLosses: 2,
    calmarRatio: 13.29,
  },
};
