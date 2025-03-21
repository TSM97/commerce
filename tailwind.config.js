/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        lobster: ['Lobster-Two', 'cursive'],
        martel: ['Martel', 'serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          750: '#070707',
          500: '#171717',
          250: '#262626',
          100: '#4c4845',
        },
        white: {
          DEFAULT: 'rgb(255, 251, 242)',
          default: '#ffffff',
        },
        honey: {
          DEFAULT: '#efa926',
        },
        primary: {
          DEFAULT: '#e8772e',
          750: '#e8894b',
          500: '#e89159',
          250: '#e8a67b',
          100: '#e8ccbb',
        },
        svgColor: {
          DEFAULT: '#fce8d5',
        },
      },
      grayscale: {
        90: '90%',
      }
    },
  },
  plugins: [],
};
