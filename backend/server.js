import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import companyRoutes from "./routes/companyRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// CORS setup for deployed frontend
app.use(cors({
  origin: "https://company-directory-lz0cyjr7b-acefaisal13-gmailcoms-projects.vercel.app",
  credentials: true,
}));

// Root route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// -------------------
// Routes
// -------------------
app.use("/api/companies", companyRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// Debug logs to confirm routes are loaded
console.log("Company routes mounted at /api/companies");
console.log("Contact routes mounted at /api/contact");
console.log("Auth routes mounted at /api/auth");

// -------------------
// MongoDB Connection
// -------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.error("MongoDB connection error:", err));

// -------------------
// Start Server
// -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
