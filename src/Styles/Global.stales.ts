import {createGlobalStyle} from "styled-components";
import {baseTheme} from "./Theme.stales";

//in px
const scrollbar_width = 10;

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: ${scrollbar_width};
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 ${scrollbar_width} ${scrollbar_width} ${baseTheme.colors.gray3};
    border: solid 3px transparent;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 ${scrollbar_width} ${scrollbar_width} ${baseTheme.colors.pantone295c};
    border: solid 3px transparent;
    border-radius: 5px;
  }
`