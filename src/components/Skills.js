import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'; // Use Bootstrap ProgressBar

// import '../styles/Skills.css'; // DELETE THIS LINE

// Skills data (level is used for ProgressBar 'now' prop)
const skills = [
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Bootstrap", level: 75 }, // Added Bootstrap skill
  { name: "Git & GitHub", level: 85 },
  { name: "SQLite", level: 70 },
  { name: "MongoDB", level: 80 },
  { name: "MongoDB Atlas", level: 75 }
];

const Skills = () => (
  <Container as="section" className="skills-section py-5 mb-5">
    <h2 className="text-center section-title">Technical Skills</h2>
    <Row xs={1} md={2} lg={3} className="g-4 justify-content-center"> {/* Responsive grid with gutters */}
      {skills.map((skill) => (
        <Col key={skill.name}>
          {/* Wrap each skill in a Card */}
          <Card className="h-100 shadow-sm skill-item-card"> {/* Use h-100 for equal height */}
            <Card.Body>
              <div className="d-flex justify-content-between align-items-baseline mb-2">
                <Card.Title as="h6" className="mb-0">{skill.name}</Card.Title>
                <span className="text-primary fw-semibold">{skill.level}%</span>
              </div>
              {/* Bootstrap ProgressBar */}
              <ProgressBar
                 now={skill.level}
                 aria-label={`${skill.name} proficiency`}
                 variant="primary" // Optional: change color (primary, success, etc.)
                 // animated // Optional: add animation
                 // striped // Optional: add stripes
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Skills;