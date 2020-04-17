import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

    // Definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN( cantidad )){
            setError(true);
            return;
        }

        // Si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error
                ? <Error mensaje="El presupuesto es incorrecto"/>
                : null
            }
        
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;
