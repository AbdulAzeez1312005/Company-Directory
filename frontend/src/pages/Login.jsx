import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

function Login({ setUser }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await login(formData); // ✅ calls backend
      // ✅ only store the user object
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/profile"); // redirect to profile page
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm p-4">
            <h3 className="text-center mb-4">Login</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
                  Login
                </Button>
              </div>
            </Form>

            <div className="text-center mt-3">
              <small>
                Don’t have an account?{" "}
                <a href="/signup" className="text-primary">
                  Sign up
                </a>
              </small>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
