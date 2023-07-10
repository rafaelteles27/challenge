/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html', './js/index.js'],
  theme: {
    extend: {
      colors: {
        "custom-color": "hsla(229, 8%, 60%, 0.308)",
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
      },
      
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
    
    fontWeight: {
      rubikregular: 400,
      rubikbold: 500,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.4rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
}

