import styled from "styled-components";
import { Btn } from "../../styles/Button";

export const Container = styled.section`
  margin: 10rem 0;
`;
export const ContainerWrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
export const TextContent = styled.div`
  text-align: center;
  padding: 6rem 1rem;

  h4 {
    font-size: clamp(1.6rem, 5vw, 2rem);
    text-transform: capitalize;
  }
  h1 {
    font-weight: 800;
    font-size: clamp(2.6rem, 5vw, 6rem);
    text-transform: uppercase;
    span {
      font-weight: 800;
      color: red;
    }
  }
`;

export const FormContainer = styled.div`
  margin: auto;
  width: 50%;
  align-content: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1rem;
  }
  form {
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;

      div {
        width: 100%;
        position: relative;

        input {
          border: 2px solid rgba(225, 229, 238, 0.5);
          font-family: inherit;
          font-size: 1.8rem;
          padding: 1.6rem 1.8rem;
          border-radius: 5px;
          outline: none;
          color: #fff;
          width: 100%;
          background: transparent;

          :hover {
            border-color: #adffff;
            transition: 0.2s ease-in;
          }

          &::-webkit-input-placeholder {
            color: #999;
            background: transparent;
          }
          input:placeholder-shown {
            background: transparent;
          }
        }
      }
      input:focus ~ label,
      input:valid + label {
        color: #fff;
        top: -1rem;
        font-size: 1.3rem;
        left: 0.8rem;
      }
    }
    div {
      position: relative;

      textarea {
        width: 100%;
        color: #fff;
        resize: none;
        border-radius: 5px;
        border: 2px solid rgba(225, 229, 238, 0.5);
        outline: none;
        height: 30rem;
        padding: 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        background: transparent;
        margin-bottom: 1.5rem;
        position: relative;

        :hover {
          border-color: #adffff;
          transition: 0.2s ease-in;
        }
      }
      label {
        position: absolute;
        top: 2rem;
        left: 2rem;
        padding: 0 0.5rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: #999;
        background: rgb(28, 28, 28);
        transition: top 200ms ease-in, left 200ms ease-in,
          font-size 200ms ease-in;
      }

      textarea:focus ~ label,
      textarea:valid + label {
        color: #fff;
        top: -1rem;
        font-size: 1.3rem;
        left: 1rem;
      }
    }
    button {
      font-size: 1.8rem;
      border: 2px solid rgba(225, 229, 238, 0.5);
      padding: ${({ padding }) => padding || "1rem 3rem"};
      background: transparent;
      font-weight: 500;
      color: #adffff;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease-in;

      :hover {
        border: 2px solid #ffc75f;
        background-color: #ffc75f;
        color: #000;
        transition: 0.2s ease-in;
      }
    }
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  color: #fff;
  resize: none;
  border-radius: 5px;
  border: 2px solid rgba(225, 229, 238, 0.5);
  outline: none;
  padding: 1rem;
  background: rgb(6, 11, 35, 0.5);
  margin-bottom: 2rem;
  position: relative;

  :hover {
    border-color: #adffff;
    transition: 0.2s ease-in;
  }
`;

export const SubmitBtn = styled(Btn)`
  font-size: 1.8rem;
  border: 2px solid rgba(225, 229, 238, 0.5);
  padding: ${({ padding }) => padding || "1rem 3rem"};
  color: #fff;
  cursor: pointer;

  :hover {
    border: 2px solid #ffc75f;
    background-color: #ffc75f;
    color: #000;
    transition: all 0.1s ease-in;
  }
`;

export const CardContainer = styled.div`
  margin: 8rem 0;
`;

export const HeadingContainer = styled.div`
  text-align: center;

  @media screen and (max-width: 960px) {
    padding: 1rem 1rem;
  }
`;
export const Heading = styled.h1`
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
`;
export const Text = styled.p`
  margin-top: 1rem;
  font-weight: 300;
  color: rgba(255, 199, 95);

  font-size: 1.5rem;
`;
export const Roll = styled.div`
  width: 80%;
  display: flex;
  margin: 2rem auto;

  @media screen and (max-width: 960px) {
    width: 98%;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 98%;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 1rem 1rem;
  }
`;
export const Cols = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 2rem;

  @media screen and (max-width: 958px) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: 720px) {
    justify-content: space-evenly;
  }
`;
export const Col = styled.a`
  padding: 1.5rem;
  width: 32%;
  display: flex;
  text-decoration: none;
  color: #c9c9c9;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid rgba(255, 199, 95, 0.5);
  transition: 250ms ease-in;
  @media screen and (max-width: 960px) {
    width: 32%;
    padding: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 720px) {
    width: 45%;
  }
  @media screen and (max-width: 450px) {
    width: 46%;
    padding: 1rem;
  }
  @media screen and (max-width: 320px) {
    width: 80%;
    padding: 1rem;
  }
  :hover {
    color: black;
    background: rgba(255, 199, 95);
    transition: 250ms ease-in;
  }

  p:first-child {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  p:last-child {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
export const ImgContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 420px) {
    width: 50%;
  }

  img {
    width: 30%;
    @media screen and (max-width: 420px) {
      width: 60%;
    }
  }
`;
