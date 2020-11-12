import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloud} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer id="main-footer" className="p-5 bg-dark text-white">
        <Row>
          <Col md={6}>
            <a href="https://raw.githubusercontent.com/Bojan987/portfolio/master/src/image/Bojan%20Majmunovic-eng.pdf" className="btn btn-outline-light"  download>
            <i><FontAwesomeIcon icon={faCloud} className="fas"size="1x"/></i>
                <span>  Download Resume</span>
            </a>
          </Col>
        </Row>
      </footer>
    </>
  );
};
