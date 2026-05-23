import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Homepage from "./components/homepage";
import ForgetPass from "./components/forgetPass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotPass" element={<ForgetPass/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
