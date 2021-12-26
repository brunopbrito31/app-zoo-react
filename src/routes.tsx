import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePg from './components/HomePg/';
import PgSuport from './components/PgSuport/PgSuport';
import PagForm from './components/PagForm';

interface RotasProps{
    nome?:string;
}

const Rotas: React.FC<RotasProps> = (props) =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePg />}/>
                <Route path="/suporte" element={<PgSuport titulo={props.nome} />}/>
                <Route path="/cadastro" element={<PagForm />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;