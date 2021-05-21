import React from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";

export const Resume = () => {
  return (
    <>
      <div id="resume">
        <Card>
          <Card.Body className="bg-success text-white py-5">
            <h2>My Resume</h2>
            <p className="lead">
              The more I want to get something done, the less I call it work
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body className=" py-5">
            <h3>Education</h3>
            <hr />
            <Card className="mb-5">
              <Card.Body>
                <Card.Title>IT Bootcamp</Card.Title>
                <p className="p-2 mb-3 bg-dark text-white moduleBG">
                  Module : JavaScript & React.js
                </p>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  Faculty of Economics | University of Belgrade
                </Card.Title>
                <p className="p-2 mb-3 bg-dark text-white moduleBG">
                  Module : Marketing
                </p>
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  High School of Electrical Engineering "Rade Koncar"
                </Card.Title>
                <p className="p-2 mb-3 bg-dark text-white moduleBG">
                  Module : Computer Engineering
                </p>
              </Card.Body>
            </Card>
            <h3>Where Have I Worked?</h3>

            <hr />
            <CardDeck>
              <Row>
                <Col xs={12} lg={4} className='py-2'>
                  <Card className='job'>
                    <Card.Body className='job-content'>
                      <Row>
                        <Col xs={12}>
                          <Card.Title>
                            <h4>Think Smart</h4>
                          </Card.Title>
                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Intern
                          </p>

                          <Card.Text> Developing Newletter platform</Card.Text>
                          <Card.Text> Technology stack: MERN</Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Card.Footer className="footer">
                            <h6 className="text-muted">Date: Present</h6>
                          </Card.Footer>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12} lg={4} className='py-2'>
                  <Card className='job'>
                    <Card.Body className='job-content'>
                      <Row>
                        <Col xs={12}>
                          <Card.Title>
                            <h4>EGO Express DOO</h4>
                          </Card.Title>

                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Logistic Specialist
                          </p>

                          <Card.Text>
                            Booking loads and communicating with brokers,drivers
                            and customers
                          </Card.Text>
                          <Card.Text>
                            Route planning across the United States
                          </Card.Text>
                          <Card.Text>
                            Scheduling/rescheduling pickup and delivery
                            appointments
                          </Card.Text>
                          <Card.Text>
                            Resolving all kinds of transportation issues
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Card.Footer>
                            <h6 className="text-muted">Date: 2019</h6>
                          </Card.Footer>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={4} className='py-2'>
                  <Card className='job'>
                    <Card.Body className='job-content'>
                      <Row>
                        <Col xs={12}>
                          <Card.Title>
                            <h4>IMI DOO</h4>
                          </Card.Title>

                          <p className="p-2 mb-3 bg-dark text-white">
                            Position: Accountant
                          </p>

                          <Card.Text>
                            Booking of incoming, outgoing invoices and bank
                            statements
                          </Card.Text>
                          <Card.Text>
                            Reconciling balances with customers and suppliers
                          </Card.Text>
                          <Card.Text>Calculating sales tax</Card.Text>
                          <Card.Text>Support to Senior Accountant</Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Card.Footer>
                            <h6 className="text-muted">Date: 2017 - 2019</h6>
                          </Card.Footer>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  {/* <Card>
                    <Card.Body>
                      <Card.Title>
                        <h4>IMI DOO</h4>
                      </Card.Title>
                      <p className="p-2 mb-3 bg-dark text-white">
                        Position: Accountant
                      </p>

                      <Card.Text>
                        - Booking of incoming, outgoing invoices and bank
                        statements
                      </Card.Text>
                      <Card.Text>
                        - Reconciling balances with customers and suppliers
                      </Card.Text>
                      <Card.Text>- Calculating sales tax</Card.Text>
                      <Card.Text>- Support to Senior Accountant</Card.Text>

                      <Card.Footer className="footer imi">
                        <h6 className="text-muted">Date: 2017 - 2019</h6>
                      </Card.Footer>
                    </Card.Body>
                  </Card> */}
                </Col>
              </Row>

              {/* <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h4>Food And Friends</h4>
                                    </Card.Title>
                                    <p className="p-2 mb-3 bg-dark text-white">
                                        Position: Entrepreneur  
                                    </p>
                                    
                                       <Card.Text>- Preparing all documentation for accounting and following financial performance
                                       </Card.Text>
                                       <Card.Text>- Selecting and hiring employees 
                                       </Card.Text>
                                       <Card.Text>- Planning and implementing all supply needs
                                       </Card.Text>
                                       <Card.Text>
                                       - Workflow management
                                       </Card.Text>
                                    
                                    <Card.Footer>
                                    <h6 className = "text-muted">Date: 2019</h6>
                                    </Card.Footer>
                                </Card.Body>
                            </Card> */}
            </CardDeck>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
