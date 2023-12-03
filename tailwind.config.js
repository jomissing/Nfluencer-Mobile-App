/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./pages/**/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "nft-primary-light": "rgb(120,82,243)",
        "nft-primary-dark": "rgb(96,66,196)",
        "nft-primary-transparent": "rgb(226,221,251)",
      },
    },
  },
  plugins: [],
};
