import React from 'react';
import {Container} from './style';


const HeaderPg: React.FC = (()=>{

    return(
        <Container>
            <div className="header-top">
                <ul className="contato">
                    <li>
                        <a href ="https://github.com/brunopbrito31" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href ="https://www.linkedin.com/in/brunopbrito3108/" target="_blank">Linkedln</a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=+5571992038969&text=Ola%20Bruno%20Vim%20pelo%20seu%20site%20feito%20em%20react!" target="_blank">Whatsapp</a>
                    </li>
                </ul>
            </div>
            <h1>Zoo Animado</h1>
        </Container>
    )
})

export default HeaderPg;
