import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./SignModal.css";

function SignInModal({ isOpen, onRequestClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === "") {
      setError("아이디를 입력해주세요");
      usernameRef.current.focus();
      return;
    }

    if (password === "") {
      setError("비밀번호를 입력해주세요");
      passwordRef.current.focus();
      return;
    }

    setError("");

    try {
      // API Endpoint 수정
      const response = await fetch(
        "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (!data.moguri.name) {
          navigate("/first-login");
        } else {
          navigate("/home");
        }
      } else {
        setError("로그인 실패: " + data.message);
      }
    } catch (error) {
      setError("로그인 실패: 서버와의 통신 오류");
    }
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onRequestClose();
  };

  useEffect(() => {
    if (error === "아이디를 입력해주세요") {
      usernameRef.current.focus();
    } else if (error === "비밀번호를 입력해주세요") {
      passwordRef.current.focus();
    }
  }, [error]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="로그인 모달"
      className="modal-signin"
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
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="button-group">
            <button type="button" className="button" onClick={handleClose}>
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
