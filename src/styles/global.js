import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body, input, button {
    font-size: 16px;
  }

  #root {
    display: block;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
    transition: all .2s linear;
    &:hover {
      opacity: 0.7;
    }
  }

`;
