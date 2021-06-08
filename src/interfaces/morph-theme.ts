import { MorphPalette } from "./morph-palette";
import { Typographies } from 'src/interfaces/typographies';

export interface MorphTheme {
  palette: MorphPalette;
  widths: {
    xsm: string;
    md: string;
    xmd: string;
    lg: string;
    slg: string;
    xlg: string;
    xxlg: string;
  };
  typography: Typographies;
  girdType: 12 | 24,
}
