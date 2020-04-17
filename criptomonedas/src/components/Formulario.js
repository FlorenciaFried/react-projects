import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import axios from 'axios';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;

  &:hover{
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({setMoneda, setCripto}) => {
    // State del listado de criptomonedas
    const [listaCripto, setListaCripto] = useState([]);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    // Utilizar useMoneda
    const[moneda, SetMoneda] = useMoneda('Elige tu moneda', '', MONEDAS);
    const [error, setError] = useState(false);

    // Utilizar useCriptomoneda
    const[criptomoneda, SetCriptomoneda] = useCriptomoneda('Elige tu criptomoneda', '', listaCripto)

    // Llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            setListaCripto(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    // Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        // validar si ambos campos estan llenos
        if(moneda === '' || criptomoneda === '') {
            setError(true);
            return;
        }

        setError(false);


        // pasar los datos al componente principal
        setMoneda(moneda);
        setCripto(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            
            <SetMoneda />

            <SetCriptomoneda />

            <Boton
                type="submit"
                calue="Calcular"    
            />
        </form>
    );
}

export default Formulario;
