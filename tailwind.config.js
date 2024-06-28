module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#546AAB',
        hover: '#1cbacf',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: '#546AAB',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          transition: 'transform 0.3s ease-in-out', 
          '&:hover': {
            backgroundColor: '#1cbacf',
            transform: 'translateY(-3px)', 
          },
        },
      });
    }
  ],
}
