/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#40c166",
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #40c166, #3d5afe, #ff6ec7)',
      },
      animation: {
        move: "move 3s ease-in-out infinite",
        gradient: "gradient-shift 3s infinite linear",
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        move: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'Lato', 'sans-serif'],
        accent: ['Raleway', 'Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
