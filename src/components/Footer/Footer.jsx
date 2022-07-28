import React from "react";
// import logo from "../../Image/logo1.png";
import {
  Container,
  FooterWrapper,
  TextBox,
  // FooterLogo,
  // Border,
} from "./footerStyles";

function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <TextBox>
          <h4>© 2022. All right Reserved</h4>
          <h4>Designed and built by John Ahachi</h4>
        </TextBox>
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
