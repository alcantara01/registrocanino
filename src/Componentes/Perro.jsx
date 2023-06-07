/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/perro.css';
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
            <img className="fotoperro" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.foto} alt={perro.nombre}/><br/>
            {perro.nombre}
              <ul>
                <li>
                <img className="fotoperro" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.fotoMadre} alt={perro.nombreMadre}/><br/>
                  {perro.nombreMadre ? perro.nombreMadre : "Desconocida"}
                  <ul>
                    <li><img className="fotoperro" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.fotoAbuelaMaterna} alt={perro.nombreAbuelaMaterna}/><br/>
                    {perro.nombreAbuelaMaterna ? perro.nombreAbuelaMaterna : "Desconocida"}</li>
                    <li><img className="fotoperro" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.fotoAbueloMaterno} alt={perro.nombreAbueloMaterno}/><br/>
                    {perro.nombreAbueloMaterno ? perro.nombreAbueloMaterno : "Desconocido"}</li>
                  </ul>
                </li>
                <li>
                <img className="fotoperro" style={{width: "100px" ,height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.fotoPadre} alt={perro.nombrePadre}/><br/>
                  {perro.nombrePadre  ? perro.nombrePadre : "Desconocido"}
                  <ul>
                    <li><img className="fotoperro" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.fotoAbuelaPaterna} alt={perro.nombreAbuelaPaterna}/><br/>
                    {perro.nombreAbuelaPaterna ? perro.nombreAbuelaPaterna : "Desconocida"}</li>
                    <li><img className="fotoperro" style={{width: "100px" ,height: "100px"}} src={process.env.PUBLIC_URL + "/" + perro.fotoAbueloPaterno} alt={perro.nombreAbueloPaterno}/><br/>
                    {perro.nombreAbueloPaterno ? perro.nombreAbueloPaterno : "Desconocido"}</li>
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