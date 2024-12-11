import React from "react";

function HistorialBusqueda({ history }) {
  return (
    <div>
      <h2>Historial de Búsquedas</h2>
      <ul>
        {history.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistorialBusqueda;
