import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: ({ theme }: any) => ({
        ...theme("spacing"),
      }),
      lineHeight: ({ theme }: any) => ({
        ...theme("spacing"),
      }),
    },
    spacing: Array.from({ length: 1000 }).reduce((map: any, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}) as any,
    borderRadius: Array.from({ length: 1000 }).reduce((map: any, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}) as any,
    backgroundSize: {
      "100%": "100% 100%",
    },
    colors: {
      "222222": "#222222",
      FFFFFF: "#FFFFFF",
      D0FF71: "#D0FF71",
      101010: "#101010",
      EDEDED: "#EDEDED",
      FADB14: "#FADB14",
      E8E8E9: "#E8E8E9",
      F0F0F0: "#F0F0F0",
    },
    fontSize: {
      xs12: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      xs14: [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      xs16: [
        "16px",
        {
          lineHeight: "25px",
        },
      ],
    },
  },
  plugins: [],
} satisfies Config;
