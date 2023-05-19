import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    gray: {
      50: "#F2F2F2",
      100: "#D9D9D9",
      200: "#969CB2",
      300: "#333333",
    },
    green: {
      400: "#147065",
      500: "#12A454",
      700: "#33CC95",
    },
    red: {
      500: "#E52E4D",
      700: "#D70A0A",
    },
    black: "#121212",
    white: "#FFFFFF",
  },
  fonts: {
    Poppins: {
      normal: "Poppins-Regular",
      bold: "Poppins-Bold",
      semiBold: "Poppins-SemiBold",
    },
  },
});

export default theme;
