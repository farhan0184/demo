/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        "3xl": "0px 0px 8px -1px rgba(0,0,0,0.75)"
      }
    },
  },
  plugins: [require("daisyui")],
}

