import { useState } from "react";
import { createCompany } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddCompany() {
  const [company, setCompany] = useState({ name: "", industry: "", location: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createCompany(company);
      setSuccess("Company added successfully ✅");
      setTimeout(() => navigate("/companies"), 1500); // redirect after success
    } catch (err) {
      console.error(err);
      setError("Failed to add company ❌");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Add New Company</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={company.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Industry</label>
          <input
            type="text"
            className="form-control"
            name="industry"
            value={company.industry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={company.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Company
        </button>
      </form>
    </div>
  );
}
