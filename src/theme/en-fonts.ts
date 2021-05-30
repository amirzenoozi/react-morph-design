import { css } from "styled-components";

import RobotoThinTTF from "../assets/fonts/en/Roboto-Thin.ttf";
import RobotoLightTTF from "../assets/fonts/en/Roboto-Light.ttf";
import RobotoRegularTTF from "../assets/fonts/en/Roboto-Regular.ttf";
import RobotoMediumTTF from "../assets/fonts/en/Roboto-Medium.ttf";
import RobotoBoldTTF from "../assets/fonts/en/Roboto-Bold.ttf";

export const englishFontFaces = css`
  @font-face {
    font-family: "RobotoThin";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoThinTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "RobotoLight";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoLightTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoRegularTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "RobotoMedium";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoMediumTTF}) format("truetype");
  }
  
  @font-face {
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoBoldTTF}) format("truetype");
  }
`;
