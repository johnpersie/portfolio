import React, { useEffect, useState } from "react";
import { NavContainer, Nav, NavLogo } from "./navbarStyle";
import logo from "../../Image/logo1.png";
import Burger from "../../Reuseable/Burger";

function Navbar() {
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 80 ? setNavColor(true) : setNavColor(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav navbar={navColor}>
      <NavContainer>
        <NavLogo to="home">
          <img src={logo} alt="JohnAhachi" />
          John&nbsp;<span>Ahachi</span>
        </NavLogo>
        <Burger navbar={navColor} />
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
