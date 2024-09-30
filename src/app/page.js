"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/appHeading/Heading";
import UserInput from "./components/userInput/UserInput";
import UserAddItems from "./components/userAddItems/UserAddItems";
import ErrorMsg from "./components/errorMsg/Error";
import Container from "./components/container/Container";
import { useState } from "react";
// import Popup from "./components/popup/Popup";

export default function Home() {
  let [foodItemData, setFoodItemData] = useState([]);
  function onDownKey(event) {
    console.log(event);
    if (event.key === "Enter") {
      let newFooditem = event.target.value;
      event.target.value = "";
      !foodItemData.includes(newFooditem)
        ? setFoodItemData([...foodItemData, newFooditem])
        : alert("Error");
    }
  }
  // let [hiddenVal, setHiddenVal] = useState();

  return (
    <>
      <div className="healtyFoodApp">
        <Container>
          <Heading></Heading>
          <UserInput userVal={onDownKey}></UserInput>
          <ErrorMsg eroMsg={foodItemData}></ErrorMsg>
          <UserAddItems userData={foodItemData}></UserAddItems>
        </Container>
      </div>
    </>
  );
}
