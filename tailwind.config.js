module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      text: ["Montserrat", "sans-serif"],
      logo: ['"Press Start 2P"', 'cursive'],
    },
    extend: {
      colors: {
        "card-blue": "#1a2c38",
        "card-dark-blue": "#0f212e",
        "text-color": "#eaebed",
      },
    },
  },
};
