import React from 'react';
import CardInf from '../CardInf';
import HeaderSub from '../HeaderSub';
import {Container} from './style';


const HomePg: React.FC = (()=>{

    return(
        <Container>
            <HeaderSub menSel={1} />
            <div className="campo-cards">
                <CardInf 
                    title    = "Coalas"
                    subtitle = "Quer aprender a ficar de boinha em meio o caos?"
                    description = "Coalinha: Arrasta pra cima!"
                    urlImage = "https://th.bing.com/th/id/R.db2d7d9922d8850b8c8b721c7a2ebce4?rik=m0Jomg7MRqAx3g&riu=http%3a%2f%2fwww.infoescola.com%2fwp-content%2fuploads%2f2008%2f05%2fcoala-100008095.jpg&ehk=Ehl%2f46LYX4RsQ9jZREMdC5ltaBLzZ7KXvosH2np%2f4Hk%3d&risl=&pid=ImgRaw&r=0"
                    desImage = "A foto acima possui um bixinho agradável e muito talentoso"
                />
                <CardInf 
                    title    = "Ursos"
                    subtitle = "Cuidado! Você pode ser vítima de um ataque de fofura"
                    description = "Ursos são animais muito ferozes e astutos"
                    urlImage = "https://animais.culturamix.com/blog/wp-content/gallery/urso-pardo-1-1/Urso-Pardo-1.jpg"
                    desImage = "A foto acima possui um bixinho muito reservado"
                />
                <CardInf 
                    title    = "Leões"
                    subtitle = "Olha isso! Que valente!"
                    description = "Leão Postar: 'Eu sou Felóis'"
                    urlImage = "https://th.bing.com/th/id/R.54dac026d7d249235354e7b7fb3fdc7e?rik=nDUqJ9Gn1lHoNQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f--SQXG-6VvaY%2fUc8fvnNsR4I%2fAAAAAAAACpk%2f5b0pYPBDN0g%2fs1024%2fleao-velho.jpg&ehk=0L86xAGtcabP0nqnZA7TVHgCj%2fzMnsWFLFNdzSbFWMs%3d&risl=&pid=ImgRaw&r=0"
                    desImage = "A foto acima possui um bixinho agradável e dorminhoco"
                />
            </div>
        </Container>
    )
})

export default HomePg;
