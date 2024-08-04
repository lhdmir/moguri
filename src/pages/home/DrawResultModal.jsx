import Modal from "react-modal";
import PropTypes from "prop-types";
import "./DrawResultModal.css";

function DrawResultModal({ isOpen, onRequestClose, newItem }) {
  const handleClose = () => {
    onRequestClose();
  };

    const imageClassName =
      newItem.id >= 100 && newItem.id < 200
        ? "result-modal-image accessory"
        : "result-modal-image background";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="result-modal-content"
      overlayClassName="result-modal-overlay"
    >
      <img
        src={newItem.imageUrl}
        alt={newItem.name}
        className={imageClassName}
      />
      <h1 className="result-modal-title">{newItem.name}</h1>
      <button className="result-modal-button" onClick={handleClose}>
        닫기
      </button>
    </Modal>
  );
}

DrawResultModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  newItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default DrawResultModal;
