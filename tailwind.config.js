/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "700px",
        md: "820px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1300px",
      },
    },

    extend: {},
  },
  plugins: [],
};
