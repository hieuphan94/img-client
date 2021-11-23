module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      main: {
        light: "#efac8f",
        DEFAULT: "#ef7540",
        dark: "#ef662b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
