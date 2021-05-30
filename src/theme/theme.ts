import { ITheme } from "../interfaces/ITheme";
import { rem } from "./functions";
import { lightPalette } from "./pallete";

export const theme: ITheme = {
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
    body1: { fontSize: rem(16), padding: 2 },
    body2: { fontSize: rem(14) },
    caption: { fontSize: rem(13) },
    h1: { fontSize: rem(24) },
    h2: { fontSize: rem(22) },
    h3: { fontSize: rem(20) },
    h4: { fontSize: rem(18) },
    h5: { fontSize: rem(17) },
    h6: { fontSize: rem(16) },
  },
};
