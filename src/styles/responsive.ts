import { createBreakpoints } from "@mui/system";

const breakpoint = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const breakpoints = createBreakpoints({
  values: breakpoint,
});
