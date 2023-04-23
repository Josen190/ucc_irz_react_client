import React, { Component } from "react";

interface Props {
  title: string;
  value: string | JSX.Element | null;
}

export default function BlockInfo({ title, value }: Props) {
  return (
    <span>
      <h5>{title}: </h5>
      {typeof value === 'string' ? <p>{value}</p> : <div>{value}</div>}
    </span>
  );
}
