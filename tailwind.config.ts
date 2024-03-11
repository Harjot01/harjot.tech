import type { Config } from "tailwindcss";
const {fontFamily} = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        smsl: "406px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#0d2438",
        secondary: "#1e3851",
        lightMode: "#ECEFF1",
        textGreen: "#78e2a0",
        textDarkGreen: "#04aa6d",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      fontFamily: {
        titleFont: ["var(--font-mont)", ...fontFamily.sans],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {


        circularLight:
        "repeating-radial-gradient(rgba(30,56,81,0.4) 2px,#fbf8f3 5px,#fbf8f3 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(251,248,243,0.4) 2px,#0d2438 8px,#0d2438 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(30,56,81,0.4) 2px,#fbf8f3 5px,#fbf8f3 93px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(251,248,243,0.4) 2px,#0d2438 8px,#0d2438 93px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(30,56,81,0.4) 2px,#fbf8f3 5px,#fbf8f3 65px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(251,248,243,0.4) 2px,#0d2438 6px,#0d2438 65px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(30,56,81,0.4) 2px,#fbf8f3 5px,#fbf8f3 45px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(251,248,243,0.4) 2px,#0d2438 4px,#0d2438 45px)",
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
