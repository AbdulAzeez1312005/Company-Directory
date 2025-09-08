import PropTypes from "prop-types";

/* Company Card Component */
export default function CompanyCard({ company }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">{company.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{company.industry}</h6>
          <p className="card-text">
            <strong>Location:</strong> {company.location || "N/A"} <br />
            <strong>Size:</strong> {company.size || "N/A"} employees <br />
            <strong>Founded:</strong> {company.founded || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

CompanyCard.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    industry: PropTypes.string,
    location: PropTypes.string,
    size: PropTypes.number,
    founded: PropTypes.number,
  }).isRequired,
};
