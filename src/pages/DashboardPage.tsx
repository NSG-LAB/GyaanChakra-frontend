import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import StatCard from "../components/dashboard/StatCard";

const xpSeries = [
  { name: "Mon", xp: 180 },
  { name: "Tue", xp: 240 },
  { name: "Wed", xp: 320 },
  { name: "Thu", xp: 280 },
  { name: "Fri", xp: 420 },
  { name: "Sat", xp: 380 },
  { name: "Sun", xp: 460 }
];

const DashboardPage = () => {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="XP Earned" value="6,420" delta="+18%" />
        <StatCard label="Streak" value="12 days" delta="+2" />
        <StatCard label="Rank" value="Specialist" delta="+1" />
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">Mission Telemetry</p>
            <h2 className="mt-2 text-xl font-semibold text-textPrimary">Weekly XP Growth</h2>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-textSecondary">
            Live Sync
          </span>
        </div>
        <div className="mt-6 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={xpSeries}>
              <XAxis dataKey="name" stroke="#94A3B8" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "#0F172A", border: "1px solid #1E293B" }} />
              <Line type="monotone" dataKey="xp" stroke="#22D3EE" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
