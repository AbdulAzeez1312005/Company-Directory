// src/services/api.js
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // now uses deployed backend
  timeout: 10000,
});

// ========== AUTH ==========
export const signup = (userData) => api.post("/auth/signup", userData);
export const login = (userData) => api.post("/auth/login", userData);

// ========== COMPANIES ==========
export const fetchCompanies = (params = {}) =>
  api.get("/companies", { params });
export const createCompany = (payload) => api.post("/companies", payload);

// ========== CONTACT (optional) ==========
export const sendContactMessage = (payload) => api.post("/contact", payload);

export default api;
