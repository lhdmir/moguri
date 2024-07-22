import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroductionPage from "./components/IntroductionPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
