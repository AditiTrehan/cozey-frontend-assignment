/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        beige: "#F7F8F6",
        black: "#0b2341",
        blackDes: "#19142b",
        darkBeige: "#ecebe7",
        blue: "#2b2c6e",
        lightBlue: "#53548a",
        skyBlue: "#69a2ff",
        mediumBeige: "#d0cec4",
        grey: "#4f6076",
        darkGrey: "#adadb7",
        lightGrey: "#bec8db",
      },
      zIndex: {
        997: "997",
        9999999: "9999999",
        999: "999",
      },
      padding: {
        200: "200px",
      },
      top: {
        22: "90px",
      },
      transitionDuration: {
        0.15: "01.5s",
      },
      width: {
        1440: "1440px",
        100: "400px",
      },
      height: {
        76: "300px",
        4.5: "18px",
      },
      fontSize: {
        15: "15px",
      },
      gridTemplateColumns: {
        onefr: "1fr 1fr 1fr",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      borderRadius: {
        xxl: "20px",
        "5xl": "100px",
      },
      lineHeight: {
        4.5: "17.56px",
        4.6: "18px",
      },
    },
  },
  plugins: [],
};
