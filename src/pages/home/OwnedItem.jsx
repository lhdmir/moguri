import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentAccessory,
  setCurrentBackground,
} from "../../features/moguri/moguriSlice";

import Cookies from "js-cookie";

import "./OwnedItem.css";

const OwnedItem = () => {
  const dispatch = useDispatch();
  const moguriState = useSelector((state) => state.moguri);
  const [selectedCategory, setSelectedCategory] = useState("accessory");

  // 선택된 카테고리의 아이템들 가져오기
  const items = moguriState.ownedItem[selectedCategory];

  // 아이템 클릭 시 현재 아이템으로 설정하는 함수
  // const handleItemClick = (item) => {
  //   if (selectedCategory === "accessory") {
  //     if (moguriState.currentItem.accessory.id === item.id) {
  //       dispatch(setCurrentAccessory({ id: 0, name: "", imageUrl: "" }));
  //     } else {
  //       dispatch(setCurrentAccessory(item));
  //     }
  //   } else if (selectedCategory === "background") {
  //     dispatch(setCurrentBackground(item));
  //   }
  // };

  // 아이템 클릭 시 현재 아이템으로 설정하는 함수
  const handleItemClick = async (item) => {
    if (selectedCategory === "accessory") {
      try {
        const response = await fetch(
          "https://www.moguri.site/api/moguri/accessory",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`, // Assuming you use token-based auth
            },
            body: JSON.stringify({ accessory: item }),
          }
        );

        if (response.ok) {
          const data = await response.json();

          dispatch(setCurrentAccessory(data.accessory));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (selectedCategory === "background") {
      try {
        const response = await fetch(
          "https://www.moguri.site/api/moguri/background",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify({ background: item }),
          }
        );

        if (response.ok) {
          const data = await response.json();

          dispatch(setCurrentBackground(data.background));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    console.log(moguriState.currentItem);
  };

  return (
    <div>
      <div className="item-header">{moguriState.name}</div>
      <div className="category-buttons">
        <button
          className={`category-button ${
            selectedCategory === "accessory" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("accessory")}
        >
          액세서리
        </button>
        <button
          className={`category-button ${
            selectedCategory === "background" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("background")}
        >
          배경화면
        </button>
      </div>
      <div className="item-container">
        {items.map((item, index) => (
          <div
            className={`item ${
              moguriState.currentItem[selectedCategory].id === item.id
                ? "equipped"
                : ""
            }`}
            key={index}
            onClick={() => handleItemClick(item)}
          >
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnedItem;
