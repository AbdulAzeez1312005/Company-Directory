import express from "express";
import { getCompanies, createCompany } from "../controllers/companyController.js";

const router = express.Router();

// Routes
router.get("/", getCompanies);
router.post("/", createCompany);

export default router;
