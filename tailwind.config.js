/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        156: '39rem',
        192: '48rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'selected-gray': '#D3D3D3',
      },
      boxShadow: {
        text: '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {},
  plugins: [],
};
