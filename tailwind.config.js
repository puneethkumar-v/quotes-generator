module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      decca: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      colors: {
        bgColor: "#dddddd",
        card: "#eae5e5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
