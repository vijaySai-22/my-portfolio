import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-text">
              <h1>A bit about me</h1>
              <h5>I"m Vijay! (/'vɪdʒaɪ/)</h5>
              <p>
                My full name is Vijay Sai Prasad Pujari. I am a graduate
                student, looking for a job. I completed my Bachelors's in
                Computer Application from Kakiada Sri Aditya Degree College
                affiliated to Dr. B.R Ambedkar University, Srikakulam, AP.
              </p>
              <p>I am very much interested in front-end web develpoment.</p>
            </div>
          </Col>
          <Col>
            <div className="timeline">
              <h3>My Education</h3>
              <Hel
                title="Under Graduation"
                time="2019-2022"
                from="BCA from Kakiada Sri Aditya Degree College."
                with="7.91 CGPA"
              />
              <Hel
                title="Intermediate"
                time="2017-2019"
                from="MPC from Sri Chaitanya Junior College."
                with="9.42 GPA"
              />
              <Hel
                title="SSC"
                time="2016-2017"
                from="From Sri Gurunarayana Vidya Niketan School."
                with="8.7 GPA"
              />
            </div>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
function Hel(props) {
  return (
    <Row style={{ width: "500px" }} key={props.title}>
      <Col xs={1} md={1}>
        <div id="circle"></div>
        <div id="line"></div>
      </Col>
      <Col>
        <Card bg="light" text="dark" id="timeline-card">
          <Card.Body>
            <Card.Title>
              {props.title}{" "}
              <span
                style={{ float: "right", fontSize: "0.8em", marginTop: "3px" }}
              >
                {props.time}
              </span>
            </Card.Title>
            <Card.Text>
              {props.from} <br />
              {`with ` + props.with}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}