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
        "myGray": "#dcdcdc",
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
        'lateral-orange': '-30px 0 30px -15px rgba(250, 145, 60, 0.5), 30px 0 30px -15px rgba(250, 145, 60, 0.5)',
        'lateral-violet': '-30px 0 30px -15px rgba(148, 0, 211, 0.5), 30px 0 30px -15px rgba(148, 0, 211, 0.5)', 
        'lateral-green': '-30px 0 30px -15px rgba(0, 128, 0, 0.5), 30px 0 30px -15px rgba(0, 128, 0, 0.5)', 
        'green-focus': '0 3px 10px 1px rgba(0, 170, 0, 0.7)',
      },
    },
  },
  plugins: [],
}

