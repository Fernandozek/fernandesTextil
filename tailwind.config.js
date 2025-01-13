/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'max-xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'max-lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'max-md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'max-sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        "primary": '#fcb40a',
        "secondary": '#010101',
      },

    },
  },
  plugins: [],
}

