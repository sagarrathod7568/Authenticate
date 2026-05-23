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

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await EmployeeModel.findOne({
      email: email,
    });

    if (user) {
      if (user.password === password) {
        res.json({
          success: true,
          message: "Login Successful!",
          name: user.name,
        });
      } else {
        res.json({
          success: false,
          message: "Incorrect password!",
        });
      }
    } else {
      res.json({
        success: false,
        message: "User not found, please SignUp!",
      });
    }
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

app.post("/forgotPass", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Check email exists
    const user = await EmployeeModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "Email not found!",
      });
    }

    // Step 2: If password not sent yet
    if (!password) {
      return res.json({
        success: true,
        message: "Email verified",
      });
    }

    // Step 3: Update password
    await EmployeeModel.updateOne({ email }, { $set: { password } });

    res.json({
      success: true,
      message: "Password updated successfully!",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

app.listen(3001, () => {
  console.log("server is running on 3000");
});
