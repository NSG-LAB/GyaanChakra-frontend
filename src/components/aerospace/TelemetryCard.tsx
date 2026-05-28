import { ReactNode } from "react";

const TelemetryCard = ({ title, value, icon }: { title: string; value: string; icon: ReactNode }) => {
  return (
    <div className="glass glow-border rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{title}</p>
        <div className="text-neon">{icon}</div>
      </div>
      <p className="mt-3 text-2xl font-semibold text-textPrimary">{value}</p>
    </div>
  );
};

export default TelemetryCard;
