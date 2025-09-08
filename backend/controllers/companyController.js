import Company from "../models/Company.js";

// =====================
// Get companies with filters
// =====================
export const getCompanies = async (req, res) => {
  try {
    const { industry, location, name } = req.query;

    // Build query dynamically
    const query = {};
    if (industry) query.industry = { $regex: industry, $options: "i" }; // partial + case-insensitive
    if (location) query.location = { $regex: location, $options: "i" };
    if (name) query.name = { $regex: name, $options: "i" };

    const companies = await Company.find(query).sort({ createdAt: -1 });

    res.status(200).json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error.message);
    res.status(500).json({ message: "Failed to fetch companies" });
  }
};

// =====================
// Create a new company
// =====================
export const createCompany = async (req, res) => {
  try {
    const { name, industry, location } = req.body;

    // Basic validation
    if (!name || !industry || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCompany = new Company({ name, industry, location });
    const savedCompany = await newCompany.save();

    res.status(201).json(savedCompany);
  } catch (error) {
    console.error("Error creating company:", error.message);
    res.status(500).json({ message: "Failed to create company" });
  }
};
