import React from "react";
import Button from "../../styles/Button";
import { Container, Left, Logo, NavContainer, Right } from "./navbarStyle";

function Navbar() {
  return (
    <Container>
      <NavContainer>
        <Left>
          <Logo>
            <h3>JAY</h3>
          </Logo>
        </Left>
        <Right>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <Button href="Resume" text="Resume" />
            </li>
          </ul>
        </Right>
      </NavContainer>
    </Container>
  );
}

export default Navbar;
