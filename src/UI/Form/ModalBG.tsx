import React, {ReactNode} from "react";
import styled from "styled-components";

interface Props extends React.HTMLProps<HTMLDivElement>{
    children: ReactNode;
}

 function ModalBG({children, ...rest}: Props) {
    return (<div {...rest}> {children} </div>)
}


const StaledModalBG = styled(ModalBG)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(black, 0.4);
`

export default StaledModalBG;