import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/custome.css"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        // SAVE TOKEN
        localStorage.setItem("token", res.data.token);

        localStorage.setItem("name", res.data.name);

        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: res.data.message,
          timer: 3000,
        });
      }
    } catch (err) {
      console.log(err);

      Swal.fire({
        icon: "error",
        title: err,
        timer: 3000,
      });
    }
  };

  return (
    <>
      <div className="container login-page d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-3">Login</h3>

          <form onSubmit={handleSubmit}>
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
                className="login-eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <p className="text-center mt-3 mb-1">
            Don't have an account?{" "}
            <Link className="text-decoration-none" to="/signup" href="/signup">
              Signup
            </Link>
          </p>
          <a className="text-decoration-none" href="/forgotPass">
            Forgot Password
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
