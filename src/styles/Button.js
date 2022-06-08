import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.a`
  padding: 1rem 1.5rem;
  transition: all 0.5s;
  cursor: pointer;
  color: #fff;
  background-color: #002;
  border-radius: 1rem;
  box-shadow: inset 0 0 0 0 #ffc75f;
  border: 1px solid #ffc75f;
  font-size: 1.8rem;
  text-decoration: none;
  transform-origin: left;
  position: relative;

  &:hover {
    content: "✨";
    box-shadow: inset 23rem 0 0 0 #ffc75f;
    color: #000;
    /* transition: all 0.5s; */
    transform-origin: left;
  }
`;

function Button({ href, style, text }) {
  return (
    <ButtonStyle href={href} style={style}>
      {text}
    </ButtonStyle>
  );
}

export default Button;
