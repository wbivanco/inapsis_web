/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inapsis-orange': '#E94B35',
        'inapsis-purple': '#7D52A1',
        'inapsis-orange-light': '#f5654d',
        'inapsis-purple-light': '#9b6bb8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
