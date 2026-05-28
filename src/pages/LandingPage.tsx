import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Sparkles, TerminalSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import TelemetryCard from "../components/aerospace/TelemetryCard";
import { moduleCatalog } from "../utils/modules";
import { fadeUp, stagger } from "../animations/motion";

const LandingPage = () => {
  return (
    <div className="grid gap-10">
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid gap-8"
      >
        <motion.div variants={fadeUp} className="grid gap-6">
          <p className="text-sm uppercase tracking-[0.5em] text-textSecondary">Futuristic Engineering Learning</p>
          <h1 className="text-4xl font-semibold text-textPrimary md:text-6xl">
            GyaanChakra Mission Control
          </h1>
          <p className="max-w-2xl text-lg text-textSecondary">
            A premium ecosystem combining quizzes, coding battles, drone systems, cybersecurity, and AI labs
            in a single aerospace-inspired experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Start Mission</Button>
            <Button variant="ghost">Explore Modules</Button>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-4 md:grid-cols-3">
          <TelemetryCard title="Active Cadets" value="42,580" icon={<Rocket className="h-5 w-5" />} />
          <TelemetryCard title="Live Battles" value="1,284" icon={<TerminalSquare className="h-5 w-5" />} />
          <TelemetryCard title="Shield Status" value="Secure" icon={<ShieldCheck className="h-5 w-5" />} />
        </motion.div>
      </motion.section>

      <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="glass glow-border rounded-3xl p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-textSecondary">Mission Highlights</p>
              <h2 className="mt-3 text-2xl font-semibold text-textPrimary md:text-3xl">
                NASA-grade learning telemetry
              </h2>
              <p className="mt-3 max-w-xl text-textSecondary">
                Track mastery, view heatmaps, and engage in multiplayer quiz battles with real-time
                score synchronization.
              </p>
            </div>
            <Sparkles className="h-10 w-10 text-neon" />
          </div>
        </motion.div>
      </motion.section>

      <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-textPrimary">Core Modules</h3>
          <Button variant="outline">View All</Button>
        </motion.div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {moduleCatalog.map((module) => (
            <motion.div
              key={module.title}
              variants={fadeUp}
              className={`glass rounded-2xl p-5 bg-gradient-to-br ${module.gradient}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{module.title}</p>
              <p className="mt-3 text-lg font-semibold text-textPrimary">{module.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {module.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-textSecondary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
