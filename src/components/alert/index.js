import React from "react";
import alert from "../../Image/tick.png";
import { Container, Popup } from "./AlertStyles";

const Alert = (props) => {
  return (
    props.alert && (
      <Container>
        <Popup>
          <div>
            <img src={alert} alt="message-icon" />
            {props.alert.msg}
          </div>
          <p>&nbsp;{props.alert.type}</p>
        </Popup>
      </Container>
    )
  );
};

export default Alert;
