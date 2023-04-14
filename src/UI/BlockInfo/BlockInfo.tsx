import React, { Component } from "react";

interface Props{
  title: string;
  value: string | JSX.Element | null;
}

export default function BlockInfo({ title, value }: Props) {
  return (
    <span>
      <h5>{title}: </h5>
      <p>{value}</p>
    </span>
  );
}
