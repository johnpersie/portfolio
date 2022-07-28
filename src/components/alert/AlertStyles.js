import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  position: fixed;
  width: 22%;
  height: 8rem;
  top: 5rem;
  border-radius: 1rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  animation: slideIn 2s ease;

  @keyframes slideIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }

    65% {
      transform: translateX(1px);
      opacity: 1;
    }
    70% {
      transform: translateX(-1px);
    }
    75% {
      transform: translateX(1px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translate(0);
    }
  }
`;
export const Popup = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    padding-bottom: 0.5rem;
    font-size: clamp(1rem, 2vw + 0.7rem, 1.5rem);
  }

  img {
    width: 5%;
    margin-right: 1rem;
  }
  p {
    font-size: clamp(1rem, 2vw + 0.7rem, 1.5rem);
  }
`;
