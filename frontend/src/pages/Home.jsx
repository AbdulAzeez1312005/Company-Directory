import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
        <h1 className="display-4 fw-bold mb-3">Company Directory</h1>
        <p className="fs-5 text-muted mb-4">
          Welcome to the Company Directory. Search, filter, and explore
          companies with ease.
        </p>
        <Link to="/companies" className="btn btn-primary btn-lg px-4">
          Browse Companies
        </Link>
      </div>
    </section>
  );
}
