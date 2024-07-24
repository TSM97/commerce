/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      margin: {
        DEFAULT: 'auto',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        white: 'rgb(255, 251, 242)',
        primary: {
          DEFAULT: '#e8772e',
        },
      },
    },
  },
  plugins: [],
};
