import React, { useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

export default function Work() {
  const projectData = [
    {
      url: "https://mr-repair.netlify.app/",
      src: "https://raw.githubusercontent.com/vijaySai-22/pics/main/portfolio/mrRepair.png",
      title: "Mr. Repair",
      text: "A online home services app.",
      tags: "React, Firebase",
    },
    {
      url: "https://phonezone-react.netlify.app/",
      src: "https://raw.githubusercontent.com/vijaySai-22/pics/main/portfolio/phonezoneapp.png",
      title: "Phonezone",
      text: "A mobile shopping app.",
      tags: "React, Firebase",
    },
    {
      url: "https://online-fir.netlify.app/",
      src: "https://raw.githubusercontent.com/vijaySai-22/pics/main/portfolio/fir.png",
      title: "Online FIR",
      text: "A online complaint registration app.",
      tags: "React, Firebase",
    },
    {
      url: "https://contactapp.netlify.app/",
      src: "https://raw.githubusercontent.com/vijaySai-22/pics/main/portfolio/contactapp.png",
      title: "Contact Manager",
      text: "A contact manager app",
      tags: "React, Firebase",
    },
  ];
  const [more,setMore]=useState(3);
  return (
    <>
      <div id="work" className="pb-3">
        <Container>
          <h1>My Work</h1>I did some react projects as follows...
          <Row style={{ justifyContent:'space-between', margin:'auto' }}>
            {projectData.slice(0,more).map((e) => {
              return (
                <Project
                  key={e.url}
                  url={e.url}
                  src={e.src}
                  title={e.title}
                  text={e.text}
                  tags={e.tags}
                />
              );
            })}
          </Row>
          {(more!==4)&&<Button variant="outline-light" onClick={()=>setMore(more+1)} id='more' className="mt-3">Show More..</Button>}
          {/* {(more>2)&&<Button onClick={()=>setMore(more-1)} id='more'>Show Less..</Button>} */}
        </Container>
      </div>
    </>
  );
}
function Project(props) {
  return (
    <Card style={{ width: "330px", justifyContent:'space-around',marginTop:'10px' }} bg="light" text="dark">
      <Card.Header
        style={{ fontWeight: "bolder", textAlign: "center", fontSize: "1.4em" }}
      >
        {props.title}
      </Card.Header>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Text>
          <h5>{props.text}</h5>
          <br />
          {`Tags: ${props.tags}`}
        </Card.Text>
      </Card.Body>
      <Card.Footer
        onClick={() => window.open(props.url, "_blank")}
        style={{ textAlign: "center" }}
      >
        Live Preview
      </Card.Footer>
    </Card>
  );
}
