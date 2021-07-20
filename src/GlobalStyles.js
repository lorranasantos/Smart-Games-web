import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #3f51b5;
        --buy: #60B120;
        --lightGray:#C4C4C421;
        --Gray:#262626;
        --light: #FFFFFF;
        --darkGreen: #3F810B;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    button {
        padding:10px;
        font-weight: bold;
        color: var(--light);
        background-color: var(--darkGreen);
        border-radius: 10px;

        cursor: pointer;

        transition:.2s ease-in-out;

        :hover{
            background-color: var(--buy);
        }

        :active{
            transform: scale(0.95);
        }

        :disabled{
            background-color: transparent;
            color: var(--light);
        }

    }

`;