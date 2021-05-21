import React from "react";
import { Card,ProgressBar } from 'react-bootstrap';


export const Home = () => {
  return (
    <>
      <div  id="home">
        <Card>
          <Card.Body className="bg-primary text-white py-5">
            <h2>Welcome to my Page</h2>
            <p className ="lead">
              As a Developer, I have learned that the price of
              success is dedication, hard work and an incessant devotion to the
              things you want to see happen.
            </p>
          </Card.Body>
        </Card>
      </div>
      <Card>
        <Card.Body className=" py-5">
          <h3>My Skills</h3>
          
          <hr />
          <h4>HTML 5</h4>
          <ProgressBar now={75} variant="success" className="mb-3" />

          <h4>CSS 3</h4>
          <ProgressBar now={70} variant="success" className="mb-3" />
          <h4>Bootstrap</h4>
          <ProgressBar now={70} variant="success" className="mb-3" />
          <h4>JavaScript</h4>
          <ProgressBar now={40} variant="success" className="mb-3" />
          <h4>React.js</h4>
          <ProgressBar now={40} variant="success" className="mb-3" />
          <h4>NodeJS</h4>
          <ProgressBar now={25} variant="success" className="mb-3" />
          <h4>MongoDB</h4>
          <ProgressBar now={20} variant="success" className="mb-3" />
          <h4>MS SQL</h4>
          <ProgressBar now={20} variant="success" className="mb-3" />
        </Card.Body>
      </Card>
      </>
  );
};
