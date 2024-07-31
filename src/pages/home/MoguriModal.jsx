import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import closeButtonImage from "assets/icon/deletebutton.png";
import backButtonImage from "assets/icon/backbutton.png";
import "./MoguriModal.css";
import Cookies from "js-cookie";

import EvolvedModal from "./EvolvedModal";

import { setId, setImage } from "../../features/moguri/moguriSlice";

const MoguriModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const [weight, setWeight] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isEvolvedModalOpen, setIsEvolvedModalOpen] = useState(false);

  const [targetDifference, setTargetDifference] = useState("");

  const openEvolvedModal = () => {
    setIsEvolvedModalOpen(true);
  };
  const closeEvolvedModal = () => {
    setIsEvolvedModalOpen(false);
  };

  const handleNextStep = async () => {
    // try {
    //   // 토큰
    //   // 저장된 토큰 불러오기
    //   const token = Cookies.get("token");
    //   // API Endpoint 수정
    //   const response = await fetch(
    //     "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/moguri/grow",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify({ weight }),
    //     }
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     if (data.moguri) {
    //       dispatch(setId(data.moguri.id));
    //       dispatch(setImage(data.moguri.imageUrl));
    //       openEvolvedModal();
    //     }
    //     setTargetDifference(data.target_difference);
    //     setCurrentStep(2);
    //   } else {
    //     console.log(data.error);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleBackStep = () => {
    setCurrentStep(1);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="일일 몸무게 입력 창"
      className="modal-content-home"
      overlayClassName="modal-overlay"
    >
      <button className="modal-close-button" onClick={handleClose}>
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
          <div>{targetDifference}</div>
        </>
      )}

      <EvolvedModal
        isOpen={isEvolvedModalOpen}
        onRequestClose={closeEvolvedModal}
      ></EvolvedModal>
    </Modal>
  );
};

MoguriModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default MoguriModal;
