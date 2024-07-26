import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./Home.css";
import background1 from "../../assets/image/background1.png";
import Nav from "../../components/Nav";
import closeButtonImage from "../../assets/icon/deletebutton.png";
import backButtonImage from "../../assets/icon/backbutton.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const selectedMoguri = useSelector((state) => state.moguri.image);
  const targetWeight = useSelector((state) => state.moguri.target_weight);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentStep(1); // Reset to the first step when modal is toggled
  };

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handleBackStep = () => {
    setCurrentStep(1);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateRemainingWeight = () => {
    const currentWeight = parseFloat(weight);
    return targetWeight - currentWeight;
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Nav />
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
    </div>
  );
};

Home.propTypes = {
  selectedMoguri: PropTypes.string,
};

export default Home;


