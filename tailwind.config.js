/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0B1120',
        panel: '#0F1724',
        accent: '#2563EB',
        chip: '#0F1724',
        soft: 'rgba(255,255,255,0.06)',
        muted: 'rgba(255,255,255,0.38)',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
