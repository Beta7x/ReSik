/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#47A359",
        secondary: "#86CA94",
        tertiary:"#EFF8F1",
        text:{
          primary:"#2F2F2F",
          secondary:"#959595"
        }
      },
    },
  },
  plugins: [],
};
