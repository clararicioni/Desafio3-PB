/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '1px':'1px',
      },
      borderRadius:{
        '10px':'10px',
      },
      padding:{
        '100px':'100px',
      },
      maxWidth:{
        '500px':'500px',
        '546px':'546px',
        '422px':'422px',
        '372px':'372px',
        '300px':'300px',
        '176px':'176px',  
        '644px':'644px',
        '453px':'453px',
      },
      maxHeight:{
        '400px':'400px',
        '75px':'75px',
      },
      height:{
        '100px':'100px',
      },
      fontSize: {
        '1xl':'16px',
        '52px':'52px',
        '18px':'18px',
        '40px':'40px',
        '20px':'20px',
        '25px':'25px',
        '28px':'28px',
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
        grayText: '#9F9F9F',
        grayText3: '#898989',
        grayText4: '#B0B0B0',
        grayText5: '#616161',
        grayBackground: '#F4F5F7',
        salmon: '#FAF3EA',
        salmonHome: '#FCF8F3',
        salmonCheckout: '#F9F1E7',
        salmonNew: '#E97171',
        cyanNew: '#2EC1AC',
        darkBlack: '#333333',
        darkBlack2: '#242424',
        discountBallColor: '#E97171',
        newBallColor: '#2EC1AC',
      },
    },
  },
  plugins: [],
}

