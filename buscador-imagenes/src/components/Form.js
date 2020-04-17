import React, { useState } from "react";
import Error from './Error';

const Form = () => {
  const [term, setTerm] = useState("");
  const [error, setError] = useState(false);

  const searchImages = (e) => {
    e.preventDefault();

    // Validar
    if (term.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Enviar el termino de busqueda hacia el componente principal
  };

  return (
    <form onSubmit={searchImages}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: futbol"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>

        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Buscar"
          />
        </div>
      </div>

      {error ? <Error message="Agrega un termino de búsqueda" /> : null}
    </form>
  );
};

export default Form;
