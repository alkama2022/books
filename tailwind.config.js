/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#0f7a4a",
          600: "#0d6a3f",
          700: "#0a5231",
          900: "#052e1b"
        },
        ink: "#0f172a",
        muted: "#64748b",
        surface: "#f8fafc"
      },
      fontFamily: {
        sans: ["Inter","ui-sans-serif","system-ui","sans-serif"],
        display: ["Plus Jakarta Sans","Inter","sans-serif"]
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px"
      }
    }
  },
  plugins: []
}
