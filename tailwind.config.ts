import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F2EEE4",
        moss: "#29331F",
        "moss-deep": "#1E2616",
        olive: "#5E6843",
        sage: "#A9B091",
        sage2: "#C4C9AE",
        sand: "#E3D8C4",
        sand2: "#DCCFB8",
        clay: "#9E5A4F",
        "clay-deep": "#8A4C42",
        blush: "#D8B9AE",
        line: "#DDD5C4",
        line2: "#CDBFA5",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        petal: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
