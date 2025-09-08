import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        import.meta.env.VITE_API_BASE_URL + "/contact",
        form
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err.message);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="container py-4">
      <h2>Contact</h2>

      {sent && <div className="alert alert-success">Message sent. Thank you!</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!sent && (
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              required
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      )}
    </section>
  );
}
