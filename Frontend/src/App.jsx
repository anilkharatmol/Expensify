import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import DailyExpenses from "./Components/DailyExpenses";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("Token")));

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("Token")));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <Routes>
      <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" replace />} />
      <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/" replace />} />
      <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />} />
      <Route path="/Daily" element={isLoggedIn ? <DailyExpenses /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />} />
    </Routes>
  );
}

export default App;
