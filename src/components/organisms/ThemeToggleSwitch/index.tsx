import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ToggleSwitch } from "@vite-project/components/atoms/ToggleSwitch";
import { useToggle } from "@vite-project/hooks/useToggle";
import { themeAtom } from "@vite-project/recoil/atom";
import { themeCatalog } from "@vite-project/styles/theme";

export function ThemeToggleSwitch() {
  const [toggleState, toggle] = useToggle(false);
  const setTheme = useSetRecoilState(themeAtom);

  useEffect(() => {
    const nextTheme = toggleState ? themeCatalog.dark : themeCatalog.light;

    setTheme(nextTheme);
  }, [toggleState]);

  return <ToggleSwitch onChange={() => toggle()} />;
}
