import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function Homepage() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(localStorage.getItem("name"));

  const token = localStorage.getItem("token");

  const isLogin = !!token;

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
    <>
      {isLogin ? (
        <div className="container mt-5 text-center">
          <h1>
            Welcome <span className="text-danger">{userName}</span>
          </h1>

          <p>You have logged in successfully.</p>

          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="container mt-5 text-center">
          <h1>Homepage</h1>

          <Link to="/signup" className="btn btn-primary me-2">
            Signup
          </Link>

          <Link to="/login" className="btn btn-success">
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default Homepage;
