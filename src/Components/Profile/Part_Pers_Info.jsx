import React, { Component } from "react";

export default function Part_Pers_Info({ title, value }) {
  return (
    <span>
      <h5>{title}: </h5>
      <p>{value}</p>
    </span>
  );
}
