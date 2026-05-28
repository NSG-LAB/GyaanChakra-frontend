import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const masteryData = [
  { week: "W1", mastery: 32 },
  { week: "W2", mastery: 46 },
  { week: "W3", mastery: 52 },
  { week: "W4", mastery: 61 },
  { week: "W5", mastery: 68 },
  { week: "W6", mastery: 74 }
];

const AnalyticsPage = () => {
  return (
    <div className="grid gap-6">
      <div className="glass rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Learning Analytics</p>
            <h2 className="mt-2 text-xl font-semibold text-textPrimary">Skill Mastery Curve</h2>
            <p className="mt-2 text-sm text-textSecondary">
              Live telemetry across quizzes, coding battles, and labs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-textSecondary">
            84% Mission Ready
          </div>
        </div>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={masteryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
              <XAxis dataKey="week" stroke="#94A3B8" axisLine={false} tickLine={false} />
              <YAxis stroke="#94A3B8" axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#0F172A", border: "1px solid #1E293B" }} />
              <Area type="monotone" dataKey="mastery" stroke="#7C3AED" fill="#2563EB" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Heatmap Nodes", value: "128" },
          { label: "Challenges Solved", value: "74" },
          { label: "Labs Completed", value: "36" }
        ].map((item) => (
          <div key={item.label} className="glass rounded-2xl p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-textPrimary">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPage;
