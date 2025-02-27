/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card": '0px 4px 6px 0px rgba(0,0,0,0.3)'
      }
    }
  },
  plugins: [],
  corePlugins: {
    // disable container class
    container: false
  }
}
