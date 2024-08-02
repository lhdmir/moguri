import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  setCurrentAccessory,
  setCurrentBackground,
} from "../../features/moguri/moguriSlice";

import "./OwnedItem.css";

const OwnedItem = () => {
  const moguriState = useSelector((state) => state.moguri);
  const [selectedCategory, setSelectedCategory] = useState("accessories");

  // 선택된 카테고리의 아이템들 가져오기
  const items = moguriState.ownedItems[selectedCategory];

  return (
    <div>
      <div className="item-header">{moguriState.name}</div>
      <div className="category-buttons">
        <button
          className={`category-button ${
            selectedCategory === "accessories" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("accessories")}
        >
          액세서리
        </button>
        <button
          className={`category-button ${
            selectedCategory === "backgrounds" ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory("backgrounds")}
        >
          배경화면
        </button>
      </div>
      <div className="item-container">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnedItem;
