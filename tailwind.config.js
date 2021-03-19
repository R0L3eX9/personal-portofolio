module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#19191E",
        secondary: "#5bf55b"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        }
      },
      animation: {
        'fade-in': 'fade 1s ease-in'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
