import Modal from "react-modal";
import PropTypes from "prop-types";
import "./SignUpModal.css";

function SignUpModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="회원가입 모달"
      className="modal-signup"
      overlayClassName="overlay-signup"
    >
      <h2>MOGURI</h2>
      <form>
        <div className="div-signup">
          <label htmlFor="username">ID</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="div-signup">
          <label htmlFor="password">Pw</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="div-signup">
          <label htmlFor="confirmPassword">Pw check</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div className="div-signup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="button-group-signup">
          <button
            type="button"
            className="button-signup"
            onClick={onRequestClose}
          >
            close
          </button>
          <button type="submit" className="button-signup-close">
            Sign up
          </button>
        </div>
      </form>
    </Modal>
  );
}

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default SignUpModal;

