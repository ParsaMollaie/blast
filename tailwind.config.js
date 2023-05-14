/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blastPrimary: {
          100: "#f8fafc",
          200: "#db2777",
        },
        blastDark: {
          100: "#F0BC5E",
          200: "#eca521",
        },
        blastSecondary: {
          100: "#630000",
        },
      },
    },
    plugins: [],
  },
};
