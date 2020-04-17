import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  // State del formmulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consulta, setConsulta] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  // Extraer ciudad y pais de busqueda
  const {ciudad, pais} = busqueda;

  // Uso useRffect
  useEffect(() => {
    const consultarAPI = async () =>{

      if(consulta){
        const appID = '7607f8fa425da7e557056a911df9e1aa';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
      
        const api = await fetch(url);
        const resultado = await api.json();
  
        setResultado(resultado);
        setConsulta(false);

        // Detecta si hubo un error en la peticion
        if(resultado.cod === "404"){
          setError(true);
        }else{
          setError(false);
        }
      }
    }

    consultarAPI();
  }, [consulta]);

  // Que pasa si hay un error
  let componente;
  if(error){
    componente = <Error mensaje="No hay resultados" />
  }else{
    componente = <Clima resultado={resultado} />
  }

  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
