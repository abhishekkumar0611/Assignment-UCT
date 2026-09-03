/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#263B7A",
        primaryDark: "#17285F",
        primaryLight: "#5C76CF",
        secondary: "#F7A91B",
        secondaryDark: "#E89900",
        lightBlue: "#F0F3FF",
        textDark: "#18215B",
      },

      fontFamily: {
        inter: [
          "Inter",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },

      boxShadow: {
        card: "0 5px 25px rgba(38,59,122,0.08)",
        form: "0 10px 40px rgba(0,0,0,0.15)",
      },

      backgroundImage: {
        hero:
          "linear-gradient(90deg, rgba(24,48,112,.95), rgba(46,74,143,.82))",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};