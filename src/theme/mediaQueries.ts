export const breakpoints = {
  xxs: 400,
  xs: 500,
  sm: 800,
  md: 1200,
  lg: 1400,
  slg: 1600,
  xlg: 1900,
};
// ***** EXAMPLE: ${mqMinMax("sm", "md")`background: green;`};
export const mqMax = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string): string =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
export const mqMin = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string): string =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
export const mqMinMax = ( min: keyof typeof breakpoints, max: keyof typeof breakpoints ) => {
  return (style: TemplateStringsArray | string): string =>
    `@media only screen and (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max]}px) { ${style} }`;
};
