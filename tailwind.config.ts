import type { Config } from "tailwindcss";

/* All colours come from CSS variables in globals.css so light/dark switch in one place. */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    screens: { sm: "560px", md: "860px", lg: "1080px", xl: "1280px" },
    extend: {
      colors: {
        paper: v("paper"),
        surface: v("surface"),
        sunken: v("sunken"),
        ink: v("ink"),
        body: v("body"),
        muted: v("muted"),
        line: v("line"),
        teal: { DEFAULT: v("teal"), strong: v("teal-strong"), soft: v("teal-soft"), deep: v("teal-deep") },
        sun: { DEFAULT: v("sun"), soft: v("sun-soft") },
        onteal: v("on-teal"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      /* Type scale: 12/14/16/18/20/24/32/40/48/64/80 */
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.55" }],
        base: ["1rem", { lineHeight: "1.65" }],
        md: ["1.125rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.5" }],
        xl: ["1.5rem", { lineHeight: "1.3" }],
        "2xl": ["2rem", { lineHeight: "1.15" }],
        "3xl": ["2.5rem", { lineHeight: "1.1" }],
        "4xl": ["3rem", { lineHeight: "1.06" }],
        "5xl": ["4rem", { lineHeight: "1.02" }],
        "6xl": ["5rem", { lineHeight: "1" }],
      },
      borderRadius: { sm: "8px", DEFAULT: "12px", lg: "16px", xl: "24px", "2xl": "32px" },
      boxShadow: {
        soft: "0 1px 0 rgb(var(--shadow) / 0.05), 0 16px 40px -24px rgb(var(--shadow) / 0.45)",
        lift: "0 2px 0 rgb(var(--shadow) / 0.05), 0 28px 60px -28px rgb(var(--shadow) / 0.6)",
      },
      maxWidth: { shell: "1240px" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
} satisfies Config;
