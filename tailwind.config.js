/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardGreen: '#4E9F3D', // Green for the table
        cardRed: '#D94F4F',    // Red for the heart, diamond suits
        cardGold: '#FFD700',   // Gold accents (royalty theme)
        cardBlack: '#1E1E1E',  // Dark background for the navbar
        cardWhite: '#F4F4F9',  // Soft white for contrast
        cardAccent: '#E5B56D', // A muted gold for borders or highlights
      },
    },
  },
  plugins: [],
};



