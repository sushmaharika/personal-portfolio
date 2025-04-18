import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiSun, FiMoon } from 'react-icons/fi';

// Import Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Import your portfolio sections
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

// Import Portfolio-specific styles (keep minimal)
import '../styles/Portfolio.css';

// Receive theme state and toggle function from App.js
const Portfolio = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  // Effect to check login status (remains the same)
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  // Theme application is now handled in App.js via data-bs-theme

  const logout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  return (
    <div className="portfolio-page">
      {/* Bootstrap Navbar */}
      <Navbar
         bg={theme} // Use theme to set background (light/dark)
         variant={theme} // Use theme to set text/link color
         expand="lg"
         className="portfolio-header shadow-sm" // Add shadow utility
         sticky="top" // Make navbar sticky
      >
        <Container fluid> {/* Use fluid for potentially wider content */}
          <Navbar.Brand href="#home" className="fw-bold"> {/* Use fw-bold utility */}
            My Portfolio
            {/* Or: Sushma Harika Pallam */}
          </Navbar.Brand>
          {/* Optional: Add Navbar.Toggle and Navbar.Collapse for menu on smaller screens */}
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className="me-auto"> */}
          {/* Potential Nav Links Here (e.g., #skills, #projects) */}
          {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
          {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
          {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
          {/* </Nav> */}
          {/* </Navbar.Collapse> */}

          {/* Actions on the right */}
          <Nav className="ms-auto d-flex flex-row align-items-center"> {/* Use ms-auto to push right */}
            {/* Theme Toggle Button */}
            <Button
              variant="outline-secondary" // Use outline style
              onClick={toggleTheme}
              className="me-2 rounded-circle p-2 lh-1" // Style as circle, adjust padding/line-height
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </Button>

            {/* Logout Button */}
            <Button
              variant="outline-danger" // Use outline danger style
              onClick={logout}
              size="sm" // Make button slightly smaller
            >
              <FiLogOut size={16} className="me-1" /> {/* Use Bootstrap margin utility */}
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <main className="portfolio-main">
        {/* Wrap sections in a Bootstrap Container for centering and padding */}
        <Container >
           {/* Add id attributes for potential navbar scrolling */}
            <div id="home">
                <Introduction />
            </div>
             <div id="skills">
                <Skills />
             </div>
              <div id="projects">
                 <Projects />
              </div>
               <div id="contact">
                  <Contact />
               </div>
        </Container>
      </main>

      {/* Bootstrap Footer */}
      <footer className="portfolio-footer text-center text-muted bg-body-tertiary"> {/* Use BS classes */}
         <Container>
            <p className="mb-0"> {/* Remove bottom margin */}
                © {new Date().getFullYear()} Sushma Harika Pallam. All rights reserved.
            </p>
         </Container>
      </footer>
    </div>
  );
};

export default Portfolio;