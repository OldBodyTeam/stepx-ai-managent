import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import scrollbar from "tailwind-scrollbar";
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
    borderWidth: Array.from({ length: 1000 }).reduce((map: any, _, index) => {
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
      "8A8C90": "#8A8C90",
      FA3100: "#FA3100",
      FAFAFB: "#FAFAFB",
      "6F6F6F": "#6F6F6F ",
      "161B22": "#161B22 ",
      "4F5357": "#4F5357 ",
      o232: "rgba(232,232,233,0.2)",
      o16: "rgba(16,16,16,0.65)",
      o34: "rgba(34,34,34,0.65)",
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
      xs18: [
        "18px",
        {
          lineHeight: "27px",
        },
      ],
    },
    screens: {
      desktop12: "1280px",
      desktop14: "1440px",
      desktop19: "1920px",
    },
  },
  plugins: [daisyui, scrollbar],
} satisfies Config;
