import React from "react";
import LoginPage from "./Components/Login/LoginPage";
import VerifyOTPPage from "./Components/VerifyOTP/VerifyOTPPage";
import Context from "./Components/Context/Context";
import Songs from "./Components/Songs/Songs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Context>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/verify" element={<VerifyOTPPage />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Context>
    </>
  );
}

export default App;
