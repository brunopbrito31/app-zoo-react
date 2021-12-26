import styled from "styled-components";


export const  Container = styled.div`
    /* height: 65vh; */
    text-align: center;

    #form-cadastro{
        background-color: whitesmoke;
        box-shadow: 2px 3px 4px red;
        width:38%;
        margin: 60px auto;
        opacity: 0.8;
        padding: 4% 0;
        h2{
            font-size:35px;
            color: red;
        }
        .campo-form{
            margin: 3% 0;
            font-size: 1.7em;
            color: red;
            input{
                width: 65%;
                font-size: 1.1em;
                text-align: center;
                color: red;
                border-color: red;
                background-color: whitesmoke;
                border-radius: 6px; 
            }
        }
        .submit-form{
            font-size: 30px;
            input{
                background-color:red;
                color:white;
                width: 45%;
                height: 40px;
                
                font-size: 1.1em;
                text-align: center;
                border-color: white;
                box-shadow: 2px 3px 4px red;
            }
        }

    }

    .cad-final{
        margin-top: 12%;
        color:red;
        font-size: 25px;
    }

    @media (min-width: 250px) and (max-width: 770px){
        min-height: 72%;
        #form-cadastro{
            margin-top: 90px;
            min-width: 100%;
            min-height: 55%;
            .campo-form{
                input{
                    width: 100%;
                }
            }
            .submit-form{
                padding: 2%;
                input{
                    min-width: 100%;
                }
            }
        }
    }

    @media (min-width: 455px) and (max-width: 490px){
        min-height: 75%
    }

    @media (min-width: 491px) and (max-width: 700px){
        min-height: 80%
    }
    @media (min-width: 701px) and (max-width: 770px){
        min-height: 80%;
        #form-cadastro{
            margin: 0;
            margin-top: 60px;
        }
    }

    /* @media (min-width: 771px) and (max-width: 1000px){
        #form-cadastro{
            margin-top: 100px;
            width:85%;
        }
    } */

    @media (min-width: 960px) and (max-width: 1200px){
        margin: 0;
        padding: 0;
        margin-top: 3px;
        #form-cadastro{
            width:60%;
        }
    }




`