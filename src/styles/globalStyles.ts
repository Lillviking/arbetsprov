/* globalStyles.js */
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 62.5%;
        height: 100vh;
        width: 100vw;
        color: white;
        background-color: #1e213a;
    }
    h1 {
        margin: 1.5rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
        line-height: 1.1;
    }
    h3 {
        margin: 0.5rem;
        font-size: 1.2rem;
    }
`;

export default GlobalStyles;
