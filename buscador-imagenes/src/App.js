import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ImagesList from "./components/ImagesList";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      if (search === "") return;

      const imagesPerPage = 30;
      const key = "16094236-f670de1bcfeac43a48ed4e5b5";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

      const answer = await fetch(url);
      const result = await answer.json();

      setImages(result.hits);
    };

    consultAPI();
  });

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>

        <Form setSearch={setSearch} />
      </div>

      <div className=" row justify-content-center">
        <ImagesList images={images} />
      </div>
    </div>
  );
}

export default App;
