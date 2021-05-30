import { css } from "styled-components";

import ShabnamThinEOT from "../assets/fonts/fa/Shabnam-Thin.eot";
import ShabnamThinWOFF2 from "../assets/fonts/fa/Shabnam-Thin.woff2";
import ShabnamThinWOFF from "../assets/fonts/fa/Shabnam-Thin.woff";
import ShabnamThinTTF from "../assets/fonts/fa/Shabnam-Thin.ttf";

import ShabnamLightEOT from "../assets/fonts/fa/Shabnam-Light.eot";
import ShabnamLightWOFF2 from "../assets/fonts/fa/Shabnam-Light.woff2";
import ShabnamLightWOFF from "../assets/fonts/fa/Shabnam-Light.woff";
import ShabnamLightTTF from "../assets/fonts/fa/Shabnam-Light.ttf";

import ShabnamRegularEOT from "../assets/fonts/fa/shabnam.eot";
import ShabnamRegularWOFF2 from "../assets/fonts/fa/shabnam.woff2";
import ShabnamRegularWOFF from "../assets/fonts/fa/shabnam.woff";
import ShabnamRegularTTF from "../assets/fonts/fa/shabnam.ttf";

import ShabnamMediumEOT from "../assets/fonts/fa/Shabnam-Medium.eot";
import ShabnamMediumWOFF2 from "../assets/fonts/fa/Shabnam-Medium.woff2";
import ShabnamMediumWOFF from "../assets/fonts/fa/Shabnam-Medium.woff";
import ShabnamMediumTTF from "../assets/fonts/fa/Shabnam-Medium.ttf";

import ShabnamBoldEOT from "../assets/fonts/fa/Shabnam-Bold.eot";
import ShabnamBoldWOFF2 from "../assets/fonts/fa/Shabnam-Bold.woff2";
import ShabnamBoldWOFF from "../assets/fonts/fa/Shabnam-Bold.woff";
import ShabnamBoldTTF from "../assets/fonts/fa/Shabnam-Bold.ttf";

export const persianFontFaces = css`
  @font-face {
    font-family: "ShabnamThin";
    font-style: normal;
    font-weight: normal;
    src: url(${ShabnamThinEOT});
    src: url("${ShabnamThinEOT}?#iefix") format("embedded-opentype");
    src: url(${ShabnamThinWOFF2}) format("woff2");
    src: url(${ShabnamThinWOFF}) format("woff");
    src: url(${ShabnamThinTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "ShabnamLight";
    font-style: normal;
    font-weight: normal;
    src: url(${ShabnamLightEOT});
    src: url("${ShabnamLightEOT}?#iefix") format("embedded-opentype");
    src: url(${ShabnamLightWOFF2}) format("woff2");
    src: url(${ShabnamLightWOFF}) format("woff");
    src: url(${ShabnamLightTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "Shabnam";
    font-style: normal;
    font-weight: normal;
    src: url(${ShabnamRegularEOT});
    src: url("${ShabnamRegularEOT}?#iefix") format("embedded-opentype");
    src: url(${ShabnamRegularWOFF2}) format("woff2");
    src: url(${ShabnamRegularWOFF}) format("woff");
    src: url(${ShabnamRegularTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "ShabnamMedium";
    font-style: normal;
    font-weight: normal;
    src: url(${ShabnamMediumEOT});
    src: url("${ShabnamMediumEOT}?#iefix") format("embedded-opentype");
    src: url(${ShabnamMediumWOFF2}) format("woff2");
    src: url(${ShabnamMediumWOFF}) format("woff");
    src: url(${ShabnamMediumTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "ShabnamBold";
    font-style: normal;
    font-weight: normal;
    src: url(${ShabnamBoldEOT});
    src: url("${ShabnamBoldEOT}?#iefix") format("embedded-opentype");
    src: url(${ShabnamBoldWOFF2}) format("woff2");
    src: url(${ShabnamBoldWOFF}) format("woff");
    src: url(${ShabnamBoldTTF}) format("truetype");
  }
`;
