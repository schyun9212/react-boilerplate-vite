import { Theme } from "../types";

const darkTheme: Theme = {
  colors: {
    primary: "white",
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "black",
  },
};

export const themeCatalog = {
  dark: darkTheme,
  light: lightTheme,
};
