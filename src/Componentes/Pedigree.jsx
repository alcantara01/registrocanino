/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Pedigree = () => {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/perros")
    .then((response) => {
      setPerros(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos de los perros:", error);
    });
  
  }, []);
  
  console.log(perros); // Check if the data is fetched correctly
  

  return (
    <div>
      <h1>Pedigree</h1>
      <div className="card-container">
        {perros.map((perro) => (
          <div className="card" key={perro.id}>
            <h2>{perro.nombre}</h2>
            <p>Fecha de Nacimiento: {new Date(perro.fechaNac).toLocaleDateString()}</p>
            <p>Pelaje: {perro.pelaje}</p>
            <p>Sexo: {perro.sexo}</p>
            <p>Nombre de la Madre: {perro.nombreMadre}</p>
            <p>Nombre del Padre: {perro.nombrePadre}</p>
            <button>Ver Pedigree</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedigree;
