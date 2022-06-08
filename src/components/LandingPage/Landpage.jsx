import React from "react";
import Button from "../../styles/Button";
import ContainerStyle from "../../styles/ContainerStyle";
import { Container, Wrapper, Left, Right, CTA } from "./LandingpageStyled";

function Landpage() {
  return (
    <ContainerStyle>
      <Container>
        <Wrapper>
          <Left>
            <h4>
              👋 HELLO THERE, MY NAME IS <strong>JOHN</strong>
            </h4>
            <h1>I am a Frontend Developer</h1>
            <hr />
            <p>
              I craft high-performing, beautiful and rich interactive websites
              <br />
              that are:
              <strong>
                conversion-focused, brand-accurate & people-friendly
              </strong>
            </p>
            <CTA>
              <Button href="/Contact" text="Connect with Me" />
            </CTA>
          </Left>
          <Right></Right>
        </Wrapper>
      </Container>
    </ContainerStyle>
  );
}

export default Landpage;
