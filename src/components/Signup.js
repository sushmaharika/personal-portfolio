import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'; // For feedback

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Basic Validation (Example)
    if (form.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
    }

    // --- INSECURE --- //
    // Storing password directly in localStorage is extremely insecure.
    // Use this ONLY for the assignment demonstration.
    try {
        localStorage.setItem('user', JSON.stringify(form));
        setMessage("Account Created Successfully!");
        // Optionally clear form or redirect after a delay
        setTimeout(() => {
            navigate('/login');
        }, 1500); // Redirect after 1.5 seconds
    } catch (err) {
        setError("Could not create account. Please try again.");
        console.error("Signup Error:", err);
    }
    // --- END INSECURE --- //
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '100%', maxWidth: '400px' }} className="shadow-sm">
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Create Account</h2>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="signupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose a username"
                required
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mt-3">
              Sign Up
            </Button>

             <div className="text-center mt-3">
                <small>Already have an account? <a href="/login">Login</a></small>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;