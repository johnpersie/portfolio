import styled from "styled-components";

export const AboutSection = styled.div`
  width: 100%;
  /* padding: 5rem 0; */
`;
export const Container = styled.div`
  padding: 8rem 0;
  max-width: 120rem;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  position: relative;
  margin: 4rem 0;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
  &::after {
    content: "";
    bottom: 2rem;
    position: absolute;
    width: 20%;
    margin-left: 1rem;
    height: 0.1rem;
    background-color: #e9af587f;
  }
`;
export const ImgWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    align-items: center;
  }
`;
export const Img = styled.img`
  width: 100%;
`;

export const AboutContent = styled.div`
  max-width: 45%;
  padding: 2rem 2rem;

  @media screen and (max-width: 960px) {
    max-width: 50%;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  h1 {
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 200;
    font-family: "Loto", sans-serif;
    line-height: 1.8;

    @media screen and (max-width: 960px) {
      text-align: center;
    }
  }
  p {
    color: #b1b1b1;
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    padding: 1rem 0;
    line-height: 1.8;

    @media screen and (max-width: 960px) {
      text-align: center;
    }
  }
`;

export const AboutLink = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: inherit;
    display: inline-block;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 1.5px solid #ffc75f;
    outline: none;
    margin-top: 1.5rem;

    &:hover {
      transition: all 0.3s ease-out;
      color: black;
      background-color: #ffc75f;
    }
  }
`;
