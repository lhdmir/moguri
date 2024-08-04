import Modal from "react-modal";
import PropTypes from "prop-types";

function ItemAlertModal({ isOpen, onRequestClose, message }) {
  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <span>{message}</span>
      <button>닫기</button>
    </Modal>
  );
}

ItemAlertModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ItemAlertModal;
