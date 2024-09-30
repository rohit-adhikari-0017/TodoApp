"use client";
import React from "react";
import Style from "./Item.module.css";
import AppButton from "@/app/lib/appButton/AppButton";

function Item({ itemData, bought, Behraviour }) {
  return (
    <li className={`${Style.item} list-group-item ${bought && "active"}`}>
      <span>{itemData}</span>
      <span>
        <AppButton behraviour={Behraviour}></AppButton>
      </span>
    </li>
  );
}

export default Item;
