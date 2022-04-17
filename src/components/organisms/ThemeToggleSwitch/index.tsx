import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useToggle } from "../../../hooks/useToggle";
import { themeAtom } from "../../../recoil/atom";
import { themeCatalog } from "../../../styles/theme";
import { ToggleSwitch } from "../../atoms/ToggleSwitch";

export function ThemeToggleSwitch() {
  const [toggleState, toggle] = useToggle(false);
  const setTheme = useSetRecoilState(themeAtom);

  useEffect(() => {
    const nextTheme = toggleState ? themeCatalog.dark : themeCatalog.light;

    setTheme(nextTheme);
  }, [toggleState]);

  return <ToggleSwitch onChange={() => toggle()} />;
}
