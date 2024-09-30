import React from "react";
import Style from "./Error.module.css";

function ErrorMsg({ eroMsg }) {
  return (
    <div className={`${Style.error}`}>
      {eroMsg.length === 0 && <h1>I am Still Hungry</h1>}
    </div>
  );
}

export default ErrorMsg;
