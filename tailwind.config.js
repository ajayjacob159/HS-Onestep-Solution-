/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#008744",
          greenDark: "#065F38",
          greenLight: "#F0FDF4",
          gold: "#D4AF37",
          goldDark: "#B8960C",
          goldLight: "#FEFCE8",
          charcoal: "#0F172A",
          slate: "#334155",
          muted: "#64748B",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Fira Code", "monospace"]
      }
    },
  },
  plugins: [],
};
