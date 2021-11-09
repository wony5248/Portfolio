import React, { useEffect, useState } from "react";
import About from "./component/About";
import "./App.css";
import styled from "styled-components";
import Main from "./component/Main";
import imgurl from "./assets/notebook.jpg";
import Skills from "./component/Skills";
import Archiving from "./component/Archiving";
const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  align-items: center;
  color: hsla(0, 0%, 100%, 0.7);
  padding: 0 32px;
  z-index: 10;
`;
const Scrolledheader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  align-items: center;
  padding: 0 32px;
  z-index: 10;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%)
`;
const Headernav = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  font-size: 1rem;
`;
function App() {
  const [position, setPosition] = useState(0);
  const updatePosition = () => {
    setPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
  });
  return (
    <div className="App">
      {position < 100 ? (
        <Header>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            JBJ's Portfolio
          </div>
          <Headernav>
            <div>About me</div>
            <div>Skills</div>
            <div>Archiving</div>
            <div>Projects</div>
            <div>Career</div>
          </Headernav>
        </Header>
      ) : (
        <Scrolledheader>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            JBJ's Portfolio
          </div>
          <Headernav>
            <div>About me</div>
            <div>Skills</div>
            <div>Archiving</div>
            <div>Projects</div>
            <div>Career</div>
          </Headernav>
        </Scrolledheader>
      )}
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Archiving></Archiving>
      <div className="projects"></div>
      <div className="career"></div>
    </div>
  );
}

export default App;
