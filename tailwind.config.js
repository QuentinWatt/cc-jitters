/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sand": {
          '500': "#e4bc84",
        },
        "coffee-brown": {
          '500': "#ad6d2f",
          '600': "#8c5622",
        },
        "dark-brown": {
          '500': "#80411e",
          '600': "#6e3314"
        }
      }
    },
  },
  plugins: [],
}
