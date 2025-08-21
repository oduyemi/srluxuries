/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        butter: "#E4CB9C",
        goldie: "#CD8F2C",
        subtext: "#B0B0B0",
        tan: "#352208",
        brownie: "#564946",
        ggreen: "#558564",
        bluey: "#39A9DB",
        placeholderColor: "#DEDEDE"
      },
    },
  },
  plugins: [],
};

