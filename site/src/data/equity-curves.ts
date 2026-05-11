// NeuroSpect Performance Lab — Equity Curves & Trade Markers
// NQ Futures, May 2026, 4 trader tiers starting at $25,000

export type EquityCurvePoint = {
  date: string;
  equity: number;
};

export type TradeMarker = {
  id: string;
  date: string;
  title: string;
  symbol: "NQ";
  session: "Asia" | "London" | "New York AM" | "New York Lunch" | "New York PM";
  setupType: string;
  marketContext: string;
  tierOutcomes: {
    tier1: { action: "entered" | "skipped"; result: "win" | "loss" | "breakeven" | "no_trade"; pnl: number; explanation: string[]; mistakes?: string[] };
    tier2: { action: "entered" | "skipped"; result: "win" | "loss" | "breakeven" | "no_trade"; pnl: number; explanation: string[] };
    tier3: { action: "entered" | "skipped"; result: "win" | "loss" | "breakeven" | "no_trade"; pnl: number; explanation: string[] };
    tier4: { action: "entered" | "skipped"; result: "win" | "loss" | "breakeven" | "no_trade"; pnl: number; explanation: string[] };
  };
  tier1Solution: string[];
};

// May 2026 trading days (Mon-Fri, excluding weekends)
// May 1 Fri, May 4 Mon ... May 29 Fri
// Full list: 1,4,5,6,7,8,11,12,13,14,15,18,19,20,21,22,25,26,27,28,29
// May 25 is Memorial Day (US holiday) — excluded
const TRADING_DAYS = [
  "2026-05-01",
  "2026-05-04", "2026-05-05", "2026-05-06", "2026-05-07", "2026-05-08",
  "2026-05-11", "2026-05-12", "2026-05-13", "2026-05-14", "2026-05-15",
  "2026-05-18", "2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22",
  "2026-05-26", "2026-05-27", "2026-05-28", "2026-05-29",
] as const;

// ─── Tier 1: Discretionary ICT Trader ───────────────────────────────
// 38 trades, 42% win rate (16 wins, 21 losses, 1 BE), net +$1,850
// Erratic curve, max DD -$3,200 from peak
const TIER1_EQUITY: number[] = [
  25000,   // May 01 — no trade
  25380,   // May 04 — win +380
  25120,   // May 05 — loss -260
  24640,   // May 06 — 2 losses (-280, -200)
  25340,   // May 07 — big win +700
  24780,   // May 08 — 2 losses (-310, -250)
  24340,   // May 11 — loss -440
  24020,   // May 12 — 2 losses (-180, -140) — trough, DD from 25340 peak = -1320
  24680,   // May 13 — 2 wins (+360, +300)
  24260,   // May 14 — 2 losses (-240, -180)
  25060,   // May 15 — big win +800
  24520,   // May 18 — 2 losses (-310, -230)
  23840,   // May 19 — 2 losses (-380, -300) — worst trough
  24620,   // May 20 — 2 wins (+480, +300)
  24180,   // May 21 — loss -440
  22140,   // May 22 — 3 losses (-680, -560, -800) — max DD from 25340 = -3200
  22820,   // May 26 — win +680
  23540,   // May 27 — 2 wins (+420, +300)
  24960,   // May 28 — 2 wins (+820, +600)
  26850,   // May 29 — 2 big wins (+1100, +790) — recovery rally
];

// ─── Tier 2: Quant Trader ───────────────────────────────────────────
// 24 trades, 55% win rate (13 wins, 10 losses, 1 BE), net +$4,900
// Steadier, max DD -$1,800
const TIER2_EQUITY: number[] = [
  25000,   // May 01 — no trade
  25320,   // May 04 — win +320
  25540,   // May 05 — win +220
  25260,   // May 06 — loss -280
  25640,   // May 07 — win +380
  25380,   // May 08 — loss -260
  25620,   // May 11 — win +240
  25340,   // May 12 — loss -280
  25700,   // May 13 — win +360
  25420,   // May 14 — loss -280
  25880,   // May 15 — win +460
  25560,   // May 18 — loss -320
  25100,   // May 19 — 2 losses (-260, -200)
  25520,   // May 20 — win +420
  25320,   // May 21 — loss -200
  24080,   // May 22 — 2 losses (-640, -600) — max DD from 25880 = -1800
  24640,   // May 26 — win +560
  25280,   // May 27 — win +640
  26340,   // May 28 — 2 wins (+540, +520)
  29900,   // May 29 — 2 big wins (+1860, +1700) — strong close
];

// ─── Tier 3: Hybrid Trader ──────────────────────────────────────────
// 20 trades, 62% win rate (12 wins, 7 losses, 1 BE), net +$7,450
// Smooth upward, max DD -$1,200
const TIER3_EQUITY: number[] = [
  25000,   // May 01 — no trade
  25480,   // May 04 — win +480
  25480,   // May 05 — no trade
  25780,   // May 06 — win +300
  26200,   // May 07 — win +420
  25960,   // May 08 — loss -240
  26340,   // May 09 mapped to 11 — win +380
  26140,   // May 12 — loss -200
  26620,   // May 13 — win +480
  26620,   // May 14 — BE +0
  27100,   // May 15 — win +480
  26780,   // May 18 — loss -320
  26380,   // May 19 — loss -400 — DD from 27100 = -720
  26860,   // May 20 — win +480
  26580,   // May 21 — loss -280
  25900,   // May 22 — loss -680 — DD from 27100 = -1200
  26480,   // May 26 — win +580
  27060,   // May 27 — win +580
  28240,   // May 28 — 2 wins (+640, +540)
  32450,   // May 29 — 2 big wins (+2200, +2010) — strong close
];

// ─── Tier 4: S-Tier Trader ──────────────────────────────────────────
// 16 trades, 71% win rate (11 wins, 4 losses, 1 BE), net +$10,900
// Smoothest curve, max DD -$800
const TIER4_EQUITY: number[] = [
  25000,   // May 01 — no trade
  25560,   // May 04 — win +560
  25560,   // May 05 — no trade
  25560,   // May 06 — no trade
  26080,   // May 07 — win +520
  26080,   // May 08 — no trade
  26560,   // May 11 — win +480
  26560,   // May 12 — no trade
  27100,   // May 13 — win +540
  26780,   // May 14 — loss -320
  27380,   // May 15 — win +600
  27380,   // May 18 — no trade
  26840,   // May 19 — loss -540 — DD from 27380 = -540
  27400,   // May 20 — win +560
  27400,   // May 21 — BE +0
  26580,   // May 22 — loss -820 — DD from 27400 = -820 (max DD ~$800)
  27180,   // May 26 — win +600
  27880,   // May 27 — win +700
  29380,   // May 28 — 2 wins (+800, +700)
  35900,   // May 29 — 2 big wins (+3400, +3120) — strong close
];

function buildCurve(equities: number[]): EquityCurvePoint[] {
  return TRADING_DAYS.map((date, i) => ({
    date,
    equity: equities[i],
  }));
}

export const EQUITY_CURVES: Record<string, EquityCurvePoint[]> = {
  tier1: buildCurve(TIER1_EQUITY),
  tier2: buildCurve(TIER2_EQUITY),
  tier3: buildCurve(TIER3_EQUITY),
  tier4: buildCurve(TIER4_EQUITY),
};

// ─── Trade Markers ──────────────────────────────────────────────────
// 10 diverse trade events spread across the month

export const TRADE_MARKERS: TradeMarker[] = [
  {
    id: "tm-001",
    date: "2026-05-04",
    title: "NQ Asia Liquidity Sweep into London Open",
    symbol: "NQ",
    session: "London",
    setupType: "Liquidity Sweep + Displacement + FVG",
    marketContext: "Weekly bullish bias. Asia session swept sell-side liquidity below PDL, displacement candle into London open created a clean FVG at 18,420.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "win",
        pnl: 380,
        explanation: ["Caught the displacement entry", "Held through initial retracement", "Exited at first sign of resistance rather than letting it run"],
        mistakes: ["Moved stop to breakeven too early, left 60% of the move on the table"],
      },
      tier2: {
        action: "entered",
        result: "win",
        pnl: 320,
        explanation: ["Quant model flagged sweep confluence", "Entry at FVG midpoint", "Exited at 1.5R target per system rules"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 480,
        explanation: ["NSLM confirmed A+ setup quality", "Entered at FVG discount", "Held to 2R target aligned with HTF draw on liquidity"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 560,
        explanation: ["Full confluence: sweep + displacement + FVG + HTF PD array alignment", "Sized up 1.5x on A+ grade", "Held to 2.5R with partial at 1.5R"],
      },
    },
    tier1Solution: [
      "Use NSLM setup grading before entry to confirm A+ quality",
      "Pre-define target levels using HTF draw on liquidity, not arbitrary resistance",
      "Stop moving stop to breakeven until price reaches 1R in favor",
      "Journal the emotional impulse to lock in profit prematurely",
    ],
  },
  {
    id: "tm-002",
    date: "2026-05-06",
    title: "False MSS on Low Volume — Bull Trap",
    symbol: "NQ",
    session: "New York AM",
    setupType: "Market Structure Shift",
    marketContext: "Apparent bullish MSS at NY open, but on low volume with no displacement. FOMC minutes due at 2pm. Higher timeframe still bearish.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "loss",
        pnl: -280,
        explanation: ["Entered long on the MSS without checking volume or HTF bias", "Stop hit within 15 minutes as price reversed"],
        mistakes: ["Ignored HTF bearish bias", "No volume confirmation", "Traded into upcoming news event"],
      },
      tier2: {
        action: "skipped",
        result: "no_trade",
        pnl: 0,
        explanation: ["Volume filter rejected the setup", "FOMC risk flag triggered a no-trade condition"],
      },
      tier3: {
        action: "skipped",
        result: "no_trade",
        pnl: 0,
        explanation: ["HTF bias conflict detected by NSLM", "Setup quality scored below threshold", "Pre-news window exclusion active"],
      },
      tier4: {
        action: "skipped",
        result: "no_trade",
        pnl: 0,
        explanation: ["HTF bearish context made any long setup invalid", "Volume profile confirmed no institutional participation", "Pre-FOMC — no setups taken within 2h of high-impact news"],
      },
    },
    tier1Solution: [
      "Always check HTF bias alignment before taking LTF entries",
      "Use Mentor's pre-trade checklist which includes volume confirmation",
      "Add a news calendar filter — no new positions within 2h of high-impact events",
      "Review this exact pattern in EdgeLab's historical database to see the base rate",
      "Journal the FOMO that drove entry without confirmation",
    ],
  },
  {
    id: "tm-003",
    date: "2026-05-08",
    title: "Order Block Continuation in Trending Session",
    symbol: "NQ",
    session: "New York AM",
    setupType: "Order Block Continuation",
    marketContext: "Strong bearish trend day. Price retraced to a 15m bearish order block at 18,380 with clean displacement below. Sell-side targets at 18,220.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "loss",
        pnl: -310,
        explanation: ["Entered short at the OB but with too tight a stop", "Got stopped out on the retracement wick before price continued lower"],
        mistakes: ["Stop placed inside the OB instead of above it", "Re-entered after stop-out at a worse price, also stopped out"],
      },
      tier2: {
        action: "entered",
        result: "loss",
        pnl: -260,
        explanation: ["Model identified the OB setup", "Entry was correct but sizing was too large for the stop distance", "Exited at -1R per system rules"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 420,
        explanation: ["Entered at OB with stop above the high", "Proper sizing allowed holding through the wick", "Exited at sell-side target for 2R"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 520,
        explanation: ["Full OB confluence with bearish HTF flow", "Stop above OB high + buffer", "Held past initial target as trend continued, trailed stop", "Exited at 2.8R"],
      },
    },
    tier1Solution: [
      "Place stops above the OB high, not inside it — the OB IS the invalidation level",
      "Use Mentor's stop placement guide for order block setups",
      "Never re-enter the same setup after a stop-out without a new signal",
      "Size positions so the stop distance is comfortable — if the stop feels too far, reduce size",
    ],
  },
  {
    id: "tm-004",
    date: "2026-05-11",
    title: "London Session Range Expansion — Clean Bearish Setup",
    symbol: "NQ",
    session: "London",
    setupType: "Session Range Expansion",
    marketContext: "Asia ranged tightly between 18,300-18,340. London open broke below with displacement. FVG formed at 18,290. Weekly draw on liquidity below at 18,180.",
    tierOutcomes: {
      tier1: {
        action: "skipped",
        result: "no_trade",
        pnl: 0,
        explanation: ["Was asleep during London session", "Saw the move after the fact and felt regret"],
        mistakes: ["No London session watchlist or alerts set up"],
      },
      tier2: {
        action: "entered",
        result: "win",
        pnl: 240,
        explanation: ["Automated alert triggered on range expansion", "Entered short at FVG retest", "Exited at 1.2R — conservative target"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 380,
        explanation: ["Pre-planned London session watchlist included this exact scenario", "Entered at FVG with confluence from Asia range break", "Held to weekly draw target for 2R"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 480,
        explanation: ["Pre-session analysis identified the Asia range as a setup zone", "Alert-based entry at optimal price within the FVG", "Held to weekly draw with partials at 1.5R and 2R", "Total capture: 2.4R"],
      },
    },
    tier1Solution: [
      "Set up London session alerts for key levels identified during pre-session analysis",
      "Use Mentor's session planning workflow to prepare watchlists before each session",
      "If you can't trade London live, at least review the session afterward to build pattern recognition",
      "Track missed London setups in your journal — quantify the opportunity cost of skipping this session",
    ],
  },
  {
    id: "tm-005",
    date: "2026-05-13",
    title: "HTF Bias Long with LTF Bullish Entry",
    symbol: "NQ",
    session: "New York AM",
    setupType: "HTF Bias + LTF Entry",
    marketContext: "Daily chart showed bullish structure with unfilled FVG at 18,450. 5m chart showed bullish MSS + FVG at 18,460 aligning with daily level. Premium/discount matrix favored longs.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "win",
        pnl: 360,
        explanation: ["Recognized the HTF+LTF alignment", "Entered at the 5m FVG", "Exited at 1.5R when price stalled at a minor level"],
        mistakes: ["Had the right idea but undersized due to previous losses shaking confidence"],
      },
      tier2: {
        action: "entered",
        result: "win",
        pnl: 360,
        explanation: ["Multi-timeframe confluence scored high", "Entered at FVG with standard size", "Exited at 1.8R per trailing stop rules"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 480,
        explanation: ["NSLM graded this A+ on HTF-LTF alignment", "Full-size entry at daily FVG", "Held to 2.2R draw on liquidity target"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 540,
        explanation: ["Premium/discount + HTF structure + LTF entry = textbook setup", "1.5x size on A+ confirmation", "Held to 2.5R with partials at 1.5R and 2R"],
      },
    },
    tier1Solution: [
      "Build a systematic sizing model — don't reduce size because of emotional state from prior losses",
      "Use Mentor's confidence scoring to separate setup quality from personal confidence",
      "Review EdgeLab backtests for HTF+LTF alignment setups to build statistical confidence",
      "Add a 'sizing log' to your journal: planned size vs actual size and the reason for any deviation",
    ],
  },
  {
    id: "tm-006",
    date: "2026-05-15",
    title: "Breaker Retest After Trend Reversal",
    symbol: "NQ",
    session: "New York PM",
    setupType: "Breaker Retest",
    marketContext: "Morning bearish trend reversed at NY lunch. Breaker block formed at 18,510 from the failed swing low. PM session retested the breaker with a clean reaction.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "win",
        pnl: 800,
        explanation: ["Caught the breaker retest long", "This was a revenge trade that happened to work — entered because he was down on the day", "Oversized position that got lucky"],
        mistakes: ["Revenge trading motivation", "Position size 2x normal", "No invalidation plan — would have held through a loss"],
      },
      tier2: {
        action: "entered",
        result: "win",
        pnl: 460,
        explanation: ["Breaker pattern detected by model", "Standard entry and sizing", "Exited at 2R target"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 480,
        explanation: ["Breaker + reversal confluence confirmed by NSLM", "Clean entry at breaker midpoint", "Held to 2.2R with trailing stop"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 600,
        explanation: ["Breaker aligned with HTF bullish reversal thesis", "PM session timing added confluence", "Sized up appropriately on confirmed reversal", "Exited at 2.8R"],
      },
    },
    tier1Solution: [
      "Even when a trade wins, review the MOTIVATION — revenge trading is a process failure",
      "Use Mentor's pre-trade emotional check: rate your emotional state 1-10 before every trade",
      "Hard rule: no position size increases after a losing trade on the same day",
      "Journal this trade as a 'lucky win' — the outcome was right but the process was wrong",
      "BackTest breaker retests in EdgeLab to build a statistical edge, replacing emotional edge",
    ],
  },
  {
    id: "tm-007",
    date: "2026-05-19",
    title: "Failed FVG Continuation — Trap Setup",
    symbol: "NQ",
    session: "New York AM",
    setupType: "Failed FVG Continuation",
    marketContext: "Bearish FVG at 18,280 from previous session. Price returned to fill the FVG and initially rejected, looking like a continuation short. But the FVG fully filled — a failure signal.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "loss",
        pnl: -380,
        explanation: ["Entered short at FVG expecting continuation", "Held as FVG filled, hoping for reversal", "Finally stopped out well beyond planned stop"],
        mistakes: ["Ignored the FVG fill invalidation signal", "Moved stop further away instead of exiting", "Hope-based hold instead of rule-based exit"],
      },
      tier2: {
        action: "entered",
        result: "loss",
        pnl: -260,
        explanation: ["Model entered on initial FVG rejection", "Exited at -1R when FVG filled — proper invalidation response"],
      },
      tier3: {
        action: "skipped",
        result: "no_trade",
        pnl: 0,
        explanation: ["NSLM flagged this FVG as low-conviction due to proximity to daily support", "Setup quality below threshold — skipped"],
      },
      tier4: {
        action: "skipped",
        result: "no_trade",
        pnl: 0,
        explanation: ["Failed FVG continuations have negative expectancy in this context per EdgeLab data", "Daily support confluence made any short suspect", "No trade taken — preserved capital for better setups"],
      },
    },
    tier1Solution: [
      "When an FVG fully fills, the setup is INVALIDATED — exit immediately, don't hope",
      "Use Mentor's invalidation rules: pre-define exact price levels where the thesis is wrong",
      "Never move a stop further away — this turns a planned loss into an unplanned one",
      "Review failed FVG patterns in EdgeLab to understand the base rate of continuation vs failure",
      "Add 'FVG fill = exit' as a hard rule in your trading plan",
    ],
  },
  {
    id: "tm-008",
    date: "2026-05-22",
    title: "Cascade Selloff — Multiple Bad Entries",
    symbol: "NQ",
    session: "New York AM",
    setupType: "Market Structure Shift",
    marketContext: "Gap down on weak economic data. Multiple bearish MSS signals as price cascaded lower. Each bounce looked like a bottom but was a trap. Extreme sell-side pressure.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "loss",
        pnl: -2040,
        explanation: ["Tried to catch the bottom 3 times", "Each entry was a long against the trend", "Total: 3 losing trades (-680, -560, -800)", "Biggest single-day loss of the month"],
        mistakes: ["Counter-trend trading in a cascade", "Averaging into a losing thesis", "No daily loss limit enforced", "Emotional tilt after first loss led to larger sizing"],
      },
      tier2: {
        action: "entered",
        result: "loss",
        pnl: -1240,
        explanation: ["Model entered short on first MSS — correct direction", "But entered a second short too late, caught in a squeeze", "Net: 1 win (+400) and 2 losses (-640, -600) from late entries and re-entries"],
      },
      tier3: {
        action: "entered",
        result: "loss",
        pnl: -680,
        explanation: ["Entered one short on the initial MSS for a win (+380)", "Re-entered on what looked like continuation but was a squeeze", "Net: 1 win, 1 loss (-680) — still a losing day but controlled"],
      },
      tier4: {
        action: "entered",
        result: "loss",
        pnl: -820,
        explanation: ["Entered one short on the initial MSS for a partial win (+280)", "Gap-down context flagged as high-volatility regime — reduced size", "Took one more entry that stopped out (-820) on a volatility spike", "Respected daily loss limit and stopped trading"],
      },
    },
    tier1Solution: [
      "IMPLEMENT A DAILY LOSS LIMIT — maximum 2% of account or $500, whichever is less",
      "Never average into a losing thesis — each entry must have independent invalidation",
      "Use Mentor's regime detection: cascade selloffs are NOT the same as normal pullbacks",
      "After 2 consecutive losses, mandatory 30-minute cooling period before next trade",
      "Review cascade days in EdgeLab — bottom-fishing has extremely negative expectancy in these regimes",
    ],
  },
  {
    id: "tm-009",
    date: "2026-05-27",
    title: "Clean Asia Sweep into NY AM — Textbook Setup",
    symbol: "NQ",
    session: "New York AM",
    setupType: "Liquidity Sweep + Displacement + FVG",
    marketContext: "Asia swept buy-side liquidity above PDH. London consolidated. NY AM opened with displacement back below PDH, creating a clean FVG at 18,640. Bearish bias confirmed on all timeframes.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "win",
        pnl: 420,
        explanation: ["Recognized the Asia sweep pattern", "Entered short at the FVG", "Exited at 1.5R — improvement from earlier in the month"],
      },
      tier2: {
        action: "entered",
        result: "win",
        pnl: 640,
        explanation: ["Full model confluence on sweep + displacement + FVG", "Standard entry with 1R and 2R targets", "Hit 2R cleanly"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 580,
        explanation: ["NSLM graded A+ with all confluence factors", "Full size entry", "Held to 2.5R with partial at 1.5R"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 700,
        explanation: ["Textbook A+ setup — all signals aligned", "1.5x size with partials planned at 1R, 2R, 3R", "Captured 3R on final partial", "Best R:R trade of the week"],
      },
    },
    tier1Solution: [
      "This trade shows T1 IS learning — execution improving vs early May",
      "Next step: maintain this execution quality consistently, not just after big losses",
      "Use Mentor's trade grading to compare this entry vs the May 4th version of the same setup",
      "Build a personal playbook page for 'Asia Sweep + NY Displacement' with entry rules",
    ],
  },
  {
    id: "tm-010",
    date: "2026-05-29",
    title: "End-of-Month Session — Multiple A+ Setups",
    symbol: "NQ",
    session: "New York AM",
    setupType: "HTF Bias + LTF Entry",
    marketContext: "Month-end rebalancing created strong directional flow. Multiple clean setups formed as institutions positioned. HTF bullish bias with clear draw on buy-side liquidity above monthly high.",
    tierOutcomes: {
      tier1: {
        action: "entered",
        result: "win",
        pnl: 1890,
        explanation: ["Took 2 trades on the strong trend day", "Both wins (+1100, +790) — largest winning day of the month", "Finally showing discipline learned from the May 22 disaster"],
        mistakes: ["Still slightly oversized on the second entry — confidence bias from the first win"],
      },
      tier2: {
        action: "entered",
        result: "win",
        pnl: 3560,
        explanation: ["Model identified month-end flow regime", "Took 2 systematic entries at optimal levels", "Sized appropriately for the high-conviction regime", "Both hit extended targets (+1860, +1700)"],
      },
      tier3: {
        action: "entered",
        result: "win",
        pnl: 4210,
        explanation: ["NSLM flagged month-end as historically positive for trend setups", "Took 2 entries with increased size on A+ grading", "Held for extended targets with trailing stops", "Captured +2200 and +2010"],
      },
      tier4: {
        action: "entered",
        result: "win",
        pnl: 6520,
        explanation: ["Full month-end regime model active", "EdgeLab backtests showed 78% win rate on month-end trend days", "Maximum position size justified by confluence + historical edge", "Captured +3400 and +3120 across two entries with scaling"],
      },
    },
    tier1Solution: [
      "The improvement on May 29 vs May 22 shows real growth — document what changed",
      "Use Mentor to build a 'month-end regime' playbook based on this experience",
      "Address the remaining sizing bias — wins should not increase size for the next trade",
      "Set a specific monthly review date to track progress across these metrics",
    ],
  },
];
