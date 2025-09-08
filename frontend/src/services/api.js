// AUTH
export const signup = (userData) => api.post("/api/auth/signup", userData);
export const login = (userData) => api.post("/api/auth/login", userData);

// COMPANIES
export const fetchCompanies = (params = {}) =>
  api.get("/api/companies", { params });
export const createCompany = (payload) =>
  api.post("/api/companies", payload);

// CONTACT
export const sendContactMessage = (payload) =>
  api.post("/api/contact", payload);
