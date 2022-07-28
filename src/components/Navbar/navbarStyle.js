import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  padding: 0 1.5rem;
  width: 100%;
  height: 7rem;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-content: center;
  background: #000;
  transition: 0.5s ease-in;
  box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.5);

  ${({ navbar }) => navbar} {
    background: transparent;
    height: 8rem;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const NavContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const NavLogo = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: clamp(1.2rem, 5vw, 2rem);
  display: inline-flex;
  align-items: center;
  width: 18rem;

  @media screen and (max-width: 960px) {
    z-index: 2000;
  }
  img {
    width: 30%;

    @media screen and (max-width: 450px) {
      width: 20%;
    }
  }
`;
