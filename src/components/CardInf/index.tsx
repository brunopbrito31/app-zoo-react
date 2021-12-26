import React from 'react';
import { Card } from './style';

interface CardProps{
    title   ?: string;
    subtitle?: string;
    description?: string;
    urlImage?: string;
    desImage?: string;
}

const CardInf: React.FC<CardProps> = (props)=>{
    return(
        <Card>
            <div className="card-title"> 
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <p>{props.description}</p>
            </div>
            <img src={props.urlImage}></img>
            <p className="ft-card">{props.desImage}</p>
        </Card>
    )
}


export default CardInf;