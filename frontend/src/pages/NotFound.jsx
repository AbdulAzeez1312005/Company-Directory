import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container py-5 text-center">
      <h1 className="display-6">404 — Page Not Found</h1>
      <p className="mb-4">The page you are looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-outline-primary">Go Home</Link>
    </section>
  );
}
