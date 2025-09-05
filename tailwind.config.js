/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:["Poppins"],
        merri:["Merriweather"]
      },
      colors:{
        primary:'#12A277',
        secondary:"#e7f6f1",
        glow:"#11291e",
        white:'#FFFFFF',
        dark:'#08140F',
        gery:'#56575B'
      },
      backgroundImage:{
        aeroplane: "url('/src/assets/images/aeroplane.png')"}
    },
  },
  plugins: [],
}
