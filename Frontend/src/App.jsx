import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";

import Login from "./components/Login";

import Homepage from "./components/Homepage";

import ForgetPass from "./components/ForgetPass";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/forgotPass" element={<ForgetPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
