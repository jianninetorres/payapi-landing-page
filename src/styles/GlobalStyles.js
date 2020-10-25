import { createGlobalStyle } from "styled-components"

import "./typography.css"

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --blue-grey: #375369;
        --light-grey: #CFD8E1;
        --blue-black: #1C262F;
        --page-grey: #EAEFF5;
        --hot-pink: #BA4270;
        --white: #FFFFFF;
    }

    html {
        font-size: var(--base-size);
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    body {
        background-color: var(--page-grey)
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    h1 {
        font-family: "Playfair Display", georgia, serif;
    }

    h1, h2, h3 {
        font-weight: 700;
    }

    h4, h5, h6 {
        font-weight: 500;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }
`

export default GlobalStyles
