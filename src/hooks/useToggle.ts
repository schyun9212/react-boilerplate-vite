import { useCallback, useState } from "react";

export function useToggle(initialState = false): [boolean, (nextValue?: boolean) => void] {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(
    (nextValue?: boolean) => (nextValue ? setState(nextValue) : setState((s) => !s)),
    []
  );

  return [state, toggle];
}
