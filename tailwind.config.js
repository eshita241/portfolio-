/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'black':'#0d1117',
      'grey':'#21262d',
      'white':'#fafafa',
      'light':'#ffffff',
      'text2':"#838f9c",
      'dark_green':'#007d12',
      'green':'#1dad32',
    },

    screens:{
      'xsm':'320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1600px'
    },
    extend: {
      space: {
        '5px': '5px',
      },
      grayscale: ['hover', 'focus'],
    },
  },
  plugins: [],
}

