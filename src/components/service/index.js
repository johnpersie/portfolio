import React from "react";
import { item } from "./Data";
import {
  Card,
  CardWrapper,
  Container,
  ContainerWrapper,
  PageHeading,
  PageHeadingContainer,
} from "./ServiceStyled";

const Service = () => {
  return (
    <Container>
      <ContainerWrapper>
        <PageHeadingContainer>
          <PageHeading>My Services</PageHeading>
        </PageHeadingContainer>
        <CardWrapper>
          {item.map(({ icon, text, parag, id }) => (
            <Card key={id}>
              <div>{icon}</div>
              <h3>{text}</h3>
              <p>{parag}</p>
            </Card>
          ))}
        </CardWrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default Service;
