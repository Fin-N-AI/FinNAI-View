/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#4A90E2", light: "#EAF2FD" },
        "background-light": "#F8F9FA",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Noto Sans KR", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.25rem",
      },
      boxShadow: {
        "lg-blue":
          "0 10px 15px -3px rgba(74,144,226,0.1), 0 4px 6px -4px rgba(74,144,226,0.1)",
      },
    },
  },
  plugins: [],
};
