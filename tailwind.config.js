module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'weather': `url("https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722375/night.png")`
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
