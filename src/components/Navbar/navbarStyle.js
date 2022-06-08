import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
export const NavContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
export const Left = styled.div``;
export const Logo = styled.div`
  margin-left: 2rem;
  h3 {
    display: inline;
    font-size: 2rem;
    font-weight: 900;
    border: 1px solid #fff;
  }
`;
export const Right = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  li {
    margin-right: 2rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
