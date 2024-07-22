import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/MoguriWeightPage.css";

function MoguriWeightPage() {
  const location = useLocation();
  const { name, selectedMoguri } = location.state;
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 몸무게 및 목표 몸무게 입력 후의 로직 추가
    console.log(
      `모구리 이름: ${name}, 몸무게: ${weight}, 목표 몸무게: ${goalWeight}`
    );
  };

  return (
    <div className="moguri-weight-page">
      <div className="background-image"></div>
      <div className="modal">
        <h2>모구리의 몸무게를 입력해주세요!</h2>
        {selectedMoguri && <img src={selectedMoguri} alt="Selected Moguri" />}
        <form onSubmit={handleSubmit}>
          <label>모구리 이름: {name}</label>
          <input
            type="number"
            placeholder="현재 몸무게"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="목표 몸무게"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
            required
          />
          <button type="submit">확인</button>
        </form>
      </div>
    </div>
  );
}

export default MoguriWeightPage;
