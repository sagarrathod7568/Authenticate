import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isVerified && password !== confirmPassword) {
      alert("Passwords not matching!");

      return;
    }

    axios
      .post("http://localhost:3001/forgotPass", {
        email,
        password: isVerified ? password : "",
      })
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);

          // Email verified
          if (!isVerified) {
            setIsVerified(true);
          } else {
            // Password updated
            navigate("/login");
          }
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow">
          <h3 className="text-center mb-3">Forgot Password</h3>

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

            {isVerified && (
              <>
                <div className="mb-3">
                  <label>New Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter new password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Confirm Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-enter password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className="btn btn-primary w-100">
              {isVerified ? "Update Password" : "Verify Email"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
