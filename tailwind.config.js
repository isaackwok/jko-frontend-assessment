/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#BA2943",
          600: "#BA2943",
          700: "#CF4C5F",
          400: "#6D2235",
        },
        gray: {
          DEFAULT: "#43465E",
          700: "#545872",
          600: "#43465E",
          400: "#2F3140",
          300: "#272934",
          200: "#1D1F27",
          100: "#17181D",
        },
      },
      fontSize: {
        "p2": ["0.875rem", {
          lineHeight: "1.375rem",
          fontWeight: "400",
        }],
        "p3": ["0.75rem", {
          lineHeight: "1.25rem",
          fontWeight: "400",
        }],
        "h4": ["1.25rem", {
          lineHeight: "1.75rem",
          fontWeight: "500",
        }],
        "h5": ["1rem", {
          lineHeight: "1.5rem",
          fontWeight: "500",
        }],
        "button-large": ["1.125rem", {
          lineHeight: "1.5rem",
          fontWeight: "600",
        }],
      }
    },
  },
  plugins: [],
};
