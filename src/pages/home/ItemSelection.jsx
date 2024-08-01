import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import closeButtonImage from "../../assets/icon/deletebutton.png";
import slideButtonImage from "../../assets/icon/slidebutton.png";
import "./ItemSelection.css";

const ItemSelection = ({ goToPreviousView, goToNextView, toggleSidebar }) => {
  const moguri = useSelector((state) => state.moguri);
  const [selectedCategory, setSelectedCategory] = useState("accessories");

  // 선택된 카테고리의 아이템들 가져오기
  const items = moguri?.ownedItems[selectedCategory] || [];

  // 아이템을 두 줄로 나누기
  const firstRowItems = items.slice(0, 3);
  const secondRowItems = items.slice(3, 6);

  return (
    <div className="item-selection">
      <button className="slide-left" onClick={goToPreviousView}>
        <img src={slideButtonImage} alt="Slide" />
      </button>
      <div className="item-header">{moguri.name}</div>
      <button className="meal-main-close" onClick={toggleSidebar}>
        <img src={closeButtonImage} alt="Close" className="meal-main-close" />
      </button>
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
      <button className="slide-right" onClick={goToNextView}>
        <img src={slideButtonImage} alt="Slide" />
      </button>
    </div>
  );
};

ItemSelection.propTypes = {
  goToPreviousView: PropTypes.func.isRequired,
  goToNextView: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default ItemSelection;

