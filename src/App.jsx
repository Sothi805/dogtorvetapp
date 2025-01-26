import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import HomeRoute from "./routes/homeRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Non-Nested */}
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Login />} />

        {/* Nested */}
        {/* Home Routes */}
        <Route path="/home/*" element={<HomeRoute/>} />
      </Routes>
    </Router>
  );
}

export default App;
