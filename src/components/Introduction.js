import React from 'react';
import { FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; // For easier button layout

// Relies on Portfolio.css for potential overrides and spacing
// import '../styles/Intro.css'; // DELETE THIS LINE

const Introduction = () => {
  return (
    <Container as="section" className="introduction-section text-center py-5 mb-5"> {/* Use Bootstrap classes */}
      <h1 className="display-4 mb-3"> {/* Bootstrap heading class */}
        Hi, I'm <span className="highlight">Sushma Harika Pallam</span>
      </h1>
      <p className="lead mb-4"> {/* Bootstrap lead class */}
        Full Stack Developer | Passionate about building modern and responsive web applications.
      </p>
      {/* Use Stack for horizontal button group with spacing */}
      <Stack direction="horizontal" gap={3} className="justify-content-center flex-wrap intro-links">
        <Button
          variant="primary" // Main action style
          href="/assets/HarikaPallam_Resume.pdf" // Ensure path is relative to public folder
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume"
          title="View Resume"
          size="lg" // Larger button
        >
          <FiFileText size={18} className="me-2" />
          Resume
        </Button>
        <Button
          variant="outline-secondary" // Secondary action style
          href="https://github.com/sushmaharika"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          title="Visit GitHub profile"
          size="lg"
        >
          <FiGithub size={18} className="me-2" />
          GitHub
        </Button>
        <Button
          variant="outline-info" // Another style option
          href="https://linkedin.com/in/sushma-harika-pallam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          title="Visit LinkedIn profile"
          size="lg"
        >
          <FiLinkedin size={18} className="me-2" />
          LinkedIn
        </Button>
      </Stack>
    </Container>
  );
};

export default Introduction;