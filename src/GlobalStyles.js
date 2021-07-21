import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #3f51b5;
        --secondary: #8795de;
        --buy: #60B120;
        --wallpaper:#f0f1fa;
        --Gray:#262626;
        --card:#dadae0;
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