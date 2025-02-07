/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    // disable container class
    container: false
  }
}
