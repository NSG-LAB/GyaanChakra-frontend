import { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Bell, Home, LayoutDashboard, Rocket, Shield, Swords } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks } from "../utils/modules";
import useMediaQuery from "../hooks/useMediaQuery";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();

  const primaryLinks = [
    { label: "Home", to: "/", icon: Home },
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "Arena", to: "/coding-arena", icon: Swords },
    { label: "Cyber", to: "/cybersecurity", icon: Shield },
    { label: "Drone", to: "/drone-hub", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="radar-ring relative h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-primary shadow-neon" />
            <div>
              <p className="text-lg font-semibold tracking-wide">GyaanChakra</p>
              <p className="text-xs text-textSecondary">Futuristic Engineering Ecosystem</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.slice(0, 6).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition ${isActive ? "text-neon" : "text-textSecondary hover:text-textPrimary"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="glass rounded-full p-2 text-textSecondary hover:text-neon">
              <Bell className="h-5 w-5" />
            </button>
            <Link
              to="/login"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-textPrimary hover:border-neon"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 md:px-6"
      >
        {children}
      </motion.main>

      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-surface/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
            {primaryLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="flex flex-col items-center gap-1 text-xs"
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-neon" : "text-textSecondary"}`} />
                  <span className={isActive ? "text-neon" : "text-textSecondary"}>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default RootLayout;
