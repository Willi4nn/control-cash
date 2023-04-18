import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    black: {
      500: "#121212",
    },
    gray: {
      50: "#F2F2F2",
      100: "#969CB2",
      500: "#333333",
      700: "#147065",
    },
    red: {
      500: "#E52E4D",
      700: "#D70A0A",
    },
    green: {
      500: "#12A454",
      700: "#33CC95",
    },
  },
});

export default theme;
