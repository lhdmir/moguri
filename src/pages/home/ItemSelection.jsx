import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux"; // 리덕스 훅 임포트
import closeButtonImage from "../../assets/icon/deletebutton.png";
import slideButtonImage from "../../assets/icon/slidebutton.png";
import "./ItemSelection.css";

const ItemSelection = ({ goToPreviousView, goToNextView, toggleSidebar }) => {
  const moguriName = useSelector((state) => state.moguri.name); // 리덕스 스토어에서 moguriName 가져오기

  return (
    <div className="item-selection">
      <button className="slide-left" onClick={goToPreviousView}>
        <img src={slideButtonImage} alt="Slide" />
      </button>
      <div className="item-header">{moguriName}</div> {/* 모구리 이름 표시 */}
      <button className="meal-main-close" onClick={toggleSidebar}>
        <img src={closeButtonImage} alt="Close" className="meal-main-close" />
      </button>
      <div className="item-container">{/* 아이템 내용 보류 */}</div>
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
