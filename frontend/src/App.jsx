// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Title from "./pages/title/Title";
// import Home from "./pages/home/Home";
// import FirstLogin from "./pages/FirstLogin/FirstLogin";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Title />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/first-login" element={<FirstLogin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import FirstLogin from "./pages/FirstLogin/FirstLogin";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstLogin />} />
        <Route path="/home" element={<HomeWrapper />} />
      </Routes>
    </Router>
  );
};

const HomeWrapper = () => {
  const location = useLocation();
  const { selectedMoguri } = location.state || {};
  return <Home selectedMoguri={selectedMoguri} />;
};

export default App;
