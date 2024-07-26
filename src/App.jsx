import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./pages/title/Title";
import Home from "./pages/home/Home";
import FirstLogin from "./pages/FirstLogin/FirstLogin";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/home" element={<Home />} />
          <Route path="/first-login" element={<FirstLogin />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
