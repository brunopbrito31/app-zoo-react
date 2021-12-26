import React, { useState, useCallback, FormEvent } from 'react';
import HeaderSub from '../HeaderSub';
import { Container } from './style';
import { api } from '../../services/api';


interface IDataForm{
    name: string;
    mail: string;
    phone:string;
}


const PagForm : React.FC = (() => {

    const[ data, setData ] = useState<IDataForm>( {} as IDataForm );
    const[ submit, setSubmit ] = useState(false);


    const handleSubit = useCallback( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Consigo chamar a API mas não consigo gravar os dados do elemento com o estado que não seja o inicial
        api.post('', data).then( response =>{
            console.log(response);
            if(response.status === 201){
                setSubmit(true);
            }
        })
    }, [data])

    return(
        <Container>
            <HeaderSub  menSel={3}/>
            {
            submit ? (
                <div className="cad-final">
                    <h1>Obrigado Pelo Envio dos Dados!</h1>
                </div>
            ):(
            <form id="form-cadastro" onSubmit={ handleSubit }>
                <h2>Fale Conosco</h2>
                <div className="campo-form">
                    <label htmlFor="campo-nome">
                        Nome:
                    </label>
                    <input type="text" id="camp-nome"
                        onChange={ e => setData({...data, name: e.target.value})}
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="campo-email">
                        Email:
                    </label>
                    <input type="text" id="camp-email"
                        onChange={ e => setData({...data, mail: e.target.value})}
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="campo-telefone">
                        Telef.:
                    </label>
                    <input type="text" id="campo-email"
                        onChange={ e => setData({...data, phone: e.target.value})}
                    />
                </div>

                <div className="submit-form">
                    <input type="submit" value="Enviar" id="env"></input>
                </div>
            </form>)
            }

        </Container>
    )
})



export default PagForm;