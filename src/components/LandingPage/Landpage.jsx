// import down from "../../Image/mouse-cursor down.png";
import Typewriter from "typewriter-effect";
import {
  Container,
  ContainerWrapper,
  ContentWrapper,
  Heading,
  Subheading,
  Content,
  HeroLink,
} from "./LandingpageStyled";

function Landpage() {
  return (
    <Container>
      <ContainerWrapper>
        <ContentWrapper>
          <Subheading>
            👋 HELLO THERE, MY NAME IS <span>JOHN</span>
          </Subheading>
          <Heading>Frontend Developer.</Heading>

          <Content>
            <div>
              I build high-performing, beautiful, clean user interfaces and rich
              interactive websites with React, JavaScript and some other cools
              libraries and frameworks that are:&nbsp;
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "mobile responsive",
                      "brand-accurate",
                      "and maintainable",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </span>
            </div>
          </Content>
          <HeroLink href="/" padding="1.5rem 2rem" bg="transparent">
            Connect with Me
          </HeroLink>
        </ContentWrapper>
        {/* <Right>
          <a href="/About">
            <img src={down} alt="mouse" />
          </a>
        </Right> */}
      </ContainerWrapper>
    </Container>
  );
}

export default Landpage;
