import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";
import IntroductionPage from "./components/IntroductionPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import MoguriSelectPage from "./components/MoguriSelectPage";
import InitialWeightPage from "./components/InitialWeightPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/moguri-select" element={<MoguriSelectPage />} />
          <Route path="/initial-weight" element={<InitialWeightPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
