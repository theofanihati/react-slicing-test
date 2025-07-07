module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark_green: '#315035',
        brown: '#9B663C',
        green: '#467E3D',
        yellow: '#FE8A04',
        red: '#C83C21',
      },
    },
  },
  plugins: [],
}