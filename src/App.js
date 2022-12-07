import { Routes, Route } from "react-router-dom";

import MarketPlace from "./pages/MarketPlace/MarketPlace";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;