/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#20160e',
        secondary: 'rgba(46,29,15,0.6)',
        accent: '#facc15',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Saans-TRIAL"', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
