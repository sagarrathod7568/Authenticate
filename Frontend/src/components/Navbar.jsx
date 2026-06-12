import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Swal from "sweetalert2";
import "../styles/Navbar.css";

const COUNTRIES = [
  "🇮🇳 India",
  "🇺🇸 United States",
  "🇨🇳 China",
  "🇬🇧 United Kingdom",
  "🇯🇵 Japan",
];

const Navbar = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(localStorage.getItem("name"));

  const token = localStorage.getItem("token");

  const isLogin = !!token;

  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);

  const handleCountrySelect = (country, e) => {
    e.preventDefault();
    setSelectedCountry(country);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        // REMOVE DATA
        localStorage.removeItem("token");

        localStorage.removeItem("name");

        // LOGOUT SUCCESS ALERT
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // REDIRECT
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    });
  };

  return (
    <nav className="container-fluid position-sticky top-0 z-1 px-0">
      <div className="container-fluid d-flex container-1 ">
        <div className="container d-flex justify-content-end align-items-center gap-3 p-2">
          <a
            className="navbar-brand"
            href="https://egov.org.in/upcoming-events/"
          >
            Events
          </a>
          <a className="navbar-brand" href="https://egov.org.in/contact-us/">
            Contact Us
          </a>

          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              {selectedCountry}
            </a>

            <ul className="dropdown-menu">
              {COUNTRIES.map((country) => (
                <li key={country}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => handleCountrySelect(country, e)}
                  >
                    {country}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {isLogin && (
            <div className="login-details">
              <h1 className="user_Name">
                Welcome! <span>{userName}</span>
              </h1>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className=" container-fluid container-2">
        <div className="container navbar navbar-expand-lg navbar-light">
          <a href="#areas-of-work">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png"
              alt="logo"
              width={100}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 gap-lg-4 mt-3 mt-lg-0">
              <a className="nav-link " href="#areas-of-work">
                Areas of Work
              </a>
              <a className="nav-link" href="#ecosystem">
                Ecosystem
              </a>
              <a className="nav-link" href="#products-solutions">
                Products & Solutions
              </a>
              <a className="nav-link" href="#about-us">
                About Us
              </a>
              <a className="nav-link" href="#our-platform">
                Our Platform
              </a>
              <a className="nav-link" href="#resources">
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
