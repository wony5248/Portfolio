import React from "react";
import About from "./component/About";
import "./App.css";
import styled from "styled-components";
import Main from "./component/Main";
import imgurl from "./assets/notebook.jpg";
import Skills from "./component/Skills";
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
const Headernav = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  font-size: 1rem;
  color: hsla(0, 0%, 100%, 0.7);
`;
function App() {
  return (
    <div className="App">
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
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <div className="skills"></div>
      <div className="archiving"></div>
      <div className="projects"></div>
      <div className="career"></div>
    </div>
  );
}

export default App;
