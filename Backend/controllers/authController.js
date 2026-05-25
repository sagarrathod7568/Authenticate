const EmployeeModel = require("../models/Employee");

const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isExistEmail = await EmployeeModel.findOne({
      email,
    });

    if (isExistEmail) {
      return res.json({
        success: false,
        message: "Email already exists!",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await EmployeeModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // GENERATE TOKEN
    const token = generateToken(employee._id);

    res.json({
      success: true,
      message: "Signup successfully!",
      token,
      employee,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
    });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await EmployeeModel.findOne({
      email,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found!",
      });
    }

    // COMPARE PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect password!",
      });
    }

    // GENERATE TOKEN
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: "Login successfully!",
      token,
      name: user.name,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmployeeModel.findOne({
      email,
    });

    if (!user) {
      return res.json({
        success: false,
        message: "Email not found!",
      });
    }

    if (!password) {
      return res.json({
        success: true,
        message: "Email verified",
      });
    }

    // HASH NEW PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    await EmployeeModel.updateOne(
      { email },
      {
        $set: {
          password: hashedPassword,
        },
      },
    );

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
};
