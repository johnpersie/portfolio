import {
  Container,
  TechStack,
  Column,
  Row,
  Content,
  Wrapper,
} from "./SkillsStyles";
import Icons from "./LangIcons";

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Row>
          <Column>
            <h1>What I do</h1>
            <p>
              Enthusiastic frontend developer who wants to explore more
              Technologies stack.
            </p>
            <p>
              I like to <span>code</span> things from scratch, and enjoy
              bringing ideas to life in the browser.
            </p>
            <TechStack>
              {Icons.map((item) => (
                <span key={item.id}>
                  <img src={item.img} alt="icons" />
                  <p>{item.text}</p>
                </span>
              ))}
            </TechStack>
            <Content>
              <div>
                <img src={require("../../Image/flash.png")} alt="icons" />
                <p>
                  Develop highly interactive Frontend / User interfaces website
                  that are responsive.
                </p>
              </div>
              <div>
                <img src={require("../../Image/flash.png")} alt="icons" />
                <p>
                  Write modern, performant, maintainable code for a diverse
                  array of client and projects
                </p>
              </div>
              <div>
                <img src={require("../../Image/flash.png")} alt="icons" />
                <p>
                  work with a variety of different languages, platforms,
                  frameworks and content managment systems such as JavaScript,
                  React, Context-API, Github and Netlify.
                </p>
              </div>
            </Content>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Skills;
