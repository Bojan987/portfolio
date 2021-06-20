import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import project1 from "./image/dota-teams-image2.jpg";
import project2 from "./image/dota-games-image2.jpg";
import project3 from "./image/pupinBites-image.jpg";
import project4 from "./image/BelgradeTimes.jpg";

export const Projects = () => {
  return (
    <>
      <Card id="myProjects">
        <Card.Body className="bg-danger text-white py-5">
          <h2>My Projects</h2>
          <p className="lead">
            Mix a little foolishness with your serious plans: it’s lovely to be
            silly at the right moment.
          </p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="py-5">
          <h3>What Have I Built?</h3>
          <p>
            Projects are made in React, using OpenDota API and RestDB API
            together with Bootstrap | Chart.js libraries{" "}
          </p>
          <Row className="no-gutters">
            <Col lg={6}>
              <a href="https://github.com/Bojan987/Newsletter/blob/main/README.md">
                <img src={project4} alt="Project" className="projectImage" />
              </a>
            </Col>
            <Col lg={6}>
              <a href="https://dota2-teams.netlify.app/">
                <img src={project1} alt="Project " className="projectImage" />
              </a>
            </Col>
            <Col lg={6}>
              <a href="https://pupin-bites.netlify.app/">
                <img src={project3} alt="Project" className="projectImage" />
              </a>
            </Col>
            {/* <Col lg={{ span: 6, offset: 3 }}> */}
            <Col lg={6}>
              <a href="https://dota-games.netlify.app/">
                <img src={project2} alt="Project" className="projectImage" />
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
