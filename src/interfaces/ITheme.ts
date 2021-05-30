import { IPallete } from "./IPalette";
import React from "react";

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
  typography: {
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    h6: React.CSSProperties;
  };
}
