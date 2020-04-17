import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ImagesList from "./components/ImagesList";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const consultAPI = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const key = "16094236-f670de1bcfeac43a48ed4e5b5";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;

      const answer = await fetch(url);
      const result = await answer.json();

      setImages(result.hits);

      // Calcular el total de paginas
      const finalPages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(finalPages);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })
    };

    consultAPI();
  }, [search, actualPage]);

  // Definir la página anterior
  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPage(newActualPage);
  };

  // Definir la página siguiente
  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > totalPages) return;
    setActualPage(newActualPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>

        <Form setSearch={setSearch} />
      </div>

      <div className=" row justify-content-center">
        <ImagesList images={images} />

        {(actualPage === 1) ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={previousPage}
          >
            &laquo; Anterior
          </button>
        )}

        {(actualPage === totalPages) ? null : (
          <button type="button" className="bbtn btn-info" onClick={nextPage}>
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
