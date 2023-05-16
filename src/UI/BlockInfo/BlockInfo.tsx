import React from "react";
import "./BlockInfo.scss"

interface Props {
  title: string;
  value: string | JSX.Element | null;
}

export default function BlockInfo({ title, value }: Props) {
  return (
    <span className="block-info">
      <h5>{title}: </h5>
      {typeof value === 'string' ? <p>{value}</p> : <div className="block-info-content">{value}</div>}
    </span>
  );
}
