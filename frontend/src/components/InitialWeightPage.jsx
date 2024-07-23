import { useState } from "react";
import "../css/InitialWeightPage.css";
import { useLocation, useNavigate } from "react-router-dom";

function InitialWeightPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedMoguri } = location.state;
  const [goalWeight, setGoalWeight] = useState("");

  const handleConfirm = () => {
    // 목표 몸무게를 저장하고 다음 페이지로 이동
    console.log("Goal Weight:", goalWeight);
    navigate("/next-page"); // 다음 페이지로 라우팅 경로 수정
  };

  return (
    <div className="initial-weight-page">
      <div className="background-image-weight"></div>
      <div className="modal-weight">
        <h2 className="h-weight">몸무게를 설정하세요!</h2>
        {selectedMoguri && <img src={selectedMoguri} alt="Selected Moguri" />}
        <div className="form-weight">
          <div className="form-group-weight">
            <label className="label-weight">목표 몸무게:</label>
            <input
              className="input-weight"
              type="text"
              placeholder="목표 몸무게"
              value={goalWeight}
              onChange={(e) => setGoalWeight(e.target.value)}
              required
            />
          </div>
          <button className="btn-weight" onClick={handleConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default InitialWeightPage;
