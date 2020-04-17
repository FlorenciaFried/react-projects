import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Form = ({crearCita}) => {

    // Crear State de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);

    // Función que se ejecuta cuando el usuario modifica el formulario
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ){
            setError(true);
            return;
        }

        // Eliminar el mensaje de error
        setError(false);

        // Asignar un ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error 
            ? <p className="alerta-error">Todos los campos son obligatorios</p>
            : null
            }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-widht"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-widht"
                    placeholder="Nombre del dueño"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-widht"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-widht"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    name="sintomas" 
                    className="u-full-widht"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    )
}

export default Form;
