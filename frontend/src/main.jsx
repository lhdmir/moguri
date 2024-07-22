// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import "./css/App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import IntroductionPage from "./components/IntroductionPage";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import MoguriSelectPage from "./components/MoguriSelectPage";
// import MoguriWeightPage from "./components/MoguriWeightPage";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<IntroductionPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/moguri-select" element={<MoguriSelectPage />} />
//           <Route path="/moguri-weight" element={<MoguriWeightPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroductionPage from "./components/IntroductionPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import MoguriSelectPage from "./components/MoguriSelectPage.jsx";
import MoguriWeightPage from "./components/MoguriWeightPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/moguri-select" element={<MoguriSelectPage />} />
          <Route path="/moguri-weight" element={<MoguriWeightPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
