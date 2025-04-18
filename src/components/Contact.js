import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner'; // For loading indication

// import '../styles/Contact.css'; // DELETE THIS LINE

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState({ type: '', text: '' }); // Use object for type and text

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus({ type: '', text: '' });

    // --- Simulate backend call ---
    console.log("Form submitted:", form);
    try {
        // Replace this with your actual fetch call to a backend API endpoint
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        // Assuming success:
        setMessageStatus({ type: 'success', text: 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
        console.error("Form submission error:", error);
        setMessageStatus({ type: 'danger', text: 'Failed to send message. Please try again.' });
    } finally {
        setIsSubmitting(false);
        // Clear status message after a few seconds
        setTimeout(() => setMessageStatus({ type: '', text: '' }), 5000);
    }
    // --- End Simulation ---
  };

  return (
    <Container as="section" className="contact-section py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}> {/* Control the width */}
          <div className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead mb-4">
              Have a question or want to work together? Leave your details below!
            </p>
          </div>

          {/* Display Status Message */}
          {messageStatus.text && (
            <Alert variant={messageStatus.type} className="text-center">
              {messageStatus.text}
            </Alert>
          )}

          <Form onSubmit={submitForm}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    disabled={isSubmitting}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    disabled={isSubmitting}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6} // Suggest number of rows
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={isSubmitting}
              />
            </Form.Group>

            <div className="text-center mt-4"> {/* Center button */}
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={18} />
                  </>
                )}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;