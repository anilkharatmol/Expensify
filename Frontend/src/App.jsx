import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";
import HomePage from "./Pages/HomePage";
import DailyExpenses from "./Components/DailyExpenses";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  console.log(isLoggedIn);
  

  return (
    <Routes>
      <Route index element={ !isLoggedIn ? <Login /> : <HomePage />} />
      {!isLoggedIn ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <>
        <Route path="/" element={<HomePage />} />
        <Route path="/Daily" element={<DailyExpenses/>}/>
        </>
      )}
    </Routes>
  );
}

export default App;
