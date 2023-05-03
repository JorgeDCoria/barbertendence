/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_base: "#7F217D",
        primary_50: "#FAEBF9",
        primary_100: "#EFC2EE",
        primary_200: "#E59AE3",
        primary_300: "#DA71D8",
        primary_400: "#D049CD",
        primary_500: "#B62FB3",
        primary_600: "#8E258B",
        primary_700: "#651A64",
        primary_800: "#3D103C",
        primary_900: "#140514",
        secondary_base: "#446FB2",
        secondary_50: "#EDF1F8",
        secondary_100: "#C8D5EA",
        secondary_200: "#A3B9DC",
        secondary_300: "#7E9DCE",
        secondary_400: "#5981C0",
        secondary_500: "#3F68A6",
        secondary_600: "#315181",
        secondary_700: "#233A5C",
        secondary_800: "#152337",
        secondary_900: "#070C12",
        neutral_50: "#F3F2F3",
        neutral_100: "#DAD7DA",
        neutral_200: "#C2BDC2",
        neutral_300: "#A9A2A9",
        neutral_400: "#918891",
        neutral_500: "#776E77",
        neutral_600: "#5D565D",
        neutral_700: "#423D42",
        neutral_800: "#282528",
        neutral_900: "#0D0C0D",
      },
    },
  },
  plugins: [],
};
