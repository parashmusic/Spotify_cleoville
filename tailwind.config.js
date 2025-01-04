/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s infinite",
      },
      colors: {
        spotifyGreen: "#1DB954",
      },
    },
  },
  plugins: [],
}

