"use client";
import React from "react";

function AppButton({ behraviour }) {
  return (
    <button className="btn btn-primary" onClick={behraviour}>
      Buy
    </button>
  );
}

export default AppButton;
