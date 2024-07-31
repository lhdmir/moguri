import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./SignModal.css";

// Cookie
import Cookies from "js-cookie";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setMoguri } from "../../features/moguri/moguriSlice";
import { setTodayMeal } from "../../features/meals/todayMealSlice";
import { setTodayExercise } from "../../features/exercises/todayExerciseSlice";

// 더미 데이터
import data from "../../../json/user.json";

function SignInModal({ isOpen, onRequestClose }) {
  //임시 코드
  const dispatch = useDispatch();
  const moguriState = useSelector((state) => state.moguri);

  const [isMoguriUpdated, setIsMoguriUpdated] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const closeButtonRef = useRef(null);
  const signInButtonRef = useRef(null);
  const navigate = useNavigate();

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

    setError("");

    // 더미 데이터 활용 기능 테스트
    //  데이터 로드
    const { token, cookieExpirationTime, moguri, todayMeal, todayExercise } =
      data;

    // 토큰, 토큰 만료 시간 쿠키 저장
    const expirationDate = new Date(cookieExpirationTime);
    Cookies.set("token", token, { expires: expirationDate });

    // 모구리 데이터 업데이트
    // const updatedMoguriStateData = {
    //   ...moguriState,
    //   ...moguri,
    // };
    // dispatch(setMoguri(updatedMoguriStateData));
    dispatch(setMoguri(moguri));
    // 오늘의 식단 업데이트
    dispatch(setTodayMeal(todayMeal));
    // 오늘의 운동 업데이트
    dispatch(setTodayExercise(todayExercise));

    // moguri 상태 업데이트 표시
    setIsMoguriUpdated(true);

    // 실제 API 연동
    // try {
    //   // API Endpoint 수정
    //   const response = await fetch(
    //     "https://5797b8a7-4933-4b3c-b62d-53e86f8c48ef.mock.pstmn.io/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ id: username, password }),
    //     }
    //   );

    //   const data = await response.json();

    //   if (response.ok) {
    //     const {
    //       token,
    //       cookieExpirationTime,
    //       moguri,
    //       todayMeal,
    //       todayExercise,
    //     } = data;

    //     // Save token and expiration time to cookies
    //     const expirationDate = new Date(cookieExpirationTime);
    //     Cookies.set("token", token, { expires: expirationDate });

    //     // // 모구리 데이터 업데이트
    //     dispatch(setMoguri(moguri));
    //     // 오늘의 식단 업데이트
    //     dispatch(setTodayMeal(todayMeal));
    //     // 오늘의 운동 업데이트
    //     dispatch(setTodayExercise(todayExercise));

    //     // moguri 상태 업데이트 표시
    //     setIsMoguriUpdated(true);
    //   } else {
    //     setError("로그인 실패: " + data.error);
    //   }
    // } catch (error) {
    //   setError("로그인 실패: 서버와의 통신 오류");
    // }
  };

  useEffect(() => {
    // 상태 업데이트 후 navigate 호출
    if (isMoguriUpdated) {
      if (!moguriState.name) {
        navigate("/first-login");
      } else {
        navigate("/home");
      }
    }
  }, [isMoguriUpdated, moguriState, navigate]);

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onRequestClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        usernameRef.current.focus();
      }, 10);
    }
  }, [isOpen]);

  useEffect(() => {
    if (error === "아이디를 입력해주세요") {
      usernameRef.current.focus();
    } else if (error === "비밀번호를 입력해주세요") {
      passwordRef.current.focus();
    } else if (
      error === "아이디는 영문과 숫자로만 구성된 최대 13자까지 가능합니다"
    ) {
      usernameRef.current.focus();
    } else if (
      error === "비밀번호는 영문과 숫자로만 구성된 최대 13자까지 가능합니다"
    ) {
      passwordRef.current.focus();
    }
  }, [error]);

  const handleKeyDown = (event) => {
    // console.log(username);
    // console.log(password);
    if (event.key === "Tab" && event.nativeEvent.isComposing === false) {
      if (event.target === usernameRef.current && !event.shiftKey) {
        event.preventDefault();
        passwordRef.current.focus();
      } else if (event.target === passwordRef.current && !event.shiftKey) {
        event.preventDefault();
        signInButtonRef.current.focus();
      } else if (event.target === signInButtonRef.current && !event.shiftKey) {
        event.preventDefault();
        closeButtonRef.current.focus();
      } else if (event.target === closeButtonRef.current && !event.shiftKey) {
        event.preventDefault();
        usernameRef.current.focus();
      } else if (event.target === closeButtonRef.current && event.shiftKey) {
        event.preventDefault();
        signInButtonRef.current.focus();
      } else if (event.target === signInButtonRef.current && event.shiftKey) {
        event.preventDefault();
        passwordRef.current.focus();
      } else if (event.target === passwordRef.current && event.shiftKey) {
        event.preventDefault();
        usernameRef.current.focus();
      }
    }
  };

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
        <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <div className="input-group">
            <label>ID</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
              maxLength={13}
              tabIndex={1}
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
              autoComplete="current-password"
              tabIndex={2}
            />
          </div>
          {error && <div className="message">{error}</div>}
          <div className="button-group">
            <button
              type="button"
              className="button"
              onClick={handleClose}
              ref={closeButtonRef}
              tabIndex={4}
            >
              close
            </button>
            <button
              type="submit"
              className="button"
              ref={signInButtonRef}
              tabIndex={3}
            >
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
