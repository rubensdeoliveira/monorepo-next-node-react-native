import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    font-size: 62.5%;
    --primary-color: #00b3b4;
    --secondary-color: #0078b5;
    --contrast-color: #fff;
    --error-color: #c53030;
  }
 
  body {
    background: var(--primary-color);
    color: var(--font-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`
