import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./OwnedItem.css";

const OwnedItem = () => {
  const moguri = useSelector((state) => state.moguri);
  const [selectedCategory, setSelectedCategory] = useState("accessories");

  // 선택된 카테고리의 아이템들 가져오기
  const items = moguri?.ownedItems[selectedCategory] || [];

  // 아이템을 두 줄로 나누기
  const firstRowItems = items.slice(0, 3);
  const secondRowItems = items.slice(3, 6);
  return (
    <div>
      <div className="item-header">{moguri.name}</div>
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
        <div className="item-row">
          {firstRowItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
            </div>
          ))}
        </div>
        <div className="item-row2">
          {secondRowItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
            </div>
          ))}
          {selectedCategory === "accessories" && (
            <div className="item unmount-item">
              <div>장착 해제</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnedItem;
