import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.success) {
          localStorage.setItem("name", res.data.name);
           localStorage.setItem("isLogin", "true");
          alert(res.data.message);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(res.data.message);
      });
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
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
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" href="/signup">
              Signup
            </Link>
          </p>
          <a className="" href="/forgotPass">
            Forgot Password
          </a><br />
          <a href="/">Back to Home</a>
        </div>
      </div>
    </>
  );
}

export default Login;
