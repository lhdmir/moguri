import Modal from "react-modal";
import PropTypes from "prop-types";
import "./ItemAlertModal.css";

function ItemAlertModal({ isOpen, onRequestClose, message }) {
  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="full-modal-content"
      overlayClassName="full-modal-overlay"
    >
      <span className="full-message">{message}</span>
      <button className="full-close-button" onClick={handleClose}>
        닫기
      </button>
    </Modal>
  );
}

ItemAlertModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ItemAlertModal;
