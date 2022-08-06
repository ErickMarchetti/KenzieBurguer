import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Inter", sans-serif;
  }
  button {
    cursor: pointer;
  }
`
export default GlobalStyle
