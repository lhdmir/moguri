import Modal from "react-modal";
import PropTypes from "prop-types";

function DrawResultModal({ isOpen, onRequestClose, newItem }) {
  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <h1>{newItem.name}</h1>
      <img src={newItem.imageUrl} alt="" />
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
