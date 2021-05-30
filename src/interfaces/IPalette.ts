interface IPaletteColor {
  light: string;
  main: string;
  dark: string;
}

interface IPaletteText {
  primary: string;
  secondary: string;
  hint: string;
  disabled: string;
}

interface IPaletteCommon {
  white: string;
  black: string;
}

export interface IPallete {
  primary: IPaletteColor;
  secondary: IPaletteColor;
  text: IPaletteText;
  common: IPaletteCommon;
  success: string;
  error: string;
  warning: string;
  info: string;
}
