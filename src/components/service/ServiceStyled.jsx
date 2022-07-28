import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  background: #b3afac;
  padding: 8rem 0;
  color: #fff;
`;
export const ContainerWrapper = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: auto;
`;
export const PageHeadingContainer = styled.div`
  margin: auto;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;
export const PageHeading = styled.p`
  color: #101522;
  font-size: clamp(2.3rem, 3vw, 5rem);
  font-weight: 500;
`;
export const CardWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  background-color: #101522;
  padding: 3rem;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 5px;
  transition: all 0.5s;

  div {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 2px solid #ffc770;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-weight: 600;
    margin: 1rem 0;
  }
  p {
    font-weight: 200;
    line-height: 1.8;
  }
  :hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 5px 3px #999;

    @media screen and (max-width: 960px) {
      transform: none;
    }
    @media screen and (max-width: 420px) {
      transform: none;
    }
  }
`;
