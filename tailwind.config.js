/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'mobile': '10px',
        'desktop': '20px'
      },
      colors: {
        'soft-red': '#EC755D',
        'cyan': '#76B5BC',
        'pale-cyan': '#B4E0E5',
        'dark-brown': '#382314',
        'medium-brown': '#92857A',
        'cream': '#F8E9DD',
        'pale-orange': '#FF9B86',
        'card-white': '#FFFBF6'
      },
      fontSize: {
        'h1': '48px',
        'h2': '32px',
        'h3': '24px',
        'h4': '18px',
        'body': '15px',
        'subtitle': '13px'
      },
      fontWeight: {
        'bold': 600,
        'medium': 500,
        'regular': 300,

      }
    },
  },
  plugins: [],
}

