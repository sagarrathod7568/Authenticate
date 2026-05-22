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
        console.log(res,"success");
        // navigate("/");
        if(res.data === "success"){
          alert("Login successfully");
            navigate("/");
        }else{
          alert("Login failed");
        }
      })
      .catch((err) =>{
        alert("Login failed");
        console.log(err);
      })

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
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" href="/signup">
              Signup
            </Link>
          </p>
          <a href="/">Back to Home</a>
        </div>
      </div>
    </>
  );
}

export default Login;
