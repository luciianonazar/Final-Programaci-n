import React from "react";

function ListaPaises({ countries }) {
  if (countries.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h2>{country.name.common}</h2>
          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "No disponible"}</p>
          <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
          <img src={country.flags.png} alt={`Bandera de ${country.name.common}`} style={{ width: "100px" }} />
        </div>
      ))}
    </div>
  );
}

export default ListaPaises;
