/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '3rem': '3rem',
      '4rem': '4rem',
    },
    extend: {
      colors: {
        'black-one': '#121212',
        'black-two': '#161616',
        'gray': '#FCFCFC',
        'gray-400': '#9CA3AF',
      },
      spacing: {
        '84px': '84px',
      }
    },
  },
  plugins: [],
};

export default config;
