/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation:{
        back: 'backs 1s ease-in-out'
      },
      keyframes: {
        backs:{
          '100%' :{backgroundColor:'red' }
        }
      }
    },
  },
  plugins: [],
}
