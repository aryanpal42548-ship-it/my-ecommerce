/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          yellow: '#FF9900',
          blue: '#146EB4',
          orange: '#FF9900',
          gray: '#232F3E',
          lightgray: '#EAEDED',
          darkgray: '#131921',
        }
      }
    },
  },
  plugins: [],
}
