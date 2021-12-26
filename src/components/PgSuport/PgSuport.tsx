import React, { useState } from 'react';
import HeaderSub from '../HeaderSub';
import {Container} from "./style";

interface PgSuportProps{
    titulo?: string;
    subtitulo?: string;
}

const PgSuport: React.FC<PgSuportProps> = (props) => {

    const[ numeroAleatorio, setNumeroAleatorio ] = useState(0);
    const[ isLoad, setIsLoad] = useState(false);

    function GerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) +1);
        setNumeroAleatorio(novoNumero);
    }

    return (
    <Container>
        <HeaderSub  menSel={2}/>
        <div className="descritivo">
            {props.titulo}
            <h3>Esta e a pagina de suporte</h3>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit</p>

            <h4>{numeroAleatorio}</h4>
            <button onClick={GerarNumero}>Mudar</button>


            <p>Trabalhando com Ternário e hooks</p>

            {
                isLoad? (
                    <div>
                        <h1>Resultado Verdadeiro!</h1>
                    </div>
                )
                :
                (
                    <h1>Resultado Falso</h1>
                )
            }

            <button onClick={() =>{setIsLoad(!isLoad)}}>
                Mudar o status e a Mensagem
            </button>

        </div>
    </Container>
    )
}

export default PgSuport;