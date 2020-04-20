import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import Info from './components/Info';
import axios from "axios";

function App() {
  // Definir busqueda
  const [songSearch, setSongSearch] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');

  useEffect(() => {
    if (Object.keys(songSearch).length === 0) return;

    const consultApiLyrics = async () => {
      const { artist, song } = songSearch;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyrics, info] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLyrics(lyrics.data.lyrics);
      setArtist(info.data.artists[0]);
    };

    consultApiLyrics();
  }, [songSearch, artist]);

  return (
    <Fragment>
      <Form setSongSearch={setSongSearch} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <Info 
            artist={artist}
          />
          </div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
