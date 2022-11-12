/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'boxanimetions':'boxanimetions 1s linear',
      },
      keyframes: {
        boxanimetions: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '25%': {
            transform: 'translateX(-75%)',
            opacity: '0.25'
          },
          '50%': {
            transform: 'translateX(-50%)',
            opacity: '0.5'
          },
          '75%': {
            transform: 'translateX(-25%)',
            opacity: '0.75'
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1'
          }
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
