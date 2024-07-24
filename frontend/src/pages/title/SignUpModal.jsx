import Modal from "react-modal";
import PropTypes from "prop-types";

function SignUpModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="회원가입 모달"
    >
      <h2>회원가입</h2>
      <button onClick={onRequestClose}>닫기</button>
      <form>
        <div>
          <label>아이디</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input type="password" name="confirmPassword" />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </Modal>
  );
}

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default SignUpModal;
