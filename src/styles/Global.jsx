import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
::-webkit-scrollbar{
  display: none;
}
a{
  text-decoration: none;
}

body {
  /* background: #060b23; */
  background: #101522;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  font-size: 1.6rem;
}

ul {
  list-style: none;
}

`;
