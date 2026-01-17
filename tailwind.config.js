/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["'League Spartan'", "sans-serif"],
        body: ["'Poppins'", "sans-serif"],
      },
      colors: {
        primary: "#0F172A", // Deep Navy (Professional)
        secondary: "#1E293B", // Lighter Navy
        accent: "#D4AF37", // Metallic Gold (Luxury)
        "accent-hover": "#B5952F",
        light: "#F8FAFC", // Slate 50
        dark: "#020617",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
