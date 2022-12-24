/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{tsx, js,ts,jsx}",
    "./components/**/*.{tsx, js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#030807",
        },
        accent: {
          900: "#47FFDD",
        },
        accentdark: {
          900: "#2db59c",
        }
      },
      transitionProperty :{
        'width': 'width',
      }
    },
  },
  plugins: [],
};
