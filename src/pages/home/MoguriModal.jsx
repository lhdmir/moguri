import React, { useState } from "react";
import PropTypes from "prop-types";
import closeButtonImage from "../../assets/icon/deletebutton.png";
import backButtonImage from "../../assets/icon/backbutton.png";
import "./MoguriModal.css";

const MoguriModal = ({ toggleModal, selectedMoguri, targetWeight }) => {
  const [weight, setWeight] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isEvolvedModalOpen, setIsEvolvedModalOpen] = useState(false);

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
      return targetWeight;
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

  return (
    <>
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
    </>
  );
};

MoguriModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  selectedMoguri: PropTypes.string.isRequired,
  targetWeight: PropTypes.number.isRequired,
};

export default MoguriModal;
