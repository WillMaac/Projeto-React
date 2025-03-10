import styled, { createGlobalStyle } from "styled-components";
import {primaryColor, primaryDarkColor} from "../config/colors"

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
}
body{
font-family: sans-serif;
background-color: ${primaryDarkColor}
}

-ms-hyphenate-limit-chars, body, #root{
    height: 100%;
}

button{
    cursor: pointer;
    background-color: ${primaryColor};
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
`;
