import React from "react";
import {
  Header,
  Headernav,
  Maindiv,
  Maincontentdiv,
  Styledhr,
  Maincontenttitle,
  Maincontentbody,
} from "./style";
const Main: React.FunctionComponent = () => {
  return (
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
            <br />
            개발이 취미인 프론트 엔드 개발자입니다.
            <br />
            긍정적인 성격, 도전적인 성격이 저의 장점입니다.
          </Maincontentbody>
        </Maincontentdiv>
      </Maindiv>
    </div>
  );
};

export default Main;
