import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { useSelector } from "react-redux"; // 리덕스 훅 임포트
// Button Image
import closeButtonImage from "../../assets/icon/deletebutton.png";
import backButtonImage from "../../assets/icon/backbutton.png";
import slideButtonImage from "../../assets/icon/slidebutton.png";
import todoDeleteImage from "../../assets/icon/tododelete.png";
import "./Sidebar.css";

// menu
import TodayMeal from "./TodayMeal";
import TodayExercise from "./TodayExercise";
import OwnedItem from "./OwnedItem";
import Shop from "./Shop";

import ItemSelection from "./ItemSelection"; // 새로 추가한 컴포넌트 import

const Sidebar1 = ({ isOpen, onRequestClose }) => {
  const moguriName = useSelector((state) => state.moguri.name); // 리덕스 스토어에서 moguriName 가져오기
  const [currentView, setCurrentView] = useState("main");
  const [currentMeal, setCurrentMeal] = useState("");
  const [mealDetails, setMealDetails] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  });
  const [exerciseDetails, setExerciseDetails] = useState([]);

  const openMealDetails = (meal) => {
    setCurrentMeal(meal);
    setCurrentView("meal");
  };

  const addMealItem = (meal) => {
    const newMealDetails = { ...mealDetails };
    newMealDetails[meal].push({ name: "", calories: 0 });
    setMealDetails(newMealDetails);
  };

  const addExerciseItem = () => {
    const newExerciseDetails = [...exerciseDetails];
    newExerciseDetails.push({ name: "" });
    setExerciseDetails(newExerciseDetails);
  };

  const removeMealItem = (meal, index) => {
    const newMealDetails = { ...mealDetails };
    newMealDetails[meal].splice(index, 1);
    setMealDetails(newMealDetails);
  };

  const removeExerciseItem = (index) => {
    const newExerciseDetails = [...exerciseDetails];
    newExerciseDetails.splice(index, 1);
    setExerciseDetails(newExerciseDetails);
  };

  const handleMealItemChange = (meal, index, field, value) => {
    const newMealDetails = { ...mealDetails };
    newMealDetails[meal][index][field] = value;
    setMealDetails(newMealDetails);
  };

  const handleExerciseItemChange = (index, value) => {
    const newExerciseDetails = [...exerciseDetails];
    newExerciseDetails[index].name = value;
    setExerciseDetails(newExerciseDetails);
  };

  const handleCaloriesChange = (meal, index, value) => {
    const numericValue = value.replace(/[^\d]/g, "");
    handleMealItemChange(meal, index, "calories", numericValue);
  };

  const closeMealDetails = () => {
    setCurrentView("main");
    toggleSidebar();
  };

  const calculateTotalCalories = (meal) => {
    return mealDetails[meal].reduce(
      (total, item) => total + parseInt(item.calories || 0, 10),
      0
    );
  };

  const goToNextView = () => {
    if (currentView === "main") {
      setCurrentView("exercises");
    } else if (currentView === "exercises") {
      setCurrentView("items");
    } else {
      setCurrentView("main");
    }
      
  };

  const goToPreviousView = () => {
    if (currentView === "items") {
      setCurrentView("exercises");
    } else if (currentView === "exercises") {
      setCurrentView("main");
    }
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="slide-button" onClick={toggleSidebar}>
        <img src={slideButtonImage} alt="Slide" />
      </button>
      {isSidebarOpen &&
        (currentView === "main" ? (
          <div className="sidebar-content">
            <div className="meal-header">오늘의 식단 !</div>
            <button className="meal-main-close" onClick={toggleSidebar}>
              <img
                src={closeButtonImage}
                alt="Close"
                className="meal-main-close"
              />
            </button>
            <button className="slide-left" onClick={goToPreviousView}>
              <img src={slideButtonImage} alt="Slide" />
            </button>
            <div
              className="meal-item"
              onClick={() => openMealDetails("breakfast")}
            >
              <p className="meal-item-day">• 아침</p>
              <p className="meal-item-calories">
                {calculateTotalCalories("breakfast")} kcal
              </p>
            </div>
            <div className="meal-item" onClick={() => openMealDetails("lunch")}>
              <p className="meal-item-day">• 점심</p>
              <p className="meal-item-calories">
                {calculateTotalCalories("lunch")} kcal
              </p>
            </div>
            <div
              className="meal-item"
              onClick={() => openMealDetails("dinner")}
            >
              <p className="meal-item-day">• 저녁</p>
              <p className="meal-item-calories">
                {calculateTotalCalories("dinner")} kcal
              </p>
            </div>
            <div className="meal-item" onClick={() => openMealDetails("snack")}>
              <p className="meal-item-day">• 간식</p>
              <p className="meal-item-calories">
                {calculateTotalCalories("snack")} kcal
              </p>
            </div>
            <button className="slide-right" onClick={goToNextView}>
              <img src={slideButtonImage} alt="Slide" />
            </button>
          </div>
        ) : currentView === "meal" ? (
          <div className="meal-details">
            <button
              className="meal-details-back"
              onClick={() => setCurrentView("main")}
            >
              <img
                src={backButtonImage}
                alt="Back"
                className="meal-detail-back"
              />
            </button>
            <button className="meal-details-close" onClick={closeMealDetails}>
              <img
                src={closeButtonImage}
                alt="Close"
                className="meal-detail-close"
              />
            </button>
            <div className="meal-header">{currentMeal}</div>
            <div className="scroll-container">
              {mealDetails[currentMeal].map((item, index) => (
                <div key={index} className="meal-item-detail">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleMealItemChange(
                        currentMeal,
                        index,
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="메뉴 추가"
                    className="meal-input"
                  />
                  <input
                    type="text"
                    value={`${item.calories}kcal`}
                    onChange={(e) =>
                      handleCaloriesChange(
                        currentMeal,
                        index,
                        e.target.value.replace("kcal", "").trim()
                      )
                    }
                    placeholder="0"
                    className="meal-input"
                  />
                  <button
                    className="meal-delete-button"
                    onClick={() => removeMealItem(currentMeal, index)}
                  >
                    <img src={todoDeleteImage} alt="Delete" />
                  </button>
                </div>
              ))}
            </div>
            <div className="add-button-container">
              <button
                className="add-button"
                onClick={() => addMealItem(currentMeal)}
              >
                + 메뉴 추가
              </button>
            </div>
          </div>
        ) : currentView === "exercises" ? (
          <div className="exercise-details">
            <button className="slide-left" onClick={goToPreviousView}>
              <img src={slideButtonImage} alt="Slide" />
            </button>
            <div className="meal-header">오늘의 운동 !</div>
            <button className="meal-main-close" onClick={toggleSidebar}>
              <img
                src={closeButtonImage}
                alt="Close"
                className="meal-main-close"
              />
            </button>
            <div className="scroll-container">
              {exerciseDetails.map((item, index) => (
                <div key={index} className="meal-item-detail">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleExerciseItemChange(index, e.target.value)
                    }
                    placeholder="운동 추가"
                    className="meal-input"
                  />
                  <button
                    className="meal-delete-button"
                    onClick={() => removeExerciseItem(index)}
                  >
                    <img src={todoDeleteImage} alt="Delete" />
                  </button>
                </div>
              ))}
            </div>
            <div className="add-button-container">
              <button className="add-button" onClick={addExerciseItem}>
                + 운동 추가
              </button>
            </div>
            <button className="slide-right" onClick={goToNextView}>
              <img src={slideButtonImage} alt="Slide" />
            </button>
          </div>
        ) : (
          <ItemSelection
            goToPreviousView={goToPreviousView}
            goToNextView={goToNextView}
            toggleSidebar={toggleSidebar}
            moguriName={moguriName} // moguriName prop 전달
          />
        ))}
    </div>
  );
};

const Sidebar = ({ isOpen, onRequestClose }) => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    setCurrentScreen((prevScreen) => (prevScreen % 4) + 1);
  };

  const handlePrev = () => {
    setCurrentScreen((prevScreen) => (prevScreen === 1 ? 4 : prevScreen - 1));
  };

  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="사이드 바"
      className="sidebar-content"
      overlayClassName="modal-overlay"
    >
      {currentScreen === 1 && <TodayMeal />}
      {currentScreen === 2 && <TodayExercise />}
      {currentScreen === 3 && <OwnedItem />}
      {currentScreen === 4 && <Shop />}
      <button onClick={handlePrev}>이전</button>
      <button onClick={handleNext}>다음</button>
      <button onClick={handleClose}>닫기</button>
    </Modal>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Sidebar;
