import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import imgurl from "./assets/notebook.jpg";
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
const Maindiv = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 588px;
  background: linear-gradient(
      180deg,
      rgba(112, 93, 80, 0.6) 0,
      rgba(112, 93, 80, 0.6) 50%
    ),
    url(${imgurl}) 50% no-repeat;
  background-size: cover;
`;
const Maincontentdiv = styled.div`
  position: relative;
  padding: calc(4rem + 4.5rem) 2rem 4rem;
  word-break: keep-all;
  color: #fff;
`;
const Maincontenttitle = styled.div`
  font-size: 4rem;
  font-family: Black Han Sans, sans-serif;
  font-weight: 400;
  word-break: keep-all;
  color: #fff;
`;
const Maincontentbody = styled.div`
  margin: 0 auto 2rem;
  font-weight: 400;
  font-size: 1.25rem;
  color: #fff
  line-height: 1.5;
`;
const Styledhr = styled.hr`
  width: 3.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  height: 0;
  border-top: 0.2rem solid #f4623a;
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
      <div className="main">
        <Maindiv className="main">
          <Maincontentdiv>
            <Maincontenttitle>
              -장범진-
              <br />웹 개발자 포트폴리오
            </Maincontenttitle>
            <Styledhr></Styledhr>
            <Maincontentbody>
              안녕하세요.
              <br />개발이 취미인 프론트 엔드 개발자입니다.
              <br />긍정적인 성격, 도전적인 성격이 저의 장점입니다.
            </Maincontentbody>
          </Maincontentdiv>
        </Maindiv>
      </div>

      <div className="about"></div>
      <div className="skills"></div>
      <div className="archiving"></div>
      <div className="projects"></div>
      <div className="career"></div>
    </div>
  );
}

export default App;
