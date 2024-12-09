/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-header': 'calc(100vh - 65.2px)', // Adjust as needed
      },
      colors: {
        dark: "#0f1014",
        darkLight: "#16171B",
        brandDark: {
          50: "#F7F8FD",   // Lightest shade, soft and slightly off-white
          100: "#F2F3F8",  // Subtle light gray
          200: "#E2E2E9",  // Light gray
          300: "#BABAC5",  // Medium gray
          400: "#868698",  // Grayish tone with a hint of blue/purple
          500: "#383842",  // Base brand dark color
          600: "#2A2A32",  // Darker tone, for hover states or accents
          700: "#26262C",  // Even darker gray
          800: "#1E1E24",  // Deep dark tone
          900: "#17171C",  // Near-black, very dark
          950: "#0E0E11"   // Almost black, perfect for deep shadows or borders
        },
      },
    },
  },
  plugins: [],
}