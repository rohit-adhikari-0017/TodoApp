import React from "react";
import Style from "./Container.module.css";

function Container(props) {
  return <div className={`${Style.Container}`}>{props.children}</div>;
}

export default Container;
