import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./SignModal.css";

function SignUpModal({ isOpen, onRequestClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const usernamePattern = /^[a-zA-Z0-9]{1,13}$/;
    const passwordPattern = /^[a-zA-Z0-9]{1,13}$/;

    if (username === "") {
      setError("아이디를 입력해주세요");
      usernameRef.current.focus();
      return;
    } else if (!usernamePattern.test(username)) {
      setError("아이디는 영문과 숫자로만 구성된 최대 13자까지 가능합니다");
      usernameRef.current.focus();
      return;
    }

    if (password === "") {
      setError("비밀번호를 입력해주세요");
      passwordRef.current.focus();
      return;
    } else if (!passwordPattern.test(password)) {
      setError("비밀번호는 영문과 숫자로만 구성된 최대 13자까지 가능합니다");
      passwordRef.current.focus();
      return;
    }

    if (passwordCheck === "") {
      setError("비밀번호 확인을 입력해주세요");
      passwordCheckRef.current.focus();
      return;
    }

    if (password !== passwordCheck) {
      setError("비밀번호가 일치하지 않습니다");
      passwordCheckRef.current.focus();
      return;
    }

    if (email === "") {
      setError("이메일을 입력해주세요");
      emailRef.current.focus();
      return;
    }

    // 모든 검증 통과 후 폼 제출 처리
    setError("");
    // 폼 제출 시 처리할 작업 추가
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setPasswordCheck("");
    setEmail("");
    setError("");
    onRequestClose();
  };

  useEffect(() => {
    if (error === "아이디를 입력해주세요") {
      usernameRef.current.focus();
    } else if (
      error === "아이디는 영문과 숫자로만 구성된 최대 13자까지 가능합니다"
    ) {
      usernameRef.current.focus();
    } else if (error === "비밀번호를 입력해주세요") {
      passwordRef.current.focus();
    } else if (
      error === "비밀번호는 영문과 숫자로만 구성된 최대 13자까지 가능합니다"
    ) {
      passwordRef.current.focus();
    } else if (
      error === "비밀번호 확인을 입력해주세요" ||
      error === "비밀번호가 일치하지 않습니다"
    ) {
      passwordCheckRef.current.focus();
    } else if (error === "이메일을 입력해주세요") {
      emailRef.current.focus();
    }
  }, [error]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="회원가입 모달"
      className="modal-signup"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2 className="moguri">MOGURI</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>ID</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
              maxLength={13}
            />
          </div>
          <div className="input-group">
            <label>PW</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              maxLength={13}
            />
          </div>
          <div className="input-group">
            <label>PW Check</label>
            <input
              type="password"
              name="passwordCheck"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              ref={passwordCheckRef}
              maxLength={13}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="button-group">
            <button type="button" className="button" onClick={handleClose}>
              close
            </button>
            <button type="submit" className="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default SignUpModal;
