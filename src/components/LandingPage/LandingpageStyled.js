import styled from "styled-components";
import bg from "../../Image/bg.jpg";
import { Link } from "../../styles/Button";

export const Container = styled.section`
  background-image: url(${bg});
  width: 100%;
  padding: 4rem 0;
  box-shadow: inset 0 0 0 100rem rgb(0, 0, 0, 0.8);
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
`;
export const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
  }
`;
export const ContentWrapper = styled.div`
  @media screen and (max-width: 960px) {
    margin: auto;
    display: table-cell;
    vertical-align: middle;
  }
  /* text-align: center; */
`;

export const Heading = styled.h1`
  font-size: clamp(3.5rem, 5vw, 7rem);
  padding: 1rem 0 2rem 0;
  font-family: inherit;
`;

export const Subheading = styled.h2`
  color: gray;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding: 0 0 2rem 0;

  span {
    color: #fff;
    font-size: clamp(1.6rem, 5vw, 2rem);
  }
`;
export const Content = styled.div`
  max-width: 60rem;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
    text-align: center;
  }
  div {
    font-weight: 300;
    line-height: 2;
    font-size: clamp(1.6rem, 3vw, 1.8rem);

    span {
      display: inline-flex;
      font-size: clamp(1rem, 3vw + 1rem, 1.8rem);
      color: #ffc75f;
    }
  }
`;

export const HeroLink = styled(Link)`
  margin-top: 4rem;
  border-radius: 0.2rem;
  display: inline-block;
  border: 1px solid #ffc75f;
  outline: none;

  :hover {
    transition: 0.2s ease;
    background-color: #ffc75f;
    color: #000;
  }
`;

export const Right = styled.div`
  width: 40rem;
  color: white;

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
  }

  a {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    @media screen and (max-width: 960px) {
      left: 15%;
    }
  }
  img {
    width: 12%;
    animation: arrowBlink 2s infinite;
  }
  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;
