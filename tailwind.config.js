/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peesoGreen: '#6acd3f',
        peesoRed: '#CE1127',
        peesoBlue: '#0037A8',
        peesoOffWhite: '#F3F3F3',
        peesoGreenHover: '#81e457',
        peesoBlack: '#303030',
        peesoLightBlue: '#4D87FF',
        peesoYellow: '#FCF596',
        peesoLightBlack: '#929292',
        peesoLightBackground: '#d6d6d6',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],  // Now 'Inter' is the default font for sans
      },
    },
    zIndex: {
        '100': '100',
        'auto': 'auto',
        '10': '10,',
        '20': '20,',
        '30': '30,',
        '40': '40,',
        '50': '50,',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  options: {
    safelist: [
      '-mt-[${marginTop}px]'
    ]
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

