import React from "react";

export type OnClickHandler = React.MouseEventHandler<HTMLButtonElement | HTMLInputElement | HTMLAnchorElement | HTMLDivElement>
export type typeError = {
    code: string,
    discription: string,
} 