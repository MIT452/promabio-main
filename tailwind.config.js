/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily:{
        stencil:["stencil","sans-serif"],
        cereal:["Cereal","sans-serif"],
      },
      fontSize:{
        title : "5vw",
        titleMd : '2vw',
        normal : ['1.125rem', '1.8']
      },
      colors:{
        primary : '#84563c',
        secondary :'#556b2f'
      }
    },
  },
  plugins: [],
}

