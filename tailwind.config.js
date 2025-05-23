/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', 
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#034E7B',//no funciona
          'custom-celeste': '#034E7B',
        },
      },
    },
    plugins: [],
  }