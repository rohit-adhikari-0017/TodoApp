"use client";
// import React, { useState } from "react";
import Style from "./UserInput.module.css";

function UserInput({ userVal }) {
  return (
    <>
      <div className={`${Style.userInputBox}`}>
        <input
          className={Style.userInput}
          type="text"
          placeholder="Enter Food Item Here"
          onKeyDown={userVal}
        ></input>
      </div>
    </>
  );
}

export default UserInput;
