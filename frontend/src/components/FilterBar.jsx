import PropTypes from "prop-types";

export default function FilterBar({ filters, onChange, onSearch, onClear }) {
  return (
    <div className="card mb-3">
      <div className="card-body row g-3 align-items-end">
        <div className="col-md-4">
          <label className="form-label">Search by Name</label>
          <input
            className="form-control"
            placeholder="e.g. TechCorp"
            value={filters.name}
            onChange={(e) => onChange({ ...filters, name: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Industry</label>
          <input
            className="form-control"
            placeholder="e.g. IT, Finance"
            value={filters.industry}
            onChange={(e) => onChange({ ...filters, industry: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Location</label>
          <input
            className="form-control"
            placeholder="e.g. Bangalore"
            value={filters.location}
            onChange={(e) => onChange({ ...filters, location: e.target.value })}
          />
        </div>
        <div className="col-md-2 d-flex gap-2">
          <button className="btn btn-primary w-100" onClick={onSearch}>
            Search
          </button>
          <button className="btn btn-outline-secondary w-100" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

FilterBar.propTypes = {
  filters: PropTypes.shape({
    name: PropTypes.string,
    industry: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
