import React, { useState, useEffect } from "react";

function BarraBusqueda({ setCountries, addToHistory }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setCountries([]);
      return;
    }

    const fetchCountries = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        if (!response.ok) throw new Error("No results found");
        const data = await response.json();
        setCountries(data);
        addToHistory(searchTerm);
      } catch (error) {
        setCountries([]);
      }
    };

    const debounceFetch = setTimeout(fetchCountries, 500);
    return () => clearTimeout(debounceFetch);
  }, [searchTerm, setCountries, addToHistory]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar un país..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
    </div>
  );
}

export default BarraBusqueda;
