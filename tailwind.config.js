/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '375': '375px',
        '415': '415px',
      },
      height: {
        '40': '40px',
        '600': '600px',
        '640': '640px',
      },
      maxWidth: {
        '400': '400px',
        '600': '600px'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

