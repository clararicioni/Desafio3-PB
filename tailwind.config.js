/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '1xl':'16px',
      },
      spacing: {
        '50px': '50px',
        '16px' : '16px',
      },
      fontFamily: {
        poppins: ["Poppins","sans-serif"],
      },
      colors: {
        yellowPrimary: '#B88E2F',
        yellowBackground: '#FFF3E3',
        darkGrayText: '#3A3A3A',
        grayText: '#9F9F9F',
        grayBackground: '#F4F5F7',
        salmon: '#FAF3EA',
        salmonHome: '#FCF8F3',
        salmonNew: '#E97171',
        cyanNew: '#2EC1AC',
      },
    },
  },
  plugins: [],
}

