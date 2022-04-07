module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html,svg}",
    "./svgs/**/*.{vue,js,ts,jsx,tsx,html,svg}"
  ],
  theme: {
    extend: {
      keyframes:{
        wiggle:{
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(45deg)' },
        }
      },
      animation:{
        wiggle: 'wiggle 0.25s ease-in-out'
      }
    },
  },
  plugins: [],
}
