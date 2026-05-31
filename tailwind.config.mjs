/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand color tokens — mirror Figma variables (file: YMcjZDwEk3buSTr0mrCz8a)
        dark: '#20160e',
        cream: '#fdfcfb',
        orange: '#ca670b',
        secondary: '#2e1d0f99',
        'brand-border': '#ffffff1a',
        // Aliases used in templates
        'cream-1': '#fdfcfb',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
