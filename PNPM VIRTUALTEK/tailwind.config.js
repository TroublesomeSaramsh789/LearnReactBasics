module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"]
      },
      maxWidth: {
        container: "1400px",
      },
      colors: {
        "primary-blue": "#0A97D9",
        "primary-dark-blue": "#0C64A2",
      }
    },
  },
  plugins: [],
};
