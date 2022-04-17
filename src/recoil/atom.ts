import { atom } from "recoil";
import { themeCatalog } from "../styles/theme";

export const themeAtom = atom({
  key: "theme",
  default: themeCatalog.light,
});
