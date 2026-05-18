import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // ── Warm ivory backgrounds ──────────────────────────────────────────
        ivory: {
          50:  "#FAFAF7",   // main body bg
          100: "#F5F4EF",   // alternate sections
          200: "#EDECEA",   // deeper soft section
          300: "#E4E2DA",   // warm parchment border
        },
        // ── Rich plum (primary CTA / accent) ──────────────────────────────
        plum: {
          50:  "#F4F0FB",
          100: "#E9E2F7",
          200: "#D3C5EF",
          300: "#B8A0E4",
          400: "#9B7AD8",
          500: "#7E54CB",
          600: "#6535BC",   // default button
          700: "#5528A4",   // hover
          800: "#3D1C7A",
          900: "#28124F",
        },
        // ── Antique amber (secondary / highlights / gradient target) ───────
        amber: {
          50:  "#FDF8EE",
          100: "#FAF0D6",
          200: "#F4DCAB",
          300: "#ECC472",
          400: "#E2A83A",
          500: "#C8891E",   // warm gold
          600: "#A86D14",
        },
        // ── Warm neutrals for text ─────────────────────────────────────────
        ink: {
          900: "#17161A",   // near-black with warmth
          700: "#3D3B44",   // body text
          500: "#6B6875",   // secondary text
          300: "#A09DA8",   // muted text
          100: "#D8D6DE",   // disabled / hairline
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        // warm-tinted shadows so cards don't look cold
        "warm-sm": "0 1px 3px 0 rgba(55, 40, 80, 0.06), 0 1px 2px -1px rgba(55, 40, 80, 0.04)",
        "warm-md": "0 4px 16px -2px rgba(55, 40, 80, 0.10), 0 2px 8px -2px rgba(55, 40, 80, 0.06)",
        "warm-lg": "0 12px 40px -4px rgba(55, 40, 80, 0.14), 0 4px 16px -4px rgba(55, 40, 80, 0.08)",
        "plum-glow": "0 4px 20px -2px rgba(101, 53, 188, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
