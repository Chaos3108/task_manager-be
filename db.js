const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const dbConnect = () => {
  try {
    const isConnected = mongoose.connect(DB_URL);
    if (!isConnected) throw new Error("Database connection failed");
    console.log("💻 MongoDB Connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

module.exports = dbConnect;
