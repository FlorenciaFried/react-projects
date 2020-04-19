import React, { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });
  const [error, setError] = useState(false);
  const { artist, song } = search;

  // Funcion para leer el contenido del input
  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.value]: e.target.value,
    });
  };

  // consultar las apis
  const searchInfo = (e) => {
    e.preventDefault();

    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Todo bien, pasar al componente principal
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={searchInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
