import { createGlobalStyle } from 'styled-components';
import { persianFontFaces } from './fa-fonts';
import { englishFontFaces } from './en-fonts';

const GlobalStyle = createGlobalStyle`
  ${englishFontFaces}
  ${persianFontFaces}

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input, textarea, select, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
  }
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body{
    font-family: "Roboto";
    font-size:16px;
    line-height: 1.2rem;
    min-width: 100vw;
    min-height: 100vh;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section,textarea {
    display: block;
  }
  ol, ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  blockquote, q {
    quotes:none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content:'';
    content:none;
  }

  strong{
    font-family: "RobotoMedium";
    font-weight:normal;
  }

  a:visited,
  a{
    text-decoration: none;
    color: inherit;
  }
  figure {
    margin: 0;
  }
  button,
  [role="button"],
  input[type="submit"]{
    cursor: pointer;
  }
  input[type="text"],
  textarea{
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  button{
    background-color: transparent;
    box-shadow: none;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted;
  }

  .container {
    font-size: 1rem;
  }
`;

export default GlobalStyle;
