/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: { max: "390px" },
      xxs: { max: "400px" },
      xs: { max: "425px" },
      xss: { max: "430px" },
      ssm: { max: "600px" },
      sm: { max: "640px" },
      xmd: { max: "700px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xlg: { max: "1200px" },
      xl: { max: "1280px" },
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
        brown: "#b35c1e",
        lightBrown: "#b3a49b",
      },
      zIndex: {
        997: "997",
        9999999: "9999999",
        999: "999",
      },
      padding: {
        200: "200px",
        3.7: "15px",
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
        25: "108px",
      },
      height: {
        62: "248px",
        68: "270px",
        76: "300px",
        78: "308px",
        4.5: "18px",
        5.5: "26px",
      },
      maxHeight: {
        11.5: "47px",
      },
      maxWidth: {
        "8xl": "1440px",
        "9xl": "1890px",
      },
      fontSize: {
        8: "8px",
        xxsm: "9px",
        xxs: "10px",
        11: "11px",
        xxl: "28px",
        15: "15px",
        xxxl: "32px",
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
        1.5: "8px",
        3.5: "13px",
        3.7: "14px",
        4.5: "17.56px",
        4.6: "18px",
        8.5: "34px",
        16: "46px",
      },
    },
  },
  plugins: [],
};
