import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  const [show, setShow] = useState(1);
  const name = "VIJAY";
  const [namee, setNamee] = useState(name);
  const [idx, setIdx] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (show === 3) setShow(1);
      else setShow(show + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [show]);
  useEffect(() => {
    const interval = setInterval(() => {
      setNamee(
        name.slice(0, idx)
      );
      if (idx === 5) setIdx(1);
      else setIdx(idx + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, [namee]);
  return (
    <>
      <Container>
        <div id="home">
          <Row>
            <Col xs={12} md={6}>
              {show === 1 && <h4 id="ani-greet">Hello,</h4>}
              {show === 2 && <h4 id="ani-greet">Hi there,</h4>}
              {show === 3 && <h4 id="ani-greet">Welcome,</h4>}
              <h1 style={{ marginTop: "-20px" }}>
                My name is{" "}
                <u>
                  <b id='ani-name'>{namee}</b>
                </u>
              </h1>
              <p>Front-end web developer</p>
              <Button variant="dark" className="mr-5 d-btn">
                <i class="fas fa-download"></i> Download CV
              </Button>
              <Button variant="outline-dark" href="#work">
                <i class="fas fa-briefcase"></i> See My Work
              </Button>
            </Col>
            {/* <Col xs={12} md={6}>
                
            </Col> */}
          </Row>
        </div>
      </Container>
    </>
  );
}
