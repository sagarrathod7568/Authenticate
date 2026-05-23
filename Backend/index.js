const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employees");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/users");

app.post("/signup", async (req, res) => {
  try {
    const isExistEmail = await EmployeeModel.findOne({
      email: req.body.email,
    });

    if (isExistEmail) {
      return res.json({
        success: false,
        message: "Email already exists!",
      });
    }
    const employee = await EmployeeModel.create(req.body);

    res.json({
      success: true,
      message: "Signup successful!",
      employee,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
    });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          success: true,
          massege: "Login Successfull!",
        });
      } else {
        res.json({
          success: false,
          massege: "Incorrect password!",
        });
      }
    } else {
      res.json({
        success: false,
        massege: "User not found, please SignUp!",
      });
    }
  });
});

app.listen(3001, () => {
  console.log("server is running on 3000");
});
