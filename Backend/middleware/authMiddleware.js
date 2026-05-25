const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.json({
      success: false,
      message: "No token!",
    });
  }

  token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.id;

    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Invalid token!",
    });
  }
};

module.exports = protect;
