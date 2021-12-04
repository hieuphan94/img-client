module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      transparentMenu: "#ffffffb5",
      hoverColor: "#3c3a3aa6",
      blackThin: "#ddd",
      black: "#000",
      paraGraph: "#666",
      menuColor: "#494949",
      white: "#fff",
      yellow: "",
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
