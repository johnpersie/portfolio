import { useState } from "react";
import styled from "styled-components";
import RightNav from "../components/Navbar/rightNav";

const NavToggle = styled.div`
  position: fixed;
  background-color: #ffc75f;

  top: 1.2rem;
  right: 2rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: none;
  z-index: 300;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 3.5rem;
    top: 2rem;
  }
  span {
    display: inline-block;
    margin-left: 1.2rem;
    position: relative;

    @media screen and (max-width: 450px) {
      margin-left: 1rem;
    }

    &,
    ::before,
    ::after {
      position: absolute;
      width: 2.5rem;
      height: 4px;
      background-color: ${({ open }) => (open ? "#333" : "#000")};
      content: "";
      left: 0;
      transition: all 0.2s ease;
      cursor: pointer;

      @media screen and (max-width: 450px) {
        width: 1.6rem;
        height: 3px;
      }
    }

    & {
      background-color: ${({ open }) => (open ? "transparent" : "#000")};
    }
    ::before {
      top: ${({ open }) => (open ? "0" : ".8rem")};
      transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};

      @media screen and (max-width: 450px) {
        top: ${({ open }) => (open ? "0" : ".6rem")};
      }
    }
    ::after {
      top: ${({ open }) => (open ? "0" : "-.8rem")};
      transform: ${({ open }) => (open ? "rotate(-135deg)" : "rotate(0)")};

      @media screen and (max-width: 450px) {
        top: ${({ open }) => (open ? "0" : "-.6rem")};
      }
    }
  }
`;

const Burger = ({ navbar }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavToggle open={open} onClick={() => setOpen(!open)}>
        <span>&nbsp;</span>
      </NavToggle>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
