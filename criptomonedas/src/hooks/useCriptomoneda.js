import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    display: block;
`;


const useCriptomoneda = (label, stateInicial, opciones) => {
    // State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const SeleccionarCripto = () => (
        <Fragment>
            <Label>{label}</Label>
        
            <Select
                onChange={e => setState(e.target.value)}
            >
                <option value="">-- Seleccione --</option>
                
                {
                    opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))
                }
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y función que modifica el state
    return [state, SeleccionarCripto, setState];
}

export default useCriptomoneda;
