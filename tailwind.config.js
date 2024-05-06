/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,css}',  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        // 'sandias': "linear-gradient(rgba(0, 15, 40, 1), rgba(0, 0, 10, 0.7)), url('sandias.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

