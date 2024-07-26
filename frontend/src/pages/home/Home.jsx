// import PropTypes from "prop-types";
// import "./Home.css";
// import background1 from "../../assets/image/background1.png";
// import Nav from "../../components/Nav";

// const Home = ({ selectedMoguri }) => {
//   return (
//     <div
//       className="home-container"
//       style={{ backgroundImage: `url(${background1})` }}
//     >
//       <Nav />
//       {selectedMoguri && (
//         <img
//           src={selectedMoguri}
//           alt="Selected Moguri"
//           className="selected-moguri"
//         />
//       )}
//     </div>
//   );
// };

// Home.propTypes = {
//   selectedMoguri: PropTypes.string,
// };

// export default Home;

import { useState } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import background1 from "../../assets/image/background1.png";
import Nav from "../../components/Nav";

const Home = ({ selectedMoguri, targetWeight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todayWeight, setTodayWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleMoguriClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTodayWeight("");
    setResult(null);
  };

  const handleNextClick = () => {
    const weightDifference = targetWeight - todayWeight;
    setResult(
      `목표까지 ${Math.abs(weightDifference)}kg ${
        weightDifference > 0 ? "남았어요!" : "초과했어요!"
      }`
    );
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Nav />
      {selectedMoguri && (
        <img
          src={selectedMoguri}
          alt="Selected Moguri"
          className="selected-moguri"
          onClick={handleMoguriClick}
        />
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={handleModalClose}>
              &times;
            </button>
            <div className="modal-header">모구리 성장 판</div>
            {result === null ? (
              <>
                <label>오늘의 몸무게:</label>
                <input
                  type="number"
                  className="modal-input"
                  value={todayWeight}
                  onChange={(e) => setTodayWeight(e.target.value)}
                />
                <button className="modal-button" onClick={handleNextClick}>
                  다음
                </button>
              </>
            ) : (
              <div className="modal-result">{result}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  selectedMoguri: PropTypes.string,
  targetWeight: PropTypes.number,
};

export default Home;
