import styled from "styled-components";

export const Container = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;

  padding: 5rem 0;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: ${({ layout }) => layout || "column"};
    padding: 0;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  padding-bottom: 1rem;
  @media screen and (max-width: 960px) {
    padding: 1rem 1rem;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  color: rgba(255, 199, 95);
  @media screen and (max-width: 960px) {
    padding: 1rem 1rem;
  }
`;
export const Feature = styled.div`
  width: 100%;
  /* margin: auto; */

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem 6rem;
  background-color: rgba(0, 0, 0, 0.9);
  margin-bottom: 4rem;
  flex-direction: ${({ layout }) => layout || "row"};

  @media screen and (max-width: 960px) {
    padding: 0 1rem;
    width: 96%;
    margin: 4rem auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
    margin: 4rem auto;
  }
`;
export const Right = styled.div`
  width: 47%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
  img {
    max-width: 100%;
  }

  a {
    padding: 0.5rem 1.5rem;
    background-color: #041ea3;
    color: #fff;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
      padding: 0.5rem 1.3rem;
      margin-right: 1rem;
    }

    img {
      width: 50%;
      margin-right: 0.5rem;
    }
  }
  span {
    position: absolute;
    bottom: -4rem;
    width: 10rem;
    flex-direction: row;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 47%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }

  div {
    h2 {
      font-size: 2rem;
      padding: 1.5rem 0;
    }
    p {
      font-size: clamp(1rem, 3vw + 1rem, 1.5rem);
      font-weight: 300;
      color: #c6c6c9;
    }
  }
`;

export const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  div {
    display: inline-flex;
    align-items: center;
    margin-top: 1.2rem;
  }
  p {
    font-size: clamp(1.1rem, 2vw + 0.7rem, 1.2rem);
  }
  img {
    margin-right: 1rem;
    width: 17%;
  }

  @media screen and (max-width: 450px) {
  }
`;
export const ListItem = styled.span`
  display: flex;
  border-radius: 0.6rem;
  padding: 1rem 1rem;
  margin: 0px 1rem 1rem 0px;
  align-items: center;
  background-color: rgb(28, 28, 28);
`;
