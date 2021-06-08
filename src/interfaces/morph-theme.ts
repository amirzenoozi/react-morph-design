import { MorphPalette } from "./morph-palette";
import { Typographies } from 'src/interfaces/typographies';

export interface MorphTheme {
  palette: MorphPalette;
  breakPoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string
    xlg: string
    xxlg: string
  };
  typography: Typographies;
  gridType: 12 | 24,
}
