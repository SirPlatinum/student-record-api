import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js"; 

dotenv.config();

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Use routes
app.use("/api/students", studentRoutes); 

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
