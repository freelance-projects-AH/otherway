/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        secondryBlack: "#111010",
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
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 3s ease-out",
        "slide-in-left": "slide-in-left 3s ease-out",
        "slide-in-right": "slide-in-right 3s ease-out",
        "scale-in": "scale-in 3s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
