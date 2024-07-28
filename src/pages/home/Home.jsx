import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./Home.css";
import background1 from "../../assets/image/background1.png";
import Nav from "../../components/Nav";
import closeButtonImage from "../../assets/icon/deletebutton.png";
import backButtonImage from "../../assets/icon/backbutton.png";
import slideButtonImage from "../../assets/icon/slidebutton.png";
import todoDeleteImage from "../../assets/icon/tododelete.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEvolvedModalOpen, setIsEvolvedModalOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const selectedMoguri = useSelector((state) => state.moguri.image);
  const targetWeight = useSelector((state) => state.moguri.target_weight);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [currentView, setCurrentView] = useState("main"); // 'main' 또는 'meal'
  const [currentMeal, setCurrentMeal] = useState("");
  const [mealDetails, setMealDetails] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentStep(1); // Reset to the first step when modal is toggled
    setIsEvolvedModalOpen(false); // Reset evolution modal when main modal is closed
  };

  const handleNextStep = () => {
    const remainingWeight = calculateRemainingWeight();
    setCurrentStep(2);
    if (remainingWeight === 0) {
      setIsEvolvedModalOpen(true);
    }
  };

  const handleBackStep = () => {
    setCurrentStep(1);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateRemainingWeight = () => {
    const currentWeight = parseFloat(weight);
    if (isNaN(currentWeight)) {
      return targetWeight; // If the input is not a number, assume no progress
    }
    return targetWeight - currentWeight;
  };

  const getEvolvedImagePath = (imagePath) => {
    const parts = imagePath.split("/");
    const fileName = parts.pop();
    const fileParts = fileName.split("-");
    fileParts[1] = fileParts[1].replace("1", "2");
    const newFileName = fileParts.join("-");
    parts.push(newFileName);
    return parts.join("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
    setCurrentView("main"); 
  };

  const openMealDetails = (meal) => {
    setCurrentMeal(meal);
    setCurrentView("meal");
  };

  const addMealItem = (meal) => {
    const newMealDetails = { ...mealDetails };
    newMealDetails[meal].push({ name: "", calories: 0 });
    setMealDetails(newMealDetails);
  };

  const removeMealItem = (meal, index) => {
    const newMealDetails = { ...mealDetails };
    newMealDetails[meal].splice(index, 1);
    setMealDetails(newMealDetails);
  };

  const handleMealItemChange = (meal, index, field, value) => {
    const newMealDetails = { ...mealDetails };
    newMealDetails[meal][index][field] = value;
    setMealDetails(newMealDetails);
  };

  const handleCaloriesChange = (meal, index, value) => {
    const numericValue = value.replace(/[^\d]/g, ""); // 숫자가 아닌 문자를 제거
    handleMealItemChange(meal, index, "calories", numericValue);
  };

  const closeMealDetails = () => {
    setCurrentView("main");
    setIsSidebarOpen(false); // 창을 닫고 사이드바를 숨깁니다.
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Nav />
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
              <div
                className="meal-item"
                onClick={() => openMealDetails("breakfast")}
              >
                <p className="meal-item-day">• 아침</p>
              </div>
              <div
                className="meal-item"
                onClick={() => openMealDetails("lunch")}
              >
                <p className="meal-item-day">• 점심</p>
              </div>
              <div
                className="meal-item"
                onClick={() => openMealDetails("dinner")}
              >
                <p className="meal-item-day">• 저녁</p>
              </div>
              <div
                className="meal-item"
                onClick={() => openMealDetails("snack")}
              >
                <p className="meal-item-day">• 간식</p>
              </div>
            </div>
          ) : (
            <div className="meal-details">
              <button
                className="meal-details-back"
                onClick={() => setCurrentView("main")}
              >
                <img src={backButtonImage} alt="Back" className="meal-detail-back" />
              </button>
              <button className="meal-details-close" onClick={closeMealDetails}>
                <img
                  src={closeButtonImage}
                  alt="Close"
                  className="meal-detail-close"
                />
              </button>
              <div className="meal-header">{currentMeal}</div>
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
                    className="meal-input" // 추가된 클래스
                  />
                  <input
                    type="text"
                    value={`${item.calories}kcal`}
                    onChange={(e) =>
                      handleCaloriesChange(
                        currentMeal,
                        index,
                        e.target.value.replace("kcal", "").trim() // 'kcal'을 제거하고 숫자 부분만 넘김
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
              <button
                className="add-button"
                onClick={() => addMealItem(currentMeal)}
              >
                + 메뉴 추가
              </button>
            </div>
          ))}
      </div>
      {selectedMoguri && (
        <img
          src={selectedMoguri}
          alt="Selected Moguri"
          className="selected-moguri"
          onClick={toggleModal}
        />
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content-home">
            <button className="modal-close-button" onClick={toggleModal}>
              <img src={closeButtonImage} alt="Close" />
            </button>
            {currentStep === 1 && (
              <>
                <div className="modal-header">모구리 성장 판</div>
                <div>
                  오늘의 몸무게:
                  <input
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                    className="modal-input"
                  />
                </div>
                <button className="modal-button" onClick={handleNextStep}>
                  다음
                </button>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="modal-header">모구리 성장 판</div>
                <button className="modal-back-button" onClick={handleBackStep}>
                  <img src={backButtonImage} alt="Back" />
                </button>
                <div>목표까지 {calculateRemainingWeight()}kg 남았어요!</div>
              </>
            )}
          </div>
        </div>
      )}
      {isEvolvedModalOpen && (
        <div className="modal-overlay">
          <div className="evolved-modal-content">
            <div className="evolved-modal-header">모구리 진화</div>
            <img
              src={getEvolvedImagePath(selectedMoguri)}
              alt="Evolved Moguri"
              className="selected-moguri-evolved"
            />
            <div>모구리가 진화했습니다!</div>
            <button
              className="evolved-modal-button"
              onClick={() => setIsEvolvedModalOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  selectedMoguri: PropTypes.string,
};

export default Home;
