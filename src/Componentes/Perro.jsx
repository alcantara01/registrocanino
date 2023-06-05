/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Perro = ({ perroId }) => {
  const [perro, setPerro] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET al backend para obtener los detalles del perro específico
    axios
      .get(`/perros/${perroId}`) // La URL se resolverá como `http://localhost:5000/perros/${perroId}`
      .then((response) => {
        setPerro(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del perro:", error);
      });
  }, [perroId]);

  if (!perro) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Perro</h1>
      <p>Nombre: {perro.nombre}</p>
      <p>Fecha de Nacimiento: {perro.fechaNac}</p>
      <p>Pelaje: {perro.pelaje}</p>
      <p>Sexo: {perro.sexo}</p>
      <p>Nombre de la Madre: {perro.nombreMadre}</p>
      <p>Nombre del Padre: {perro.nombrePadre}</p>
    </div>
  );
};

export default Perro;
