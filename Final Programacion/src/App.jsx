import React, { useState } from "react";
import ListaPaises from "./componentes/ListaPaises";
import BarraBusqueda from "./componentes/BarraBusqueda";
import HistorialBusqueda from "./componentes/HistorialBusqueda";

function App() {
  const [countries, setCountries] = useState([]);
  const [history, setHistory] = useState([]); 

  const addToHistory = (countryName) => {
    if (!history.includes(countryName)) {
      setHistory((prevHistory) => [countryName, ...prevHistory.slice(0, 4)]);
    }
  };

  return (
    <div>
      <h1>Buscador de Países</h1>
      <BarraBusqueda setCountries={setCountries} addToHistory={addToHistory} />
      <ListaPaises countries={countries} />
      <HistorialBusqueda history={history} />
    </div>
  );
}

export default App;



