import React from "react";
import { BtnLink, NavItem, NavLinks, NavMenu } from "./RightNavStyle";

const RightNav = ({ open }) => {
  const data = ["About", "Tech Stack", "Project", "Contact"];
  return (
    <NavMenu open={open}>
      {data.map((navItem, index) => (
        <NavItem key={index}>
          <NavLinks herf="/">{navItem}</NavLinks>
        </NavItem>
      ))}
      <BtnLink href="/" bg={"transparent"}>
        Resume
      </BtnLink>
    </NavMenu>
  );
};

export default RightNav;
