import React, {useContext} from 'react';
import styled from 'styled-components';
import { ContextoTema } from '../contextos/ContextoTema';

const Controles = () => {
    const {aumentarFuente, 
            disminuirFuente,
            alinearIzquierda,
            alinearCentro,
            alinearDerecha} = useContext(ContextoTema);
    return (
        <ContenedorBotones>
            <div>
                <Boton onClick={aumentarFuente}>Aumentar</Boton>
                <Boton onClick={disminuirFuente}>Disminuir</Boton>
            </div>
            <div>
                <Boton onClick={alinearIzquierda}>Izq</Boton>
                <Boton onClick={alinearCentro}>Centro</Boton>
                <Boton onClick={alinearDerecha}>Der</Boton>
            </div>
        </ContenedorBotones>
      );
}

const ContenedorBotones = styled.div`
    margin-top:20px;
`;
const Boton = styled.button`
    background: #165168;
    color:#fff;
    border:none;
    cursor:pointer;
    font-size:12px;
    padding:7px;
    margin-right:10px;
    margin-bottom:10px;
    border-radius: 3px;

    &:hover {
        background: #191668;
    }
`

export default Controles;