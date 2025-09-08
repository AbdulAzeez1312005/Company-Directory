import express from "express";
import { getCompanies, createCompany } from "../controllers/companyController.js";

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.send("✅ Companies route works");
});
// Routes
router.get("/", getCompanies);
router.post("/", createCompany);

export default router;
