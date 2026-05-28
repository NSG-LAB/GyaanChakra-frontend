import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/motion";
import { Button } from "../components/ui/button";

type ModulePageProps = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: ReactNode;
};

const ModulePage = ({ title, description, tags, gradient, icon }: ModulePageProps) => {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="grid gap-6"
    >
      <motion.div
        variants={fadeUp}
        className={`glass glow-border rounded-3xl p-6 md:p-10 bg-gradient-to-br ${gradient}`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-neon">
            {icon}
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-textSecondary">Mission Module</p>
            <h1 className="mt-2 text-3xl font-semibold text-textPrimary md:text-4xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-textSecondary">{description}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-textSecondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>Launch Session</Button>
          <Button variant="ghost">View Roadmap</Button>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {["Live Labs", "Adaptive Missions", "Telemetry"].map((item) => (
          <div key={item} className="glass rounded-2xl p-4">
            <p className="text-sm text-textSecondary">{item}</p>
            <p className="mt-3 text-lg font-semibold text-textPrimary">Operational</p>
            <p className="mt-2 text-sm text-textSecondary">
              Configure objectives, launch exercises, and monitor outcomes in real time.
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ModulePage;
