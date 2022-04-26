module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "1040px",
        lg: "1440px",
        smm: { max: "375px" },
        mdm: { max: "1040px" },
        lgm: { max: "1440px" },
      },
      fontFamily: {
        Dosis: ["Dosis", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Nanum: ["Nanum Brush Script", "cursive"],
        Mochiy: ["Mochiy Pop One", "sans-serif"],
      },
      keyframes: {
        "modal-in": {
          "0%": {
            visibility: "invisible",
            opacity: 0,
          },
          "1%": {
            visibility: "visible",
            opacity: 0.1,
          },
          "100%": {
            visibility: "visible",
            opacity: 1,
          },
        },
        "modal-out": {
          "100%": {
            visibility: "invisible",
            opacity: 0,
          },
          "99%": {
            visibility: "visible",
            opacity: 0.1,
          },
          "0%": {
            visibility: "visible",
            opacity: 1,
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px , -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px , 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
        "slide-fwd-center": {
          "0%": {
            transform: "translateZ(0)",
          },
          "100%": {
            transform: "translateZ(160)",
          },
        },
      },
      animation: {
        modal: "modal-in 0.3s ease-in-out ",
        "modal-out": "modal-out 0.3s ease-in-out ",
        blob: "blob 5s infinite",
        "slide-fwd-center":
          "slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
    },
  },
  plugins: [],
};
