import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import Swal from "sweetalert2";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isVerified && password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords not matching!",
        timer: 3000,
      });

      return;
    }

    API.post("/auth/forgotPass", {
      email,
      password: isVerified ? password : "",
    })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });

          // Email verified
          if (!isVerified) {
            setIsVerified(true);
          } else {
            // Password updated
            navigate("/login");
          }
        } else {
          //   alert(res.data.message);
          Swal.fire({
            icon: "warning",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",

      width: "400px",
      height: "600px",

      customClass: {
        popup: "small-popup",
        title: "small-title",
      },
    }).then((result) => {
      // IF YES CLICKED
      if (result.isConfirmed) {
        navigate("/login");
      }
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
                required
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
          <button
            onClick={handleCancel}
            className="btn btn-secondary mt-2 w-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
