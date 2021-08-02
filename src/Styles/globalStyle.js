import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(89deg, #FF5DEF 0%, #04C8DE 100%);
        font-family: 'Courier New', Courier, monospace;
        color: white;
    }
    .particles {
        position: fixed;
        top: 0;
        right:0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }


`;

export default GlobalStyle;