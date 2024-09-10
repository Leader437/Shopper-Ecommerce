/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blackHeading: "#090909",
        blackContent: "#171717",
        customRed: "#ff4141",
        customDarkRed: "#d83939",
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '1200px',
          paddingRight: '24px',
          paddingLeft: '24px',
          '@screen md': {
            paddingRight: '32px',
            paddingLeft: '32px',
          },
          '@screen lg': {
            paddingRight: '52px',
            paddingLeft: '52px',
          },
        },
      });
    },
  ],
}