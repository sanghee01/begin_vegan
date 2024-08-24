import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    --headerHeight : 134px;
    --footerHeight : 138px;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    html:focus-within {
    scroll-behavior: smooth;
    }

    body, #root {
    width: 100dvw;
    min-height: 100dvh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    a:not([class]) {
    text-decoration-skip-ink: auto;
    }
    
    a {
    color: black;
    text-decoration: none;
        &:visited {
        color: black;
        }
    }

    img,
    picture {
    max-width: 100%;
    display: block;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    }

    input,
    button,
    textarea,
    select {
    font: inherit;
    }
    
     button{
        cursor: pointer;
     }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }


    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
`;

export default GlobalStyles;
