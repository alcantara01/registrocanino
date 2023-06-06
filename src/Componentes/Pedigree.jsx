/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Pedigree = () => {
  const [perros, setPerros] = useState([]); // Define el estado "perros" como un arreglo vacío usando useState

  useEffect(() => {
     // Obtener los datos de los perros desde la API
    axios
      .get("http://localhost:5000/perros")  // Realiza una solicitud GET a la URL "http://localhost:5000/perros"
      .then((response) => {
        setPerros(response.data); // Actualiza el estado "perros" con los datos de respuesta obtenidos del servidor
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los perros:", error);  // Muestra un mensaje de error en la 
      });                                                                   //consola si la solicitud falla
  }, []);
  // Imprime el estado "perros" en la consola
  console.log(perros);
  return (
    <div className="container-fluid">
      <h1 className="titulo-pagina">Pedigree</h1>
      <div className="card-container">
        <div className="row">
          {perros.map((perro) => (
            <div className="col-md-6 col-sm-12 mb-3" key={perro.id}>
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img
                      className="imgCard img-fluid"
                      src={process.env.PUBLIC_URL + "/" + perro.foto}
                      alt={perro.nombre}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">{perro.nombre}</h3>
                      <p className="card-text">Afijo: {perro.afijo}</p>
                      <p className="card-text">
                        Fecha de Nacimiento:{" "}
                        {perro.fechaNac
                          ? new Date(perro.fechaNac).toLocaleDateString()
                          : "Desconocida"}
                      </p>
                      <p className="card-text">Pelaje: {perro.pelaje}</p>
                      <p className="card-text">Sexo: {perro.sexo}</p>
                      <a href={`/perros/${perro.id}`} className="buttonCard">
                        Ver Pedigree
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedigree;
