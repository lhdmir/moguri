import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentAccessory,
  setCurrentBackground,
} from "../../features/moguri/moguriSlice";

import "./OwnedItem.css";

const OwnedItem = () => {
  const dispatch = useDispatch();
  const moguriState = useSelector((state) => state.moguri);
  const [selectedCategory, setSelectedCategory] = useState("accessories");

  // 선택된 카테고리의 아이템들 가져오기
  const items = moguriState.ownedItem[selectedCategory];

  // 아이템 클릭 시 현재 아이템으로 설정하는 함수
  const handleItemClick = (item) => {
    console.log(moguriState.currentItem);
    // 임시코드
    // 현재 착용중인 악세서리가 교체할려는 악세서리와 같을때 악세서리 장착 해제
    if (selectedCategory === "accessories") {
      if (moguriState.currentItem.accessory.id === item.id) {
        dispatch(setCurrentAccessory({ id: 0, name: "", imageUrl: "" }));
      } else {
        dispatch(setCurrentAccessory(item));
      }
    } else if (selectedCategory === "backgrounds") {
      dispatch(setCurrentBackground(item));
    }
  };

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
          <div
            className="item"
            key={item.id}
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
