import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  return (
    <div
      onClick={props.onChangeColor(getRandomColor())}
      className="child"
      style={{ backgroundColor: "#FFF" }}
    />
  );
}
export default Child;
