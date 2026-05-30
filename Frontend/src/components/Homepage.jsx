import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

function Homepage() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(localStorage.getItem("name"));

  const token = localStorage.getItem("token");

  const isLogin = !!token;

  return (
    <>
      {isLogin && (
        <>
          <Navbar />
          <Hero />
          <Features />
          <Footer />
        </>
      )}
    </>
  );
}

export default Homepage;
