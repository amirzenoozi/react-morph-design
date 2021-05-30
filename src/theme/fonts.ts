import { css } from "styled-components";

import MyriadProRegularEOT from "../assets/fonts/MyriadPro-Regular.eot";
import MyriadProRegularTTF from "../assets/fonts/MyriadPro-Regular.ttf";
import MyriadProRegularWOFF from "../assets/fonts/MyriadPro-Regular.woff";
import MyriadProRegularWOFF2 from "../assets/fonts/MyriadPro-Regular.woff2";

import MyriadProMediumEOT from "../assets/fonts/MyriadPro-Semibold.eot";
import MyriadProMediumTTF from "../assets/fonts/MyriadPro-Semibold.ttf";
import MyriadProMediumWOFF from "../assets/fonts/MyriadPro-Semibold.woff";
import MyriadProMediumWOFF2 from "../assets/fonts/MyriadPro-Semibold.woff2";

import MyriadProBoldEOT from "../assets/fonts/MyriadPro-Bold.eot";
import MyriadProBoldTTF from "../assets/fonts/MyriadPro-Bold.ttf";
import MyriadProBoldWOFF from "../assets/fonts/MyriadPro-Bold.woff";
import MyriadProBoldWOFF2 from "../assets/fonts/MyriadPro-Bold.woff2";

import CodeBold from "../assets/fonts/Inconsolata-Bold.ttf";
import CodeRegular from "../assets/fonts/Inconsolata-Regular.ttf";

export const fontFaces = css`
  @font-face {
    font-family: "MyriadPro";
    font-style: normal;
    font-weight: normal;
    src: url(${MyriadProRegularEOT});
    src: url("${MyriadProRegularEOT}?#iefix") format("embedded-opentype");
    src: url(${MyriadProRegularWOFF2}) format("woff2");
    src: url(${MyriadProRegularWOFF}) format("woff");
    src: url(${MyriadProRegularTTF}) format("truetype");
  }

  @font-face {
    font-family: "MyriadProMedium";
    font-style: normal;
    font-weight: 500;
    src: url(${MyriadProMediumEOT});
    src: url("${MyriadProMediumEOT}?#iefix") format("embedded-opentype");
    src: url(${MyriadProMediumWOFF2}) format("woff2");
    src: url(${MyriadProMediumWOFF}) format("woff");
    src: url(${MyriadProMediumTTF}) format("truetype");
  }
  @font-face {
    font-family: "MyriadProBold";
    font-style: normal;
    font-weight: bold;
    src: url(${MyriadProBoldEOT});
    src: url("${MyriadProBoldEOT}?#iefix") format("embedded-opentype");
    src: url(${MyriadProBoldWOFF2}) format("woff2");
    src: url(${MyriadProBoldWOFF}) format("woff");
    src: url(${MyriadProBoldTTF}) format("truetype");
  }

  /*--- Codes Fonts ---*/
  @font-face {
    font-family: "CodeBold";
    font-style: normal;
    font-weight: normal;
    src: url(${CodeBold}) format("truetype");
  }
  @font-face {
    font-family: "CodeRegular";
    font-style: normal;
    font-weight: normal;
    src: url(${CodeRegular}) format("truetype");
  }
`;
