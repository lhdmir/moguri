import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setName, setTargetWeight } from "../../features/moguri/moguriSlice";
import Cookies from "js-cookie";
import "./FirstLogin.css";

const FirstLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [moguriName, setMoguriName] = useState("");
  const [targetWeightLocal, setTargetWeightLocal] = useState("");
  const [nameError, setNameError] = useState("");
  const [weightError, setWeightError] = useState("");

  const moguriState = useSelector((state) => state.moguri);

  const [step, setStep] = useState(1);

  const moguriNameRef = useRef(null);
  const targetWeightLocalRef = useRef(null);

  const [isMoguriUpdated, setIsMoguriUpdated] = useState(false);

  useEffect(() => {
    // 입력 포커스 이동
    if (step === 1 && moguriNameRef.current) {
      moguriNameRef.current.focus();
    } else if (step === 2 && targetWeightLocalRef.current) {
      targetWeightLocalRef.current.focus();
    }
  }, [step]);

  const handleNextClick = () => {
    // 입력 조건 검사 로직
    const nameRegex = /^[a-zA-Z0-9가-힣]{1,13}$/;

    if (moguriName.trim() === "") {
      setNameError("모구리의 이름을 입력해 주세요!");
      moguriNameRef.current.focus();
      return;
    } else if (!nameRegex.test(moguriName.trim())) {
      setNameError("특수문자는 포함할 수 없습니다.");
      moguriNameRef.current.focus();
      return;
    }
    setNameError("");

    setStep(2);
  };

  const handlePreClick = () => {
    setTargetWeightLocal("");
    setWeightError("");
    setStep(1);
  };

  const handleCompleteClick = async (event) => {
    event.preventDefault();

    // 입력 조건 검사 로직
    if (targetWeightLocal === "") {
      setWeightError("목표 몸무게를 입력해주세요!");
      targetWeightLocalRef.current.focus();
      return;
    } else if (targetWeightLocal < 0 || targetWeightLocal > 200) {
      setWeightError("목표 몸무게는 0에서 200 사이를 입력해주세요.");
      targetWeightLocalRef.current.focus();
      return;
    }
    setWeightError("");

    // 더미데이터 코드 나중에 삭제
    // dispatch(setName(moguriName));
    // dispatch(setTargetWeight(targetWeightLocal));
    // setIsMoguriUpdated(true);

    // 실제 API 연동
    try {
      // 토큰
      // 저장된 토큰 불러오기
      const token = Cookies.get("token");

      console.log(token);

      // API Endpoint 수정
      const response = await fetch("https://www.moguri.site/api/moguri", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          moguri: {
            name: moguriName,
            targetWeight: targetWeightLocal,
          },
        }),
      });

      const data = await response.json();

      // 응답 데이터를 바탕으로 상태 업데이트
      dispatch(setName(data.moguri.name));
      dispatch(setTargetWeight(data.moguri.targetWeight));

      // moguri 상태 업데이트 표시
      setIsMoguriUpdated(true);
    } catch (error) {
      console.error("Error updating moguri:", error);
    }
  };

  useEffect(() => {
    // 상태 업데이트 후 navigate 호출
    if (isMoguriUpdated) {
      // console.log(moguriState.name);
      // console.log(moguriState.targetWeight);
      if (moguriState.name && moguriState.targetWeight > 0) {
        navigate("/home");
      }
    }
  }, [isMoguriUpdated, moguriState, navigate]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.nativeEvent.isComposing === false) {
      if (step === 1) {
        handleNextClick();
      } else if (step === 2) {
        handleCompleteClick(event);
      }
    }
  };

  return (
    <div className="first-login-container">
      {step === 1 && (
        <div className="login-box">
          <img
            src={moguriState.imageUrl}
            alt="Moguri"
            className="moguri-image"
          />
          <p className="p-FirstLogin">모구리의 이름을 정해주세요!</p>
          <div className="moguri-name">
            <label className="label-first">모구리 이름:</label>
            <input
              type="text"
              placeholder="MOGURI"
              value={moguriName}
              onChange={(e) => setMoguriName(e.target.value)}
              className="input-moguri-name"
              ref={moguriNameRef}
              onKeyDown={handleKeyDown}
            />
          </div>
          {nameError && <p className="error-message">{nameError}</p>}
          <button className="button-first" onClick={handleNextClick}>
            다음
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="login-box">
          <img
            src={moguriState.imageUrl}
            alt="Moguri"
            className="moguri-image"
          />
          <p className="p-FirstLogin">모구리의 목표 몸무게를 입력해주세요!</p>
          <div className="moguri-weight">
            <label className="label-first">목표 몸무게:</label>
            <input
              type="text"
              placeholder="목표 몸무게"
              value={targetWeightLocal}
              onChange={(e) => setTargetWeightLocal(e.target.value)}
              className="input-moguri-name"
              ref={targetWeightLocalRef}
              onKeyDown={handleKeyDown}
            />
          </div>
          {weightError && <p className="error-message">{weightError}</p>}
          <div className="moguri-weight">
            <button className="button-pre" onClick={handlePreClick}>
              뒤로
            </button>
            <button className="button-weight" onClick={handleCompleteClick}>
              완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstLogin;
