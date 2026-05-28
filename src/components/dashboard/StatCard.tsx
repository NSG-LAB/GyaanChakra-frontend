const StatCard = ({ label, value, delta }: { label: string; value: string; delta: string }) => {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-textPrimary">{value}</p>
        <p className="text-xs text-accent">{delta}</p>
      </div>
    </div>
  );
};

export default StatCard;
