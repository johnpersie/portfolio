import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem 0 3rem 0;
  background: #000;
`;
export const FooterWrapper = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const TextBox = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    color: lightgray;
    font-weight: 400;
    font-size: clamp(1.3rem, 3vw, 1.8rem);
  }
`;
