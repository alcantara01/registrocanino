/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../perro.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Perro = () => {
  const { id } = useParams(); // Obtiene el parámetro "id" de la URL usando el hook useParams de react-router-dom
  const [perro, setPerro] = useState(null); // Estado para almacenar los datos del perro

  useEffect(() => {
    // Realiza una solicitud GET al servidor cuando el componente se monta o cuando el parámetro "id" cambia
    axios
      .get(`http://localhost:5000/perros/${id}`)
      .then((response) => {
        setPerro(response.data); // Almacena los datos del perro en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los datos del perro:", error);// Muestra un mensaje de error en la 
      });                                                             //consola si la solicitud falla
  }, [id]);

  if (!perro) {
    return <div>Cargando perro...</div>;// Muestra un mensaje de carga si los datos del perro aún no se han obtenido
  }
  return (
    <div className="container-fluid">
       <span className="glyphicon-plus"></span> {/* Icono de "más" */}
      <h1>{perro.nombre}</h1>
      <div>
        <h2>Árbol Genealógico</h2>
        <div className="tree container-fluid">
          <ul>
            <li>
              {perro.fotoPadre}
              {perro.nombre}
              <ul>
                <li>
                  {perro.nombreMadre}
                  <ul>
                    <li>{perro.nombreAbuelaMaterna}</li>
                    <li>{perro.nombreAbueloMaterno}</li>
                  </ul>
                </li>
                <li>
                  {perro.nombrePadre}
                  <ul>
                    <li>{perro.nombreAbuelaPaterna}</li>
                    <li>{perro.nombreAbueloPaterno}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Perro;