import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
`;

function ContainerStyle({ style, children }) {
  return <Container style={style}>{children}</Container>;
}

export default ContainerStyle;
