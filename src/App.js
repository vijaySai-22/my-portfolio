import React from "react";
import "./App.css";
import Home from "./components/Home";
import Mynavbar from "./components/Mynavbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Mynavbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div style={{textAlign:'center', backgroundColor:'black',color:'white'}}>
        Copyright &copy; 2022. All rights reserved.
      </div>
    </>
  );
}
