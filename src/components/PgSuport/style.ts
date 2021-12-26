import styled from "styled-components";

export const Container = styled.div`
    text-align: center;

    .descritivo{
        margin-top: 50px;
    }


    @media (min-width: 250px) and (max-width: 454px){
        min-height: 620px;
        max-height: 900px;
        height:100%;        
    }

    @media (min-width: 455px) and (max-width: 490px){
        min-height: 660px;
        max-height: 900px;
        height:100%;        
    }

    @media (min-width: 491px) and (max-width: 670px){
        min-height: 660px;
        max-height: 900px;
        height:100%;        
    }
    
    @media (min-width: 671px) and (max-width: 770px){
        min-height: 680px;
    }


`