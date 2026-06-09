import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
import CardDetails from "./Create-edit-card";

function Homepage() {
  const token = localStorage.getItem("token");

  const isLogin = !!token;

  return (
    <>
      {isLogin && (
        <>
          <Navbar />
          <CardDetails />
          <Hero />
          <Features />
          <Footer />
        </>
      )}
    </>
  );
}

export default Homepage;
