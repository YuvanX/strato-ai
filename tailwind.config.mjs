export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust to your structure
    ],
    theme: {
      extend: {
        fontFamily: {
          anton: ['Anton', 'sans-serif'],
          sans: ['Plus Jakarta Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };