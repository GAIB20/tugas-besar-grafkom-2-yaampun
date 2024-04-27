/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"
            ,"index.html",
            ".dist/**/*.{html,js"],
  theme: {
    extend: {
      //reggae
      fontFamily: {
        reggae: ['Reggae One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}