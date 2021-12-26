import styled from "styled-components";

export const Container = styled.div`
    background-color: red;
    padding: 2%;
    text-align: center;
    color: white;
    font-size: 30px;

    .header-top{
        position: absolute;
        top: 0;
        right: 0;
        .contato{
            list-style: none;
            display: flex;
            li{
                color: red;
                a{
                    text-decoration: none;
                    color: white;
                    margin-right: 10px;
                    font-size: 25px;
                    transition: 300ms;
                    font-family: arial, arial;
                }
                a:hover{
                    border-bottom: 1px solid white;
                }
            }

        }
    }

    @media (min-width: 250px) and (max-width: 600px){
        height: 150px;
        h1{
            margin: 0 auto;
            margin-top:18px;
        }
        .header-top{
            .contato{
                li{
                    a{
                        font-size: 16px;
                    }
                }
            }
        }

    }

    /* @media (min-width: 363px) and (max-width: 454px){
        height: 150px;
        h1{
            width:60%;
            margin: 0 auto;
            margin-top:10px;
            margin-left: 25px;
        }
        .header-top{
            .contato{
                position: absolute;
                top: 0;
                right: 0;
                margin: 25px auto;
                display: block;
                li{
                    a{
                        font-size: 16px;
                    }
                }
            }
        }

    } */

    @media (min-width: 455px) and (max-width: 670px){
        height: 100px;
        h1{
            margin: 0 auto;
            margin-top:25px;
        }
        .header-top{
            .contato{
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                li{
                    a{
                        font-size: 16px;
                    }
                }
            }
        }
    }
`