 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FBBD23",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors:{
        slider: "#3ABFF8"
      },
    },
  },
  // plugins: [require("daisyui")],
};