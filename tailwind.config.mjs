import { readFileSync } from "node:fs";

// SINGLE SOURCE OF TRUTH: design tokens drive the Tailwind theme.
// Edit src/design/tokens.json -> every component updates. No hardcoded colors.
const tokens = JSON.parse(
  readFileSync(new URL("./src/design/tokens.json", import.meta.url)),
);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: tokens.color.paper,
        ink: tokens.color.ink,
        "ink-soft": tokens.color.ink_soft,
        accent: tokens.color.accent,
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', '"Noto Serif KR"', "Georgia", "serif"],
        kr: ['"Noto Serif KR"', "serif"],
        sans: ['"Noto Sans JP"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};
