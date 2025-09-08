import axios from "axios";

// Use environment variable for backend URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});

// AUTH
export const signup = (userData) => api.post("/api/auth/signup", userData);
export const login = (userData) => api.post("/api/auth/login", userData);

// COMPANIES
export const fetchCompanies = (params = {}) => api.get("/api/companies", { params });
export const createCompany = (payload) => api.post("/api/companies", payload);

// CONTACT
export const sendContactMessage = (payload) => api.post("/api/contact", payload);
