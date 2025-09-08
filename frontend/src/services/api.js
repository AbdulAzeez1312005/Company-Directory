import axios from "axios";

// Get API base URL from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// Debug log (optional, remove in production)
console.log("🌍 API Base URL:", API_BASE_URL);

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // set true if you want cookies/session
  headers: {
    "Content-Type": "application/json",
  },
});

// AUTH
export const signup = (userData) => api.post("/api/auth/signup", userData);
export const login = (userData) => api.post("/api/auth/login", userData);

// COMPANIES
export const fetchCompanies = (params = {}) => api.get("/api/companies", { params });
export const createCompany = (payload) => api.post("/api/companies", payload);

// CONTACT
export const sendContactMessage = (payload) => api.post("/api/contact", payload);
