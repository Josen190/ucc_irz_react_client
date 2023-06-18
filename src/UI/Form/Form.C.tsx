import {Form} from "react-router-dom";
import {baseTheme} from "../../Styles/Theme.stales";
import styled from "styled-components";
import { FormHTMLAttributes } from "react";


export const FormStale = styled(Form)<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-rows: 1fr 50px;
  width: auto;
  max-width: ${baseTheme.sizes.modal.max_width};
  min-width: ${baseTheme.sizes.modal.min_width};
  height: auto;
  min-height: ${baseTheme.sizes.modal.min_height};
  max-height: ${baseTheme.sizes.modal.max_height};
  overflow: auto;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const DropDownContainer = styled.div`
  
`

export const DropDown = styled.div`
  position: relative;
  z-index: 100;
`