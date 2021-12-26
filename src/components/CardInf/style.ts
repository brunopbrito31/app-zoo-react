import styled from "styled-components";

export const Card = styled.div`
    background-color: whitesmoke;
    box-shadow: 2px 3px 4px black;
    text-align: center;
    width: calc(100%/3 - 8%);
    opacity: 0.9;
    margin: 0 10px;
    
    
    img {
        width: 100%;
        height: 60%;
    }

    .ft-card{
        margin-top: 28px;
    }

    .card-title{
        font-size:0.8em;
        height: 70px;
    }


    /* @media (min-width: 250px) and (max-width: 1500px){
        
        width: calc(95% - 2%);
        margin: 4%;

        img {
            height:58%
        }

    } */

    @media (min-width: 250px) and (max-width: 310px){
        
        width: calc(95% - 2%);
        margin: 4%;
        font-size: 10px;

        img {
            height:58%
        }

    }

    @media (min-width: 311px) and (max-width: 450px){
        
        width: calc(95% - 2%);
        margin: 4%;

        img {
            height:55%
        }

        .card-title{
            height:18%;
            text-align:center;
            font-size: 0.8em;
        }

    }

    // Extender o efeito de um card ate 900px
    @media (min-width: 451px) and (max-width: 600px){
        
        width: calc(95% - 2%);
        margin: 4%;
        font-size:1.1em;

        img {
            height:65%
        }
        .card-title{
            height:20%;
            text-align:center;
        }

    } 
    @media (min-width: 451px) and (max-width: 541px){
        font-size: 0.9em;
    }

    @media (min-width: 601px) and (max-width: 770px){
        width: calc(95% - 2%);
        margin: 4%;
        font-size:1.1em;

        img {
            height:65%
        }
        .card-title{
            height:20%;
            text-align:center;
        }
    }

    /* @media (min-width: 771px) and (max-width: 1200px){
        width: calc(100%/3);
        margin: 1.5%;
        font-size:1.1em;
        height: 500px;
        img {
            height: 55%
        }
        .card-title{
            height:22%;
            text-align:center;
            font-size: .85em;
            margin: 0;
        }
    } */


    /* @media (min-width: 601px) and (max-width: 1200px){
        
        width: calc(100%/3 - 2%);
        height: 500px;
        margin-top:8%;
        font-size: 18px;
        img {
            height:58%
        }
        .card-title{
            height:20%;
            text-align:center;
        }

    } */

    @media (min-width: 960px) and (max-width: 1200px){
        
        height: 280px;
        width: calc(100%/3 - 1.7%);
        font-size: 16px;
        img {
            height:55%
        }
        .card-title{
            height:17%;
            text-align:center;
            font-size: 0.67em;
        }

    }
`