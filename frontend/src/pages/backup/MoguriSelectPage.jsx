import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MoguriSelectPage.css";
import moguri_1_1 from "../assets/image/moguri_1-1.png";
import moguri_2_1 from "../assets/image/moguri_2-1.png";
import moguri_3_1 from "../assets/image/moguri_3-1.png";
import moguri_4_1 from "../assets/image/moguri_4-1.png";
import moguri_5_1 from "../assets/image/moguri_5-1.png";
import moguri_6_1 from "../assets/image/moguri_6-1.png";

// 모구리 이미지 배열
const moguris = [
  moguri_1_1,
  moguri_2_1,
  moguri_3_1,
  moguri_4_1,
  moguri_5_1,
  moguri_6_1,
];

function MoguriSelectPage() {
  const navigate = useNavigate();
  const [selectedMoguri, setSelectedMoguri] = useState(null);
  const [moguriName, setMoguriName] = useState("");

  useEffect(() => {
    const randomMoguri = moguris[Math.floor(Math.random() * moguris.length)];
    setSelectedMoguri(randomMoguri);
  }, []);

  const handleConfirm = () => {
    console.log("name", moguriName);
    navigate("/initial-weight", { state: { selectedMoguri } });
  };

  return (
    <div className="moguri-select-page">
      <div className="background-image-select"></div>
      <div className="modal-select">
        <h2 className="h-select">모구리의 이름을 정해주세요!</h2>
        {selectedMoguri && <img src={selectedMoguri} alt="Selected Moguri" />}
        <input
          className="input-select"
          type="text"
          placeholder="모구리 이름"
          value={moguriName}
          onChange={(e) => setMoguriName(e.target.value)}
          required
        />
        <button className="btn-select" onClick={handleConfirm}>
          다음
        </button>
      </div>
    </div>
  );
}

export default MoguriSelectPage;
