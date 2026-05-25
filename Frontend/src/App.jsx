import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup1";

import Login from "./components/Login1";

import Homepage from "./components/Homepage1";

import ForgetPass from "./components/ForgetPass1";

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
