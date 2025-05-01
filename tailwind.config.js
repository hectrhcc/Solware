/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', 
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
     
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#034E7B',//no funciona
        },
      },
    },
    plugins: [],
  }