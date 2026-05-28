/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#06B6D4",
        aerospace: "#2563EB",
        neon: "#22D3EE",
        accent: "#10B981",
        danger: "#EF4444",
        background: "#020617",
        surface: "#0F172A",
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8"
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 211, 238, 0.35)",
        neon: "0 0 30px rgba(124, 58, 237, 0.45)"
      },
      keyframes: {
        radar: {
          "0%": { transform: "scale(0.95)", opacity: 0.65 },
          "70%": { transform: "scale(1.1)", opacity: 0.2 },
          "100%": { transform: "scale(1.15)", opacity: 0 }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        radar: "radar 2.8s ease-out infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
