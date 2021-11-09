import React from "react";
import goImg from "../../assets/whitelink.png";
import { Skillsdiv, Skilldiv, Cardcon, Carddiv, Fontdiv } from "./style";
const Archiving: React.FunctionComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0D0D0D",
        display: "flex",
      }}
    >
      <Skilldiv>
        <Skillsdiv>
          <div style={{ marginRight: "12px"}}>
            <img src={goImg} alt="" width="32px" height="32px"/>
          </div>
          <div style={{color:"white"}}>ARCHIIVING</div>
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
            </Carddiv>
          </Cardcon>
          <Cardcon>
            <Carddiv style={{ marginBottom: "24px" }}>
              <Fontdiv>Back-end</Fontdiv>
            </Carddiv>
          </Cardcon>
        </div>
      </Skilldiv>
    </div>
  );
};

export default Archiving;
