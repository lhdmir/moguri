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
  const [success, setSuccess] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordCheckRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = async (event) => {
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

    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: username, password, email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setUsername("");
        setPassword("");
        setPasswordCheck("");
        setEmail("");
      } else {
        setError("회원가입 실패: " + data.error);
      }
    } catch (error) {
      setError("회원가입 실패: 서버와의 통신 오류");
    }
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setPasswordCheck("");
    setEmail("");
    setError("");
    setSuccess("");
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
          {error && <div className="message">{error}</div>}
          {success && <div className="message">{success}</div>}
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
