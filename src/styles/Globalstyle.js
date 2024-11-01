import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    background-color: #f7f8fa;
  }

  a {
    color: #1a73e8;
    text-decoration: none;
  }
`;

export default GlobalStyle;