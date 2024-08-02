import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
// Button Image
import closeButtonImage from "../../assets/icon/deletebutton.png";
import slideButtonImage from "../../assets/icon/slidebutton.png";

import "./Sidebar.css";

// menu
import TodayMeal from "./TodayMeal";
import TodayExercise from "./TodayExercise";
import OwnedItem from "./OwnedItem";
import Shop from "./Shop";

const Sidebar = ({ isOpen, onRequestClose }) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isMealSelected, setIsMealSelected] = useState(false);

  const handleNext = () => {
    setCurrentScreen((prevScreen) => (prevScreen % 4) + 1);
  };

  const handlePrev = () => {
    setCurrentScreen((prevScreen) => (prevScreen === 1 ? 4 : prevScreen - 1));
  };

  const handleClose = () => {
    setCurrentScreen(1);
    onRequestClose();
  };

  const handleMealSelect = (isSelected) => {
    setIsMealSelected(isSelected);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="사이드 바"
      className="sidebar-content"
      overlayClassName="modal-overlay"
    >
      {/* <button onClick={handleClose}>닫기</button> */}
      <button onClick={handleClose} className="close-button">
        <img src={closeButtonImage} alt="Close" />
      </button>

      {currentScreen === 1 && <TodayMeal onMealSelect={handleMealSelect} />}
      {currentScreen === 2 && <TodayExercise />}
      {currentScreen === 3 && <OwnedItem />}
      {currentScreen === 4 && <Shop />}

      {!isMealSelected && (
        <>
          <button onClick={handlePrev} className="slide-left-button">
            <img src={slideButtonImage} />
          </button>

          <button onClick={handleNext} className="slide-right-button">
            <img src={slideButtonImage} />
          </button>
        </>
      )}
    </Modal>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Sidebar;
