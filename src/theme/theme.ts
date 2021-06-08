import { MorphTheme } from "../interfaces/morph-theme";
import { rem } from "./functions";
import { lightPalette } from "./pallete";

export const theme: MorphTheme = {
  palette: lightPalette,
  breakPoints: {
    xs: rem(500),
    sm: rem(800),
    md: rem(1050),
    lg: rem(1200),
    xlg: rem(1400),
    xxlg: rem(1600),
  },
  typography: {
    head1: 48,
    head2: 32,
    title1: 22,
    title2: 18,
    body1: 16,
    body2: 14,
    cap1: 12,
    cap2: 10,
  },
  gridType: 24,
};
