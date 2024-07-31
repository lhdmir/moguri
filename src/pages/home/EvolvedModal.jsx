import Modal from "react-modal";
import PropTypes from "prop-types";

import "./EvolvedModal.css";
import { useSelector } from "react-redux";

function EvolvedModal({ isOpen, onRequestClose }) {
  const moguriState = useSelector((state) => state.moguri);

  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="evolved-modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="evolved-modal-header">모구리 진화</div>
      <img
        src={moguriState.imageUrl}
        alt="Evolved Moguri"
        className="selected-moguri-evolved"
      />
      <div>모구리가 진화했습니다!</div>
      <button className="evolved-modal-button" onClick={handleClose}>
        닫기
      </button>
    </Modal>
  );
}

EvolvedModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default EvolvedModal;
