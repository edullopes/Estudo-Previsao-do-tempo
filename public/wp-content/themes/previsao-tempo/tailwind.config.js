/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    fontSize: {
      '3rem': '3rem',
      '4rem': '4rem',
    },
    extend: {
      colors: {
        'black-one': '#121212',
        'black-two': '#161616',
        'gray': '#FCFCFC',
      }, // Extend Tailwind's default colors
    },
  },
  plugins: [],
};

export default config;
