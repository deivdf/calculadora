/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx,tsx,ts}',
    './components/**/*.{html,js},jsx.tsx,ts',
    './src/**/*.{html,js,jsx,ts,tsx}', // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

