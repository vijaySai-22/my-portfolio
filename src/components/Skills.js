import React from "react";
import { Container, Card, Row } from "react-bootstrap";

export default function Skills() {
  return (
    <>
      <Container>
        <div id="skills">
          <h1>My skills</h1>
          <p>
            I have sufficient front-end skills to develop webpages. Also a bit
            of experience in Firebase (firestore, authentication..) to store and
            retrive data for my mini projects.{" "}
          </p>
          <Row className="skill-cards">
            {[
              { id: "html5", title: "HTML" },
              { id: "css3-alt", title: "CSS" },
              { id: "js-square", title: "Javascript" },
              { id: "bootstrap", title: "Bootstrap" },
              { id: "react", title: "ReactJs" },
              { id: "python", title: "Python" },
            ].map((e) => {
              return (
                <Card className="skill-card" key={e.id}>
                  <i class={`fab fa-${e.id}`} style={{ margin: "auto" }}></i>
                  <Card.Footer
                    style={{ textAlign: "center" }}
                    className="skill-footer"
                  >
                    {e.title}
                  </Card.Footer>
                </Card>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
}
