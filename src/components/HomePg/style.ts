import styled from "styled-components";

export const Container = styled.div`
   
    .campo-cards{
        
        width: 85%;
        margin: 0 auto;
        margin-top: 3%;
        display: flex;
        justify-content : space-evenly;
    }
    
    @media (min-width: 250px) and (max-width: 600px){

        .campo-cards{
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        
    }

    @media (min-width: 601px) and (max-width: 770px){
        
        .campo-cards{

            flex-wrap: wrap;

        }
    }

    /* @media (min-width: 601px) and (max-width: 1200px){
        height:100%;
        
        .campo-cards{
            margin-top:-5px;
            height:600px;
        }
    } */

    @media (min-width: 1201px) and (max-width: 1300px){
        height:100%;
        
        .campo-cards{
            margin-top:2.5%;
            height:250px;
        }
    }
`