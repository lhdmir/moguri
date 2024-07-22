// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/MoguriSelectPage.css";

// const moguris = [
//   require("../../../image/moguri_1-1.png"),
//   require("../../../image/moguri_2-1.png"),
//   require("../../../image/moguri_3-1.png"),
//   require("../../../image/moguri_4-1.png"),
//   require("../../../image/moguri_5-1.png"),
//   require("../../../image/moguri_6-1.png"),
// ];

// function MoguriSelectPage() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [selectedMoguri, setSelectedMoguri] = useState(null);

//   useEffect(() => {
//     // 컴포넌트가 마운트될 때 랜덤 모구리 선택
//     const randomMoguri = moguris[Math.floor(Math.random() * moguris.length)];
//     setSelectedMoguri(randomMoguri);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 이름을 입력했을 때 다음 페이지로 이동
//     navigate("/moguri-weight", { state: { name, selectedMoguri } });
//   };

//   return (
//     <div className="moguri-select-page">
//       <div className="background-image"></div>
//       <div className="modal-select">
//         <h2>모구리 이름을 입력해주세요!</h2>
//         {selectedMoguri && <img src={selectedMoguri} alt="Selected Moguri" />}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="모구리 이름"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <button type="submit">확인</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default MoguriSelectPage;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MoguriSelectPage.css";
import moguri1 from "../../../image/moguri_1-1.png";
import moguri2 from "../../../image/moguri_2-1.png";
import moguri3 from "../../../image/moguri_3-1.png";
import moguri4 from "../../../image/moguri_4-1.png";
import moguri5 from "../../../image/moguri_5-1.png";
import moguri6 from "../../../image/moguri_6-1.png";

const moguris = [moguri1, moguri2, moguri3, moguri4, moguri5, moguri6];

function MoguriSelectPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedMoguri, setSelectedMoguri] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 랜덤 모구리 선택
    const randomMoguri = moguris[Math.floor(Math.random() * moguris.length)];
    setSelectedMoguri(randomMoguri);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이름을 입력했을 때 다음 페이지로 이동
    navigate("/moguri-weight", { state: { name, selectedMoguri } });
  };

  return (
    <div className="moguri-select-page">
      <div className="background-image"></div>
      <div className="modal-select">
        <h2>모구리 이름을 입력해주세요!</h2>
        {selectedMoguri && <img src={selectedMoguri} alt="Selected Moguri" />}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="모구리 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">확인</button>
        </form>
      </div>
    </div>
  );
}

export default MoguriSelectPage;
