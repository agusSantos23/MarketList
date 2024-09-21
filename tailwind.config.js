/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'fall': 'fall 3s ease-in-out infinite'
      },
      keyframes:{
        "fall":{
          '50%':{ transform: "translateY(30%) rotate(180deg)"}
        }
      }
    },
  },
  plugins: [],
}

