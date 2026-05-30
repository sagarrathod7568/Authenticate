import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/custome.css"

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/auth/signup", { name, email, password })
      .then((res) => {
        if (res.data.success) {
          console.log(res, res.data.message);
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        } else {
          console.log(res.data.message);
          Swal.fire({
            icon: "warning",
            title: res.data.message,
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: err,
          timer: 3000,
        });
      });
  };

  return (
    <>
      <div className="container signup-page d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-3">Signup</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="signup-eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Signup
            </button>
          </form>

          <p className="text-center mt-3 mb-1">
            Already have an account?{" "}
            <a className="text-decoration-none" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
