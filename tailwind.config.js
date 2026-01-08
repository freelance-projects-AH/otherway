/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7d000",
        secondary: "#e4e4e4",
        thread: "#F3F3F3",
        forth: "#f5f5f5",
        fontPrimary: "#f7d000",
        fontSecondary: "#7A7A7A",
        fontThread: "#7A7A7A",
        black: "#000000",
        secondryBlack:"#111010",
        white: "#FFFFFF",
        error: "#ef6b51",
          dark: {
          primary: "#f7d000", // Lighter version of primary for dark mode
          secondary: "#e4e4e4", // Dark gray background
          thread: "#374151", // Darker thread color
          fontPrimary: "#D4A574", // Lighter font primary
          fontSecondary: "#D1D5DB", // Light gray for secondary text
          fontThread: "#9CA3AF", // Medium gray for thread text
          background: "#000000", // Very dark background
          surface: "#1F2937", // Card/surface background
          newone: "#e4e4e4", // Additional color
        }
     },
     fontFamily: {
        exo: ['"Exo"', 'sans-serif'],
      },

    },
  },
  plugins: [],
};
