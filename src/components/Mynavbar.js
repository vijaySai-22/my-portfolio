import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Mynavbar() {
  const [expand, setExpand] = useState(false);
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" expanded={expand}>
      <Container>
        <Navbar.Brand href="#home">Vijay</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpand(!expand)} />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {["Home", "About", "Skills", "Work", "Contact"].map((e) => {
              return (
                <Nav.Link
                  href={`#${e.toLowerCase()}`}
                  onClick={() => setExpand(false)}
                  key={e}
                >
                  {e}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}