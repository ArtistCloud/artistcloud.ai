/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      },
      fontFamily: {
        tommy: ["Tommy"],
        tommy_light: ["Tommy_light"],
        tommy_bold: ["Tommy_bold"],
      },
    },
  },
  plugins: [],
};
