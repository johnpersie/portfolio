import styled from "styled-components";
import { Link } from "../../../styles/Button";

export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    position: fixed;
    flex-flow: column;
    justify-content: center;
    background-color: #002;
    top: ${({ open }) => (open ? 0 : "-100vh")};
    left: 0;
    opacity: 1;
    height: 100vh;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease;
    padding-top: 10rem;
  }
`;
export const NavItem = styled.li`
  padding: 1rem 2rem;

  @media screen and (max-width: 960px) {
    padding: 2rem 2rem;
    width: 100%;
  }
`;

export const NavLinks = styled.a`
  text-decoration: none;
  padding: 0.3rem;
  color: #fff;
  position: relative;
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
  display: inline-block;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    margin-left: none;
    font-size: clamp(1.6rem, 5vw, 2.6rem);

    ::before,
    ::after {
      display: none;
    }
  }

  ::before {
    position: absolute;
    content: "";
    border-bottom: 2px solid #008ccc;
    border-radius: 0.5rem;
    top: 0.01rem;
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 100%;
    left: 1rem;
    transform-origin: left;
    transform: translateX(100%);
  }
  ::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid #008ccc;
    border-radius: 0.5rem;
    bottom: 0.1rem;
    transition: transform 300ms ease-in-out;
    width: 100%;
    left: 0.5rem;
    transform-origin: right;
    transform: translateX(100%);
  }
  :hover::before {
    transform: scaleX(0.5);
    border-bottom: 1.7px solid #ffc75f;
  }
  :hover::after {
    transform: translateX(0);
    border-bottom: 1.7px solid #ffc75f;
  }
`;

export const BtnLink = styled(Link)`
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid #ffc75f;
  outline: none;
  text-align: center;

  &:hover {
    transition: all 0.3s ease-out;
    color: black;
    background-color: #ffc75f;
  }

  @media screen and (max-width: 960px) {
    padding: 1.5rem;
    width: 95%;
    text-align: center;
    font-size: clamp(1.6rem, 5vw, 2.6rem);
  }
`;
