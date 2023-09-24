module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violetDark: "#6d6875",
        violetDarkHover: "#534f5a",
        main: "#e5989b",
        mainDark: "#c9787b",
        violetExtraDark:"#33364e",
        violetExtraDarkHover:"#292a3e",
        pinkDark: "#b5838d",
        salmon: "#ffb4a2",
        salmonLight: "#ffcdb2",
        indicator: "rgba(255, 255, 255, 0.5)"
      },
      backgroundImage: {
        pattern: "url('https://www.transparenttextures.com/patterns/cubes.png')",
        bgCarousel1: "linear-gradient(to left, rgba(244, 172, 183, 0.9), rgba(109, 104, 117, 0.7)), url(/bgCarousel1.png)",
        bgCarousel2: "linear-gradient(to left, rgba(244, 172, 183, 0.9), rgba(109, 104, 117, 0.7)), url(/bgCarousel2.png)",
        bgCarousel3: "linear-gradient(to left, rgba(244, 172, 183, 0.9), rgba(109, 104, 117, 0.8)), url(/bgCarousel3.png)",
      },
      flex: {
        carouselItem: "0 0 100%",
      },
      fontSize: {
        workoutItemStat: "0.6rem"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
