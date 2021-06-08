import { MorphTheme } from "../interfaces/morph-theme";
import { rem } from "./functions";
import { lightPalette } from "./pallete";

export const theme: MorphTheme = {
  palette: lightPalette,
  widths: {
    xsm: rem(500),
    md: rem(1050),
    xmd: rem(1200),
    lg: rem(1400),
    slg: rem(1600),
    xlg: rem(1900),
    xxlg: rem(2200),
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
  girdType: 24,
};
