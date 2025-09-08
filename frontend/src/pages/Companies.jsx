import { useEffect, useState } from "react";
import { fetchCompanies } from "../services/api";
import CompanyCard from "../components/CompanyCard";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";

export default function Companies() {
  const [filters, setFilters] = useState({ name: "", industry: "", location: "" });
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = async (params = {}) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await fetchCompanies(params);
      setCompanies(data || []);
    } catch (e) {
      console.error("Error fetching companies:", e);
      setError("Failed to load companies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSearch = () => {
    const params = {};
    if (filters.name) params.name = filters.name;
    if (filters.industry) params.industry = filters.industry;
    if (filters.location) params.location = filters.location;
    load(params);
  };

  const handleClear = () => {
    setFilters({ name: "", industry: "", location: "" });
    load();
  };

  return (
    <section className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Companies</h2>
        <Link to="/add-company" className="btn btn-primary">
          + Add New Company
        </Link>
      </div>

      <FilterBar
        filters={filters}
        onChange={setFilters}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {loading && <p className="text-muted">Loading companies…</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && companies.length === 0 && (
        <div className="alert alert-warning">No companies found.</div>
      )}

      <div className="row">
        {companies.map((c) => (
          <CompanyCard key={c._id} company={c} />
        ))}
      </div>
    </section>
  );
}
