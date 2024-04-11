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
      },
      zIndex: {
        997: "997",
        9999999: "9999999",
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
      },
      fontSize: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
