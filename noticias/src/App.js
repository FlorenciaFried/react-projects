import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from './components/NewsList';

function App() {
  // Definir la categoria y noticias
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=4ebfaf6a51fa4f9eb062203cf0a0b205`;
      const answer = await fetch(url);
      const newsApi = await answer.json();

      setNews(newsApi.articles);
    };
    consultarAPI();
  }, [category]);

  return (
    <Fragment>
      <Header tittle={"Buscador de noticias"} />

      <div className="container white">
        <Form setCategory={setCategory} />
      
        <NewsList news={news}/>
      </div>
    </Fragment>
  );
}

export default App;
