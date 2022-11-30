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
    --yellow-background: #F2D30F;
    --yellow-dark: #CEB202;
    --orange: #E05100;
    --white: #FFFFFF;
    --black: #121212
  }

  body {
    background: var(--white);
    color: var(--black);
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 0;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #000000bc;
      border-radius: 20px;
      border: none;
    }
  }

  body, input, button, h2, h3, h4, h5, h6 {
    font-family: 'Heebo', sans-serif;
  }

  h1 {
    font-family: 'Raleway', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
export default GlobalStyle 
