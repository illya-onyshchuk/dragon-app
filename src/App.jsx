import { Route, HashRouter as Router, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import InfoRocketPage from "./pages/InfoRocketPage/InfoRocketPage";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rockets/:rocketId" element={<InfoRocketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
