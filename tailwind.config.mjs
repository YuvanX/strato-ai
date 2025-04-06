export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust to your structure
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'sans-serif'], // 👈 this sets default
        },
      },
    },
    plugins: [],
  };