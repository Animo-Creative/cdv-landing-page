import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  :root {
    --blue-one: #273566;
    --yellow-light: #F4DC3F;
    --yellow-dark: #CEB202;
    --white: #FBF9F9;
    --black: #121212
  }

  body {
    background: var(--white);
    color: var(--black);
  }

  body, input, button, h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
export default GlobalStyle 
