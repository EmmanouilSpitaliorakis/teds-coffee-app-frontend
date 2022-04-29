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
        slider: "#1939bd"
      },
      scale:{
        "175" : "1.75",
        "200" : "2.00",
        "225" : "2.25",
      },
    },
  },
  // plugins: [require("daisyui")],
};