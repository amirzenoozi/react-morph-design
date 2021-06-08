interface MorphPaletteColor {
  light: string;
  main: string;
  dark: string;
}

interface MorphPaletteText {
  primary: string;
  secondary: string;
  hint: string;
  disabled: string;
}

interface MorphPaletteCommon {
  white: string;
  black: string;
}

export interface MorphPalette {
  primary: MorphPaletteColor;
  secondary: MorphPaletteColor;
  text: MorphPaletteText;
  common: MorphPaletteCommon;
  success: string;
  error: string;
  warning: string;
  info: string;
}
