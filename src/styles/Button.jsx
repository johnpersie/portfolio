import styled from "styled-components";

export const Btn = styled.button`
  outline: none;
  background-color: ${({ bg }) => bg || "transparent"};
  border: ${({ border }) => border || "none"};
`;

export const Link = styled.a`
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "1rem 1.5rem"};
  transition: 0.2s ease;
  cursor: pointer;
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ bg }) => bg || "#0b111e"};
  /* box-shadow: ${({ bs }) => bs || " inset 0 0 0 0 rgb(255, 199, 95)"}; */
  font-size: 1.8rem;
  text-decoration: none;
`;
