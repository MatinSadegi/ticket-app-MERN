module.exports = {
  content: ['./src/**/*.{js,jsx}', './src/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md:'768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        yekan: ['yekan'],
        poppinss: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'], 
      },
      backgroundImage: {
        notes: "url('/src/images/pexels-jess-bailey-designs-1764433.jpg')",
      }, 
    },
  },
  plugins: [],
};
