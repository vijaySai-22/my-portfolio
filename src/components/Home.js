import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <div id="home">
          <Row>
            <Col xs={12} md={6}>
              <h4>Hello there,</h4>
              <h1>
                My name is <u>VIJAY</u>.
              </h1>
              <p>Front-end web developer</p>
              <Button variant="dark">Download CV</Button>
              {"  "}
              <Button variant="outline-dark">Mail</Button>
            </Col>
            {/* <Col xs={12} md={6}>
                
            </Col> */}
          </Row>
        </div>
      </Container>
    </>
  );
}