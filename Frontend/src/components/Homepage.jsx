import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

function Homepage() {

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
