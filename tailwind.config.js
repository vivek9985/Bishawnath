/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C9F31D",
        secondary: "#161616",
        accent: "#972FE3",
        light: "#f0f0f0",
        neutral: "#6B7280",
      },
    },
  },
  plugins: [],
};
