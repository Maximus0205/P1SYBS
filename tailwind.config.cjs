module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        punkt1: {
          red: "#b7181e",
          black: "#000000",
          gray: "#F5F5F5",
          darkgray: "#2B2B2B"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
