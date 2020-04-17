import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({busqueda, setBusqueda, setConsulta}) => {

    // State del formmulario
    const [error, setError] = useState(false);

    // Extraer ciudad y pais de busqueda
    const {ciudad, pais} = busqueda;

    // Función que coloca los elementos en el state
    const handleChange = e => {
        // Actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        setConsulta(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >

            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecciones un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>


            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-ligth btn-large btn-block yellow accent-4"        
                />
            </div>
        </form>
    )
}

export default Formulario;
