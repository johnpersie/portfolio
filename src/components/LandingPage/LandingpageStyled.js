import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 2rem);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  overflow: hidden;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 10rem 0;
`;
export const Left = styled.div`
  padding: 2rem;
  hr {
    width: 2rem;
    color: gray;
  }
  h4 {
    color: gray;
    font-size: 2rem;

    strong {
      color: white;
    }
  }
  h1 {
    font-size: 6rem;
    letter-spacing: -2px;
  }
  p {
    padding: 2rem 0;
    font-size: 1.8rem;
    /* letter-spacing: -1px; */
    font-weight: 300;
  }
`;

export const Right = styled.div`
  width: 40rem;
  color: white;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;
export const CTA = styled.div`
  display: flex;
`;
