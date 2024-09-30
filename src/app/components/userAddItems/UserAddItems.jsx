import React, { useState } from "react";
import Item from "../item/Item";

function UserAddItems({ userData }) {
  let [activeItem, setActiveItem] = useState([]);
  let Behraviour = (userDatas) => {
    let newUserData = [...activeItem, userDatas];
    setActiveItem(newUserData);
  };
  return (
    <div>
      <ul className="list-group">
        {userData.map((userData) => (
          <Item
            itemData={userData}
            bought={activeItem.includes(userData)}
            Behraviour={() => Behraviour(userData)}
          ></Item>
        ))}
      </ul>
    </div>
  );
}

export default UserAddItems;
