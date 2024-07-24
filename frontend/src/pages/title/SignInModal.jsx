import Modal from "react-modal";
import PropTypes from "prop-types";
import "./SignModal.css";

function SignInModal({ isOpen, onRequestClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // 폼 제출 시 처리할 작업 추가
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="로그인 모달"
      className="modal-signin"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2 className="moguri">MOGURI</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>ID</label>
            <input type="text" name="username" />
          </div>
          <div className="input-group">
            <label>PW</label>
            <input type="password" name="password" />
          </div>
          <div className="button-group">
            <button type="button" className="button" onClick={onRequestClose}>
              close
            </button>

            <button type="submit" className="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default SignInModal;
