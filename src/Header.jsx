import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHome,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePicture from './image/bojanslika.jpg'
import { Home } from "./Home";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Header = () => {
  return (
    <>
      <Accordion>
        <div id="main-header">
          <Row className="no-gutters">
            <Col  md={4} className='bg-dark d-flex profile-img'>
              <img
                src={profilePicture}
                alt="profile"
                
              />
            </Col>
            <Col  md={8} className='Header'>
              <div className="d-flex flex-column">
                <div className="p-5 bg-dark text-white">
                  <Row className="d-flex  align-items-center homeRow">
                    <h1 className=" name">
                      <strong className='name'>Bojan</strong> Majmunovic
                    </h1>
                    <div className='social d-flex'>
                    <div className="d-md-block git">
                      <a href="https://github.com/Bojan987" className="text-white">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="fas"
                          size="2x"
                        />
                      </a>
                    </div>
                    <div className='linkedin'>
                      <a
                        href="https://www.linkedin.com/in/bojan-majmunovic-65456b1b1/"
                        className="text-white"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="fas"
                          size="2x"
                        />
                      </a>
                    </div>
                    </div>
                  </Row>
                </div>
                <div className="p-4 bg-black">
                  Front-End Web Developer
                </div>

                <div>
                  <div className="d-flex flex-row text-white align-items-stretch text-center">
                    <Accordion.Toggle
                      as={Card.Body}
                      eventKey="0"
                      className="port-item p-4 bg-primary"
                    >
                      <FontAwesomeIcon
                        icon={faHome}
                        className="fas"
                        size="2x"
                      />
                      <span className="d-none d-sm-block">Home</span>
                    </Accordion.Toggle>

                    <Accordion.Toggle
                      as={Card.Body}
                      eventKey="1"
                      className="port-item p-4 bg-success"
                    >
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="fas"
                        size="2x"
                      />
                      <span className="d-none d-sm-block">Resume</span>
                    </Accordion.Toggle>

                    <Accordion.Toggle
                      as={Card.Body}
                      eventKey="2"
                      className="port-item p-4 headerProjects bg-danger"
                    >
                      <FontAwesomeIcon
                        icon={faFolderOpen}
                        className="fas"
                        size="2x"
                      />
                      <span className="d-none d-sm-block">Projects</span>
                    </Accordion.Toggle>

                    <Accordion.Toggle
                      as={Card.Body}
                      eventKey="3"
                      className="port-item p-4 bg-info"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fas"
                        size="2x"
                      />
                      <span className="d-none d-sm-block">Contact</span>
                    </Accordion.Toggle>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Accordion.Collapse eventKey="0">
          <Home />
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Resume/>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="2">
          <Projects/>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="3">
          <Contact/>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};
