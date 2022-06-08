import styled from "styled-components";
import aboutPic from "../../Image/aboutMe.jpg";
export const Container = styled.div`
  max-width: 120rem;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;

  hr {
    border: 1px solid #ffc75f;
  }
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: url(${aboutPic});
  width: 30%;
  /* height: ; */
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const Right = styled.div`
  max-width: 35%;
  /* padding: 2rem; */
  h4 {
    font-size: 3.5rem;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 200;
  }
  p {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
`;
export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.5rem;
`;
export const CTA = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;
