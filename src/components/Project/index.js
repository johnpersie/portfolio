import React from "react";
import ProjectData from "./Data";
import {
  Container,
  Feature,
  Features,
  Right,
  Left,
  Heading,
  Text,
  Wrapper,
  TechContent,
  ListItem,
} from "./ProjectStyles";

function Project() {
  return (
    <Container id="Project">
      <Wrapper>
        <Heading>Portfolio</Heading>
        <Text>
          have a look at my portfolio projects, some of these projects have a
          video demonstration
        </Text>
        <Feature>
          {ProjectData.map((item) => (
            <Features key={item.id} layout={item.id % 2 === 0 && "row-reverse"}>
              <Right>
                <img src={item.img} alt="project-pic" />
                <span>
                  {item.tech.map((techs) => (
                    <a href="/" key={techs.id}>
                      <img src={techs.img} alt="source code" />
                      {techs.text}
                    </a>
                  ))}
                </span>
              </Right>
              <Left>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <h2>{item.subtitle}</h2>
                  <p>{item.subtext}</p>
                </div>
                <TechContent>
                  <h2>{item.subtitle1}</h2>
                  <div>
                    {item.code.map((codes) => (
                      <ListItem key={codes.id}>
                        <img src={codes.img} alt="freepik" />
                        <p>{codes.text}</p>
                      </ListItem>
                    ))}
                  </div>
                </TechContent>
              </Left>
            </Features>
          ))}
        </Feature>
      </Wrapper>
    </Container>
  );
}

export default Project;
