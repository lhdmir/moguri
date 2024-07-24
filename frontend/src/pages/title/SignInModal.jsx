import Modal from "react-modal";
import PropTypes from "prop-types";
import "./SignInModal.css";

function SignInModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="로그인 모달"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>MOGURI</h2>
        <form>
          <div className="input-group">
            <label>ID</label>
            <input type="text" name="username" />
          </div>
          <div className="input-group">
            <label>PW</label>
            <input type="password" name="password" />
          </div>
          <button onClick={onRequestClose}>close</button>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
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
