import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        width: 100vw;
        height: 100vh;
        background-color: #192845;
        color: #FFF;
        font-family: 'Ubuntu', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`