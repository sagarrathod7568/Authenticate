const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// DATABASE
connectDB();

// MIDDLEWARE
app.use(express.json());

app.use(cors());

// ROUTES
app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
