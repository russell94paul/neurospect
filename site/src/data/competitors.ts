// Compare page data — capabilities, subscription stacks, workflows, questions, outperform items

export type SupportLevel = "yes" | "partial" | "no";

export interface Capability {
  name: string;
  chatbot: SupportLevel;
  journal: SupportLevel;
  backtester: SupportLevel;
  scripts: SupportLevel;
  discord: SupportLevel;
  spreadsheet: SupportLevel;
  neurospect: SupportLevel;
}

export const CAPABILITIES: Capability[] = [
  {
    name: "ICT-aware reasoning",
    chatbot: "no",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "partial",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Trade thesis generation",
    chatbot: "partial",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Event-driven ICT backtesting",
    chatbot: "no",
    journal: "no",
    backtester: "partial",
    scripts: "partial",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Journal intelligence",
    chatbot: "no",
    journal: "partial",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "partial",
    neurospect: "yes",
  },
  {
    name: "NSLM prompt/model experimentation",
    chatbot: "no",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Quant feature engineering",
    chatbot: "no",
    journal: "no",
    backtester: "partial",
    scripts: "partial",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Hybrid ICT + quant modeling",
    chatbot: "no",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Personalized coaching",
    chatbot: "partial",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "partial",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Risk review",
    chatbot: "no",
    journal: "partial",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "partial",
    neurospect: "yes",
  },
  {
    name: "Setup validation",
    chatbot: "no",
    journal: "no",
    backtester: "no",
    scripts: "partial",
    discord: "partial",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Model/version comparison",
    chatbot: "no",
    journal: "no",
    backtester: "partial",
    scripts: "no",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Workflow memory",
    chatbot: "partial",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Source-grounded knowledge",
    chatbot: "no",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "partial",
    spreadsheet: "no",
    neurospect: "yes",
  },
  {
    name: "Shadow/paper trading roadmap",
    chatbot: "no",
    journal: "no",
    backtester: "no",
    scripts: "no",
    discord: "no",
    spreadsheet: "no",
    neurospect: "yes",
  },
];

export interface ToolCost {
  name: string;
  costRange: string;
}

export interface SubscriptionStack {
  before: ToolCost[];
  after: {
    name: string;
    costRange: string;
    note: string;
  };
  totalBeforeRange: string;
}

export const SUBSCRIPTION_STACK: SubscriptionStack = {
  before: [
    { name: "ChatGPT / Claude Pro", costRange: "$20 - $200/mo" },
    { name: "Tradovate / NinjaTrader", costRange: "$0 - $60/mo" },
    { name: "TradeZella / TraderSync", costRange: "$30 - $50/mo" },
    { name: "TradingView Premium", costRange: "$15 - $60/mo" },
    { name: "Discord signal groups", costRange: "$30 - $100/mo" },
    { name: "Notion / spreadsheets", costRange: "$0 - $10/mo" },
    { name: "Backtesting platforms", costRange: "$30 - $80/mo" },
    { name: "ICT course / mentorship replays", costRange: "$0 - $150/mo" },
  ],
  after: {
    name: "NeuroSpect",
    costRange: "$29 - $349/mo",
    note: "One platform. One subscription. Every ICT tool you need.",
  },
  totalBeforeRange: "$125 - $710/mo (approx.)",
};

export interface WorkflowStep {
  label: string;
  tool: string;
}

export const WORKFLOW_BEFORE: WorkflowStep[] = [
  { label: "Study ICT content", tool: "YouTube / Notion" },
  { label: "Take notes", tool: "Notion / Google Docs" },
  { label: "Prepare session", tool: "TradingView + Discord" },
  { label: "Execute trades", tool: "Tradovate / NinjaTrader" },
  { label: "Journal trades", tool: "TradeZella / Spreadsheet" },
  { label: "Review performance", tool: "Spreadsheet / TraderSync" },
  { label: "Ask for help", tool: "ChatGPT / Discord" },
];

export const WORKFLOW_AFTER: WorkflowStep[] = [
  { label: "Study ICT content", tool: "NeuroCore knowledge base" },
  { label: "Prepare session", tool: "Mentor pre-session brief" },
  { label: "Execute trades", tool: "Broker integration" },
  { label: "Journal trades", tool: "Auto-fill + voice entry" },
  { label: "Review performance", tool: "AI-powered analytics" },
  { label: "Research edge", tool: "EdgeLab backtester" },
  { label: "Improve strategy", tool: "NSLM coaching loop" },
];

export interface WorkflowKPI {
  metric: string;
  description: string;
}

export const WORKFLOW_KPIS: WorkflowKPI[] = [
  { metric: "7 tools to 1", description: "Fewer fragmented subscriptions to manage" },
  { metric: "5 fewer context switches", description: "Stop copy-pasting between apps every session" },
  { metric: "~3x faster journaling", description: "Broker auto-fill and voice entry vs. manual fields (estimated)" },
  { metric: "Instant review", description: "AI surfaces patterns on demand vs. manual spreadsheet analysis" },
  { metric: "Continuous memory", description: "Every session builds on the last vs. starting from scratch" },
];

export interface TraderQuestion {
  question: string;
  answer: string;
  icon: string;
}

export const QUESTIONS: TraderQuestion[] = [
  {
    question: "Is my ICT strategy actually profitable, or am I curve-fitting?",
    answer: "EdgeLab runs Monte Carlo simulations and null-hypothesis tests on your setups. You get a p-value, not a gut feeling.",
    icon: "chart-up",
  },
  {
    question: "Which of my entry models performs best in trending vs. ranging markets?",
    answer: "Regime-aware analytics slice your journal by market condition, entry model, and session. See what works where.",
    icon: "filter",
  },
  {
    question: "Am I revenge trading after losses?",
    answer: "The psychology profiler detects patterns in your trading behavior: tilt sequences, hesitation, and overtrading clusters.",
    icon: "brain",
  },
  {
    question: "What did my mentor actually teach about FVGs in ranging markets?",
    answer: "NeuroCore searches 36K+ lines of curated ICT content with source citations. No hallucinated answers.",
    icon: "book",
  },
  {
    question: "How would this setup have performed over the last 6 months?",
    answer: "EdgeLab backtests your exact setup with event-driven simulation, not just bar-by-bar replay.",
    icon: "clock",
  },
  {
    question: "Am I sizing my positions correctly for my prop firm rules?",
    answer: "The risk limit engine maps your prop firm's rules to real-time position sizing and drawdown alerts.",
    icon: "shield",
  },
  {
    question: "Which version of my strategy prompt produces better trade ideas?",
    answer: "NSLM prompt comparison lets you A/B test strategy prompts against historical data and evaluation benchmarks.",
    icon: "split",
  },
  {
    question: "What's the optimal time window for my Silver Bullet entries?",
    answer: "Feature engineering extracts time, volatility, and context features from your journal, then ranks them by predictive power.",
    icon: "target",
  },
];

export interface OutperformItem {
  title: string;
  description: string;
  icon: string;
  neon: string;
}

export const OUTPERFORM_ITEMS: OutperformItem[] = [
  {
    title: "Fewer tools, less friction",
    description: "Replace 5-7 fragmented subscriptions with one platform that shares context across every feature.",
    icon: "consolidate",
    neon: "neon-card-cyan",
  },
  {
    title: "Memory that compounds",
    description: "Every journal entry, coaching conversation, and backtest result feeds the next. Generic tools start from zero every session.",
    icon: "memory",
    neon: "neon-card-purple",
  },
  {
    title: "ICT-native review",
    description: "Review trades against actual entry model checklists, not generic win/loss charts. Deterministic validation, not vibes.",
    icon: "checklist",
    neon: "neon-card-emerald",
  },
  {
    title: "Research with statistical rigor",
    description: "Monte Carlo, walk-forward, and deflated Sharpe ratio. Know whether your edge is real or a product of luck.",
    icon: "research",
    neon: "neon-card-amber",
  },
  {
    title: "Model and prompt comparison",
    description: "A/B test NSLM versions and strategy prompts against evaluation benchmarks. Iterate on your trading intelligence.",
    icon: "compare",
    neon: "neon-card-rose",
  },
  {
    title: "Hybrid ICT + quant support",
    description: "No other platform combines discretionary ICT methodology with quantitative feature engineering and regime detection.",
    icon: "hybrid",
    neon: "neon-card-cyan",
  },
];
