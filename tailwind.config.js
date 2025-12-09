/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  safelist: [
    "text-positive",
    "text-negative",
    "text-neutral",
    "text-positive-bg-light",
    "text-negative-bg-light",
    "text-neutral-bg-light"
  ],
  theme: {
    extend: {
      colors: {
        positive: "#DC2626",
        negative: "#2563EB",
        neutral: "#6B7280",
        "positive-bg-light": "#FEF2F2",
        "negative-bg-light": "#EFF6FF",
        "neutral-bg-light": "#F3F4F6",

        "background-light": "#F7F9FC",
        "background-dark": "#111827",
        "card-light": "#FFFFFF",
        "card-dark": "#1F2937",
        "border-light": "#E5E7EB",
        "border-dark": "#374151",
        "text-primary-light": "#1F2937",
        "text-primary-dark": "#F9FAFB",
        "text-secondary-light": "#6B7280",
        "text-secondary-dark": "#9CA3AF",

        primary: {
          DEFAULT: "#4A90E2",
          light: "#EAF2FD",
          hover: "#2563EB",
        },
      }
    },
  },
  plugins: [],
};
