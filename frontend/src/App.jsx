// import Title from "./pages/title/Title";

// function App() {
//   return <Title></Title>;
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./pages/title/Title";
import Home from "./pages/home/Home";
import FirstLogin from "./pages/FirstLogin/FirstLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/home" element={<Home />} />
        <Route path="/first-login" element={<FirstLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
