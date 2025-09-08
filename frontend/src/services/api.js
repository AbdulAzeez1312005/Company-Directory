// src/services/api.js
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 10000,
});

// ========== AUTH ==========

// Signup user
export const signup = (userData) => api.post("/auth/signup", userData);

// Login user
export const login = (userData) => api.post("/auth/login", userData);

// ========== COMPANIES ==========

// Get all companies (with optional filters)
export const fetchCompanies = (params = {}) =>
  api.get("/companies", { params });

// Create a new company
// ✅ No JWT for now, just a simple POST
export const createCompany = (payload) => api.post("/companies", payload);

// ========== CONTACT (optional) ==========
// Example usage if you add contact route later:
// export const sendContactMessage = (payload) => api.post("/contact", payload);

export default api;
