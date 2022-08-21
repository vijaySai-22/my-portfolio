import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function About() {
  const [i, setI] = useState(1);
  useEffect(() => {
    let x = document.getElementById("circle1");
    let y = document.getElementById("circle2");
    let z = document.getElementById("circle3");
    let card1=document.getElementById('timeline-card1');
    let card2=document.getElementById('timeline-card2');
    let card3=document.getElementById('timeline-card3');
    const interval = setInterval(() => {
      if (i === 1) {
        x.style.display = "block";
        x.style.transition = "1.5s";
        y.style.display = "none";
        z.style.display = "none";
        card1.style.color='white';
        card1.style.backgroundColor='black'
        card1.style.transition='1.5s'
        card2.style.color='black';
        card2.style.backgroundColor='white'
        card3.style.color='black';
        card3.style.backgroundColor='white'
      }
      if (i === 2) {
        x.style.display = "none";
        y.style.display = "block";
        y.style.transition = "1.5s";
        z.style.display = "none";
        card2.style.color='white';
        card2.style.backgroundColor='black'
        card2.style.transition='1.5s'
        card1.style.color='black';
        card1.style.backgroundColor='white'
        card3.style.color='black';
        card3.style.backgroundColor='white'
      }
      if (i === 3) {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        z.style.transition = "1.5s";
        card3.style.color='white';
        card3.style.backgroundColor='black'
        card3.style.transition='1.5s'
        card1.style.color='black';
        card1.style.backgroundColor='white'
        card2.style.color='black';
        card2.style.backgroundColor='white'
      }
      if (i === 3) setI(1);
      else setI(i + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [i]);
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
                Computer Application from Kakinada Sri Aditya Degree College
                affiliated to Dr. B.R Ambedkar University, Srikakulam, AP.
              </p>
              <p>I am very much interested in front-end web develpoment.</p>
            </div>
          </Col>
          <Col>
            <div className="timeline">
              <h3>My Education</h3>
              <Hel
                id="1"
                title="Under Graduation"
                time="2019-2022"
                from="BCA from Kakiada Sri Aditya Degree College."
                with="7.91 CGPA"
              />
              <Hel
                id="2"
                title="Intermediate"
                time="2017-2019"
                from="MPC from Sri Chaitanya Junior College."
                with="9.42 GPA"
              />
              <Hel
                id="3"
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
        <div id="circle">
          <div
            style={{
              backgroundColor: "white",
              width: "12px",
              height: "12px",
              margin: "3px auto",
              borderRadius: "50%",
              display: "none",
            }}
            id={`circle${props.id}`}
          ></div>
        </div>
        <div id="line"></div>
      </Col>
      <Col>
        <Card className="timeline-card" id={`timeline-card${props.id}`}>
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
