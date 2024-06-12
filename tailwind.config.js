/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '400px':'400px',
        '546px':'546px',
      },
      fontSize: {
        '1xl':'16px',
        '52px':'52px',
        '18px':'18px',
        '40px':'40px',
        '20px':'20px',
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
        darkGrayText2: '#666666',
        grayText3: '#898989',
        grayText4: '#B0B0B0',
        grayText: '#9F9F9F',
        grayBackground: '#F4F5F7',
        salmon: '#FAF3EA',
        salmonHome: '#FCF8F3',
        salmonNew: '#E97171',
        cyanNew: '#2EC1AC',
        darkBlack: '#333333',
      },
    },
  },
  plugins: [],
}

