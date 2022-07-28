import React from "react";
import {
  Container,
  Title,
  Wrapper,
  AboutContent,
  AboutSection,
  Img,
  ImgWrapper,
  AboutLink,
} from "./aboutStyled";

function About() {
  return (
    <AboutSection>
      <Container>
        <Title>About Me</Title>
        <Wrapper>
          <ImgWrapper>
            <Img src={require("../../Image/jpg/aboutMe.jpg")} alt="skills" />
          </ImgWrapper>
          <AboutContent>
            <h1>
              Hello! I'm John Ahachi a Frontend Developer who gets the job done.
            </h1>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life, whether that be websites or applications. My goal is to
              always build products that provide rich interactive, high
              performing and pixel-perfect experience.
            </p>
            <p>
              I have developed a passion for the software industry over the
              years and enjoy what I do. I prefer to keep learning, continue
              challenging myself, and do interesting things that matter.
            </p>
            <p>
              Take a look at my portfolio work and lets see if we can work
              together on your next project.
            </p>
            <AboutLink>
              <a href="/">Resume</a>
            </AboutLink>
          </AboutContent>
        </Wrapper>
      </Container>
    </AboutSection>
  );
}

export default About;
