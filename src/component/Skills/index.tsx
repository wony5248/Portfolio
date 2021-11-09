import React from "react";
import goImg from "../../assets/black-link.png";
import frontendImg from "../../assets/frontend.png";
import backendImg from "../../assets/backend.png";
import deployImg from "../../assets/deployment.png";
import versionImg from "../../assets/versioncontrol.png";
import communiImg from "../../assets/communication.png";
import { Skillsdiv, Skilldiv, Cardcon, Carddiv, Fontdiv } from "./style";
const Skills: React.FunctionComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#BFA98E",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skilldiv>
        <Skillsdiv>
          <div style={{ marginRight: "12px" }}>
            <img src={goImg} alt="" width="32px" height="32px" />
          </div>
          <div>SKILLS</div>
        </Skillsdiv>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Cardcon>
            <Carddiv>
              <Fontdiv>Front-end</Fontdiv>
              <img src={frontendImg} alt="" width="90%" />
            </Carddiv>
          </Cardcon>
          <Cardcon>
            <Carddiv style={{ marginBottom: "24px" }}>
              <Fontdiv>Back-end</Fontdiv>
              <img src={backendImg} alt=""  width="90%" />
            </Carddiv>
            <Carddiv>
              <Fontdiv>Deployment</Fontdiv>
              <img src={deployImg} alt="" width="90%" />
            </Carddiv>
          </Cardcon>
          <Cardcon>
            <Carddiv style={{ marginBottom: "24px" }}>
              <Fontdiv>Communication</Fontdiv>
              <img src={communiImg} alt="" width="90%" />
            </Carddiv>
            <Carddiv>
              <Fontdiv>Version Control</Fontdiv>
              <img src={versionImg} alt="" width="90%" />
            </Carddiv>
          </Cardcon>
        </div>
      </Skilldiv>
    </div>
  );
};

export default Skills;
