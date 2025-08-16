import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Test Route
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend API is running 🚀" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
