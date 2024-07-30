import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import Title from "./pages/title/Title";
import Home from "./pages/home/Home";
import FirstLogin from "./pages/FirstLogin/FirstLogin";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/home" element={<Home />} />
            <Route path="/first-login" element={<FirstLogin />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
