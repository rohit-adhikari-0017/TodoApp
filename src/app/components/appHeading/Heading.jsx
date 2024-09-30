import React from "react";
import Style from "./Heading.module.css";

function Heading() {
  return (
    <div className={`${Style.Heading}`}>
      <h1> Food App</h1>
    </div>
  );
}

export default Heading;
