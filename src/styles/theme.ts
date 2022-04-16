import { Theme } from "@emotion/react";

const darkTheme: Theme = {
  colors: {
    primary: "blue",
    secondary: "gray",
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "black",
    secondary: "white",
  },
};

export const themeCatalog = {
  dark: darkTheme,
  light: lightTheme,
};
