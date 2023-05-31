import styled, {css} from "styled-components";
import {baseTheme} from "../../Styles/Theme.stales";

const viewBasic = css`
  background: ${baseTheme.colors.gray3};
  border-color: ${baseTheme.colors.pantone289c};
  color: black;
  transition: ${baseTheme.durations.ms300};

  &:hover {
    background: ${baseTheme.colors.pantone295c};
    transition: ${baseTheme.durations.ms300};
    
  }
}
`

const viewRed = css`
  background: ${baseTheme.colors.pantone200c};
  border-color: ${baseTheme.colors.pantone187c };
  transition: ${baseTheme.durations.ms300};
  color: black;
  
  &:hover {
    background: ${baseTheme.colors.pantone289c };
    transition: ${baseTheme.durations.ms300};
    color: white;
    
  }
}
`

const viewRedReverse = css`
  background: ${baseTheme.colors.gray3};
  border-color: ${baseTheme.colors.pantone289c};
  color: black;
  transition: ${baseTheme.durations.ms300};

  &:hover {
    background: ${baseTheme.colors.pantone200c };
    border-color: ${baseTheme.colors.pantone289c };
    transition: ${baseTheme.durations.ms300};
    
  }
}
`

const viewGray = css`
  background: ${baseTheme.colors.gray1};
  border-color: ${baseTheme.colors.gray3 };
  color: black;
  transition: ${baseTheme.durations.ms300};

  &:hover {
    background: ${baseTheme.colors.gray3 };
    transition: ${baseTheme.durations.ms300};
    
  }
}
`

interface Props{
    view?: "basic" | "red" | "gray" | "red-reverse";
}


export const StyledButtonContainer  = styled.div.attrs<Props>(props => {
    if (!props.view) props.view = "basic";

    switch (props.view) {
        case "basic":
            return viewBasic;
        case "red":
            return viewRed;
        case "red-reverse":
            return viewRedReverse;
        case "gray":
            return viewGray;
    }
})<Props>`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  box-sizing: border-box;

  cursor: pointer;
  height: min-content;
  width: max-content;
  
  & > a {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`



export const StyledAnchor = styled.a`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`





