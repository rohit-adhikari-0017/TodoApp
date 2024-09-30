import React from "react";
import Style from "./Popup.module.css";
function Popup({ hiddenVal }) {
  return (
    <div className={`${Style.PopupBox} ${hiddenVal ? displayOn : null}`}>
      <div>
        <h1>Error</h1>
      </div>
    </div>
  );
}

export default Popup;
