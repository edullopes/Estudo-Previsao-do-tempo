/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
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
