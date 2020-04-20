import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import axios from "axios";

function App() {
  // Definir busqueda
  const [songSearch, setSongSearch] = useState({});
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    if (Object.keys(songSearch).length === 0) return;

    const consultApiLyrics = async () => {
      const { artist, song } = songSearch;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      //const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const result = await axios(url);
      setLyrics(result.data.lyrics);

      /*const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);*/
    };

    consultApiLyrics();
  }, [songSearch]);

  return (
    <Fragment>
      <Form setSongSearch={setSongSearch} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
