import styled from "styled-components";

export const Container = styled.section`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0;
`;
export const Wrapper = styled.div`
  width: 100%;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 2rem 0;
  text-transform: uppercase;
`;
export const Text = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 10rem;

  span {
    color: red;
    font-weight: 600;
  }
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
`;
export const Left = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;
export const Column = styled.div`
  width: 80%;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1rem;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
    font-family: "Lato", sans-serif;
    margin-bottom: 2rem;
    position: relative;

    &::after {
      content: "";
      bottom: 1.5rem;
      position: absolute;
      width: 10%;
      margin-left: 1rem;
      height: 0.1rem;
      background-color: #e9af587f;
    }
  }
  p {
    font-size: clamp(1.4rem, 1vw + 1rem, 1.8rem);
    font-weight: 200;
    line-height: 1.8;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  margin: 3rem 0;

  @media screen and (max-width: 960px) {
    padding: 1rem;
    margin: auto;
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 750px) {
    padding: 1rem;
    margin: auto;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media screen and (max-width: 320px) {
    padding: 1rem;
    margin: auto;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  span {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
    justify-content: center;

    img {
      width: 50%;

      @media screen and (max-width: 960px) {
        width: 30%;
      }
    }
    p {
      font-size: 1.6rem;
      margin: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  div {
    text-align: center;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    margin: 1rem 0;

    p {
    }
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;
