import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  function submit(e) {
    e.preventDefault();
    alert("hello");
  }
  return (
    <>
      <Container>
        <div id="contact">
          <h1>Want to talk?</h1>
          <div style={{ margin: "auto" }} id="contact-form">
            <h3 style={{ textAlign: "center" }}>
              <u>
                <b>Contact Form</b>
              </u>
            </h3>
            <Form style={{ margin: "auto" }} onSubmit={submit}>
              <Row md={1} sm={1} id="inputs">
                <input
                  name="name"
                  value={name}
                  type="text"
                  className="mb-3"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  name="mail"
                  value={mail}
                  type="email"
                  className="mb-3"
                  placeholder="Enter Your Mail"
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
                <textarea
                  name="msg"
                  value={msg}
                  className="mb-3"
                  placeholder="Enter Message"
                  maxLength="150"
                  required
                  onChange={(e) => setMsg(e.target.msg)}
                />
                <input type="submit" id="submit-btn" />
              </Row>
            </Form>
          </div>
          <br />
          <Row id="social">
            <i
              class="fab fa-github"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/vijaySai-22", "_blank")
              }
            ></i>
            <i
              class="fab fa-facebook"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.facebook.com/vijaysai.22", "_blank")
              }
            ></i>
            <i
              class="fab fa-instagram"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.instagram.com/vijaysai.22", "_blank")
              }
            ></i>
          </Row>
        </div>
      </Container>
    </>
  );
}