import React from "react";
import goImg from "../../assets/black-link.png";
import personImg from "../../assets/person.svg";
import calendarImg from "../../assets/calendar.svg";
import envelopImg from "../../assets/envelope.svg";
import geoImg from "../../assets/geo.svg";
import telephoneImg from "../../assets/telephone.svg";
import pencilImg from "../../assets/pencil.svg";
import { Aboutmediv, Aboutdiv, Contentdiv, Contenttitlediv, Contentbodydiv, Contentbodydiv2, Contentbodydiv3 } from "./style";


const About: React.FunctionComponent = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", zIndex:8 }}>
      <Aboutdiv>
        <Aboutmediv>
          <div style={{ marginRight: "12px" }}>
            <img src={goImg} alt="" width="32px" height="32px" />
          </div>
          <div>ABOUT ME</div>
        </Aboutmediv>
        <div style={{ display: "flex", width: "80%" }}>
          <Contentdiv>
            {" "}
            <Contenttitlediv>
              <img src={personImg} alt="" width="32px" height="32px" />
            </Contenttitlediv>{" "}
            <Contentbodydiv>
              <Contentbodydiv2>이름</Contentbodydiv2>
              <Contentbodydiv3>
                장범진
              </Contentbodydiv3>
            </Contentbodydiv>
          </Contentdiv>
          <Contentdiv>
            <Contenttitlediv>
              <img src={calendarImg} alt="" width="32px" height="32px" />
            </Contenttitlediv>{" "}
            <Contentbodydiv>
              <Contentbodydiv2>생년월일</Contentbodydiv2>
              <Contentbodydiv3>
                95.04.22
              </Contentbodydiv3>
            </Contentbodydiv>
          </Contentdiv>
          <Contentdiv>
            <Contenttitlediv>
              <img src={geoImg} alt="" width="32px" height="32px" />
            </Contenttitlediv>{" "}
            <Contentbodydiv>
              <Contentbodydiv2>주소지</Contentbodydiv2>
              <Contentbodydiv3>
                서울특별시 송파구
              </Contentbodydiv3>
            </Contentbodydiv>
          </Contentdiv>
        </div>
        <div style={{ display: "flex", width: "80%" }}>
          <Contentdiv>
            <Contenttitlediv>
              <img src={telephoneImg} alt="" width="32px" height="32px" />
            </Contenttitlediv>{" "}
            <Contentbodydiv>
              <Contentbodydiv2>연락처</Contentbodydiv2>
              <Contentbodydiv3>
                010-4316-3392
              </Contentbodydiv3>
            </Contentbodydiv>
          </Contentdiv>
          <Contentdiv>
            <Contenttitlediv>
              <img src={envelopImg} alt="" width="32px" height="32px" />
            </Contenttitlediv>{" "}
            <Contentbodydiv>
              <Contentbodydiv2>이메일</Contentbodydiv2>
              <Contentbodydiv3>
                wony5248@gmail.com
              </Contentbodydiv3>
            </Contentbodydiv>
          </Contentdiv>
          <Contentdiv>
            <Contenttitlediv>
              <img src={pencilImg} alt="" width="32px" height="32px" />
            </Contenttitlediv>{" "}
            <Contentbodydiv>
              <Contentbodydiv2>학력</Contentbodydiv2>
              <Contentbodydiv3>
                아주대학교 (소프트웨어학부)
              </Contentbodydiv3>
            </Contentbodydiv>
          </Contentdiv>
        </div>
      </Aboutdiv>
    </div>
  );
};

export default About;
