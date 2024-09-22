/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'lilita': ['Lilita One', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      
      colors:{
        "myWhite": "#F9F9F9",
        "myBlack": "#212121"
      },
      animation:{
        'fall': 'fall 3s ease-in-out infinite'
      },
      keyframes:{
        "fall":{
          '50%':{ transform: "translateY(30%) rotate(180deg)"}
        }
      },
      boxShadow: {
        'custom-lateral-yellow': '-30px 0 30px -15px rgba(255, 255, 0, 0.5), 30px 0 30px -15px rgba(255, 255, 0, 0.5)',
        'custom-lateral-violet': '-30px 0 30px -15px rgba(148, 0, 211, 0.5), 30px 0 30px -15px rgba(148, 0, 211, 0.5)', 
        'custom-lateral-green': '-30px 0 30px -15px rgba(0, 128, 0, 0.5), 30px 0 30px -15px rgba(0, 128, 0, 0.5)', 
      },
    },
  },
  plugins: [],
}

