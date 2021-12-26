import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        height: 100%;
    }
    .app{
        height: 100%;
        width: 100%;
        position: absolute;
        display: grid;
        grid-template-rows: 15vh 73vh 12vh;
        /* grid-template-rows: 2fr 10.65fr 3fr; */
        @media (min-width: 250px) and (max-width: 770px){
            /* grid-template-rows: 18vh 70vh 12vh; */
            display: flex;
            flex-direction: column;
            height:100%;
        }
        @media (min-width: 920px) and (max-width: 1200px){
            /* grid-template-rows: 18vh 70vh 12vh; */
            display: flex;
            flex-direction: column;
            height:100%;
        }
        
        
    }

`