/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        leagueBold: "LeagueBold",
        juraBold: "JuraBold",
        leagueLight: "LeagueLight",
        leagueSemiBold: "LeagueSemiBold",
        leagueExtraLight: "LeagueExtraLight",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#111111",
        action_blue: "#2178de",
        primary_blue: "#f2f7fd",
      },
    },
  },
  plugins: [],
};
