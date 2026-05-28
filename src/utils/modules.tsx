import {
  Activity,
  Bot,
  Brain,
  Cpu,
  Flame,
  Globe,
  GraduationCap,
  LineChart,
  Medal,
  MonitorSmartphone,
  Rocket,
  Shield,
  Swords,
  TerminalSquare,
  Users,
  Wrench
} from "lucide-react";
import ModulePage from "../pages/ModulePage";
import DashboardPage from "../pages/DashboardPage";
import AnalyticsPage from "../pages/AnalyticsPage";

export const moduleCatalog = [
  {
    title: "Dashboard",
    description: "Mission control for your engineering journey.",
    path: "/dashboard",
    tags: ["Telemetry", "XP", "Streaks"],
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    title: "Quiz Engine",
    description: "Adaptive quizzes across 16 engineering domains.",
    path: "/quiz-engine",
    tags: ["Adaptive", "Timed", "Ranked"],
    gradient: "from-aerospace/20 to-neon/20"
  },
  {
    title: "Coding Arena",
    description: "Live coding battles with AI hints.",
    path: "/coding-arena",
    tags: ["C++", "Python", "JS"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "DSA Lab",
    description: "Structured practice for algorithm mastery.",
    path: "/dsa-lab",
    tags: ["Roadmaps", "Pattern"],
    gradient: "from-secondary/20 to-accent/20"
  },
  {
    title: "AI & ML Lab",
    description: "Hands-on learning for intelligent systems.",
    path: "/ai-ml-lab",
    tags: ["Models", "Pipelines"],
    gradient: "from-neon/20 to-primary/20"
  },
  {
    title: "Cybersecurity Center",
    description: "Offense-defense labs with live telemetry.",
    path: "/cybersecurity",
    tags: ["SOC", "Blue Team"],
    gradient: "from-danger/20 to-neon/20"
  },
  {
    title: "Drone Technology Hub",
    description: "UAV systems, PX4, GNSS, and autonomy.",
    path: "/drone-hub",
    tags: ["PX4", "LiDAR"],
    gradient: "from-aerospace/20 to-secondary/20"
  },
  {
    title: "ECE Learning Center",
    description: "Analog to VLSI learning tracks.",
    path: "/ece-center",
    tags: ["DSP", "VLSI"],
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    title: "IoT & Robotics Hub",
    description: "Sensor fusion, robotics, and systems.",
    path: "/iot-robotics",
    tags: ["Embedded", "Control"],
    gradient: "from-neon/20 to-accent/20"
  },
  {
    title: "Analytics",
    description: "Skill matrix, heatmaps, and XP growth.",
    path: "/analytics",
    tags: ["Heatmaps", "Skills"],
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    title: "Multiplayer Arena",
    description: "Real-time quiz and coding battles.",
    path: "/multiplayer",
    tags: ["Rooms", "Live"],
    gradient: "from-accent/20 to-neon/20"
  },
  {
    title: "Leaderboards",
    description: "Global, regional, and cohort rankings.",
    path: "/leaderboards",
    tags: ["Rank", "XP"],
    gradient: "from-aerospace/20 to-primary/20"
  },
  {
    title: "AI Assistant",
    description: "Personalized mentor for every track.",
    path: "/ai-assistant",
    tags: ["Adaptive", "Guided"],
    gradient: "from-secondary/20 to-neon/20"
  },
  {
    title: "Admin Panel",
    description: "Control room for content and cohorts.",
    path: "/admin-panel",
    tags: ["Moderation", "Insights"],
    gradient: "from-danger/20 to-primary/20"
  },
  {
    title: "User Profiles",
    description: "Identity, badges, and mission logs.",
    path: "/profiles",
    tags: ["Badges", "Progress"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "Achievements",
    description: "Unlockable milestones and ranks.",
    path: "/achievements",
    tags: ["Badges", "Streaks"],
    gradient: "from-accent/20 to-neon/20"
  },
  {
    title: "Interview Hub",
    description: "Mock interviews and review loops.",
    path: "/interview-hub",
    tags: ["Mock", "Review"],
    gradient: "from-secondary/20 to-primary/20"
  }
];

const iconMap = {
  Dashboard: Activity,
  "Quiz Engine": GraduationCap,
  "Coding Arena": TerminalSquare,
  "DSA Lab": Cpu,
  "AI & ML Lab": Brain,
  "Cybersecurity Center": Shield,
  "Drone Technology Hub": Rocket,
  "ECE Learning Center": Wrench,
  "IoT & Robotics Hub": MonitorSmartphone,
  Analytics: LineChart,
  "Multiplayer Arena": Users,
  Leaderboards: Medal,
  "AI Assistant": Bot,
  "Admin Panel": Globe,
  "User Profiles": Flame,
  Achievements: Medal,
  "Interview Hub": Swords
};

export const modulePages = moduleCatalog.map((module) => {
  const Icon = iconMap[module.title] || Activity;
  if (module.path === "/dashboard") {
    return { path: module.path, element: <DashboardPage /> };
  }
  if (module.path === "/analytics") {
    return { path: module.path, element: <AnalyticsPage /> };
  }
  return {
    path: module.path,
    element: (
      <ModulePage
        title={module.title}
        description={module.description}
        tags={module.tags}
        gradient={module.gradient}
        icon={<Icon className="h-6 w-6" />}
      />
    )
  };
});

export const navLinks = moduleCatalog.map((module) => ({
  label: module.title,
  to: module.path
}));
