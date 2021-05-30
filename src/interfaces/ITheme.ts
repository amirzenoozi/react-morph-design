import { IPallete } from "./IPalette";
import { Typographies } from 'src/interfaces/typographies';

export interface ITheme {
  palette: IPallete;
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
}
