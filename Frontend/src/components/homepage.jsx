import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Homepage() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState(localStorage.getItem("name"));

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true",
  );

  const handleLogout = () => {
    localStorage.removeItem("name");

    localStorage.removeItem("isLogin");

    setUserName("");

    setIsLogin(false);

    navigate("/");
  };

  return (
    <>
      {isLogin ? (
        <div className="container mt-5 text-center">
          <h1>
            Welcome <span className="text-danger">{userName}</span>
          </h1>

          <p>
            <u className="text-success">{userName}</u> logged in
            successfully
          </p>

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
