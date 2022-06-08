import React from "react";
import ContainerStyle from "../../styles/ContainerStyle";
import { Title, Wrapper, Left, Right, CTA } from "./aboutStyled";
// import aboutPic from "../../Image/aboutMe.jpg";
import Button from "../../styles/Button";
function About() {
  return (
    <ContainerStyle>
      <Wrapper>
        <Left></Left>
        <Right>
          <Title>About Me</Title>
          <h4>Hi there, I'm John!</h4>
          <h1>I'm am Frontend Engineer who get the job done</h1>
          <p>
            I have been offering professional website which brings clients idea
            to life. I help convert a vission and an idea into meaningful and
            useful software products. Having the ability transform requirments
            into useful software helps me prioritze tasks, iterate fast and
            deliver faster.
            <p>
              I am also productivity nerd and love discovering new ways and
              system to design my ideal day. I enjoy watching science and
              technology programs on youtube, reading books about growth and
              self development.
            </p>
          </p>
          <p>
            Take a look at my portfolio work and lets see if we can work
            together on your next project.
          </p>
          <hr />
          <CTA>
            <Button text="Download my Resume" />
            <Button text="My Work" />
          </CTA>
        </Right>
      </Wrapper>
    </ContainerStyle>
  );
}

export default About;
