import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import '../styles/Projects.css'; // DELETE THIS LINE

// Project Data (Ensure image paths are in /public/assets/)
const projectData = [
    {
        title: "Task Management System",
        desc: "Built using React.js, Node.js, and MongoDB. Allows users to add, edit, prioritize, and delete tasks with categorized views (important, completed, all) for enhanced organization.",
        img: "/assets/TaskManagementSystem.png",
        demo: "#",
        repo: "https://github.com/sushmaharika/Task-System-Project"
    },
    {
        title: "Vegetable Dukhan",
        desc: "MERN stack e-commerce platform for vegetable sales with secure JWT authentication, cart functionality, React Router navigation, and PayPal integration for secure transactions.",
        img: "/assets/VegetableDhukhan.png",
        demo: "https://vegdukhan.vercel.app",
        repo: "https://github.com/sushmaharika/Vegetable-Dhukhan"
    },
    {
        title: "Psychological Instability Prediction",
        desc: "Engineered a full-stack ML project analyzing 7 algorithms and 1259 datasets. Delivers results with an impressive accuracy score of 0.975.",
        img: "/assets/Psychology.png",
        demo: "#",
        repo: "https://github.com/sushmaharika/Psychological-Instability-Prediction-Using-MachineLearning"
    },
    {
        title: "Jobby App",
        desc: "An interactive job search platform developed with React.js and CSS, providing seamless navigation and easy access to job listings.",
        img: "/assets/JobbyApp.png",
        demo: "https://harikajobby.ccbp.tech/login",
        repo: "https://github.com/sushmaharika/JobbyApp"
    },
    {
        title: "Rock Paper Scissors",
        desc: "A game built with React.js and Styled Components, featuring a clear interface and instructions for playing with 100% correctness.",
        img: "/assets/RockPapperScissor.png",
        demo: "https://harikarps.ccbp.tech/",
        repo: "https://github.com/sushmaharika/Rock-Papper-Scissor"
    },
    {
      title: "Personal Portfolio Website",
      desc: "This very portfolio! Built with React.js, Bootstrap, and React Router, featuring user signup/login, session management, light/dark theme toggle, and responsive design.", // Customize description
      img: "/assets/portfolio.png", // MAKE SURE TO CREATE THIS SCREENSHOT
      demo: "https://personal-portfolio1-psi-lovat.vercel.app/portfolio", // <-- REPLACE WITH YOUR LIVE DEPLOYMENT URL
      repo: "https://github.com/sushmaharika/personal-portfolio" // <-- REPLACE WITH YOUR REPO URL
    },
];


const Projects = () => (
  <Container as="section" className="projects-section py-5 mb-5">
    <h2 className="text-center section-title">My Projects</h2>
    <Row xs={1} md={2} lg={3} className="g-4 justify-content-center"> {/* Responsive grid */}
      {projectData.map((project) => (
        <Col key={project.title}>
          <Card className="h-100 shadow-sm"> {/* Use Bootstrap Card */}
             {/* Check if image path exists before rendering */}
            {project.img && project.img !== '#' && (
              <Card.Img variant="top" src={project.img} alt={`${project.title} screenshot`} />
            )}
            <Card.Body className="d-flex flex-column"> {/* Flex column for footer alignment */}
              <Card.Title as="h5">{project.title}</Card.Title>
              <Card.Text className="flex-grow-1"> {/* flex-grow pushes footer down */}
                {project.desc}
              </Card.Text>
              <div className="mt-auto project-links"> {/* mt-auto pushes links to bottom */}
                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  disabled={!project.demo || project.demo === '#'} // Disable if no demo link
                  title={!project.demo || project.demo === '#' ? "Demo not available" : "View Live Demo"}
                  onClick={(e) => (!project.demo || project.demo === '#') && e.preventDefault()}
                  className="me-2" // Margin end
                >
                  <FiExternalLink size={16} /> Live Demo
                </Button>
                <Button
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-secondary"
                  size="sm"
                  disabled={!project.repo || project.repo === '#'}
                  title={!project.repo || project.repo === '#' ? "Repo not available" : "View Source Code"}
                  onClick={(e) => (!project.repo || project.repo === '#') && e.preventDefault()}
                >
                  <FiGithub size={16} /> GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;