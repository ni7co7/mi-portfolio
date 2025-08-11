// tailwind.config.js
module.exports = {
  darkMode: 'class', // Permite cambiar a modo oscuro con una clase "dark"
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // Indigo
        secondary: "#9333EA", // Purple
        accent: "#EC4899",    // Pink
        dark: "#0F172A",
        light: "#F1F5F9",
        muted: "#94A3B8"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-main': "linear-gradient(to right, #4F46E5, #9333EA, #EC4899)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
