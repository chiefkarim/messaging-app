module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {},
  },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  }