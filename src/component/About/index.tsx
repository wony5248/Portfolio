import React from "react";
import goImg from "../../assets/black-link.png";
import personImg from "../../assets/person.svg";
import calendarImg from "../../assets/calendar.svg";
import envelopImg from "../../assets/envelope.svg";
import geoImg from "../../assets/geo.svg";
import telephoneImg from "../../assets/telephone.svg";
import pencilImg from "../../assets/pencil.svg";
const About: React.FunctionComponent = () => {
  return (
    <div
      style={{
        height: "420px",
        maxWidth: "71.25rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom:"36px"
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #cccccc",
          fontFamily: "Black Han Sans",
          fontSize: "3rem",
          lineHeight: 1.5,
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "12px" }}>
          <img src={goImg} width="32px" height="32px" />
        </div>
        <div>ABOUT ME</div>
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {" "}
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={personImg} alt="" width="32px" height="32px" />
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: ".5rem",
              }}
            >
              이름
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              장범진
            </div>
          </div>
        </div>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={calendarImg} alt="" width="32px" height="32px" />
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: ".5rem",
              }}
            >
              생년월일
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              95.04.22
            </div>
          </div>
        </div>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={geoImg} alt="" width="32px" height="32px" />
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: ".5rem",
              }}
            >
              주소지
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              서울특별시 송파구
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", width: "80%" }}>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={telephoneImg} alt="" width="32px" height="32px" />
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: ".5rem",
              }}
            >
              연락처
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              010-4316-3392
            </div>
          </div>
        </div>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={envelopImg} alt="" width="32px" height="32px" />
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: ".5rem",
              }}
            >
              이메일
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              wony5248@gmail.com
            </div>
          </div>
        </div>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={pencilImg} alt="" width="32px" height="32px" />
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: ".5rem",
              }}
            >
              학력
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: "1rem",
              }}
            >
              아주대학교 (소프트웨어학부)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
