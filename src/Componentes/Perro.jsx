/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/perro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaBirthdayCake,
  FaFileSignature,
  FaDog,
  FaMars,
  FaVenus,
} from "react-icons/fa";

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
      <div className="container-genealogia">
        <div className="tree">
        <h2 className="genealogia">Pedigree de {perro.nombre}</h2>
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
      <div className="container-informacion">
  <p>
    <button className="buttonCard" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" data-bs-parent="#parentElement">
      Más información
    </button>
  </p>
  <div className="mas-informacion">
    <div className="collapse" id="collapseWidthExample">
      <div className="card card-body lista-informacion">
       <p>Nombre completo del perro: {perro.nombre} {perro.afijo} <FaFileSignature /></p>
       <p>Fecha de Nacimiento:  {perro.fechaNac ? new Date(perro.fechaNac).toLocaleDateString() : "Desconocida"} <FaBirthdayCake /></p>
       <p>Pelaje: {perro.pelaje} <FaDog /></p>
       <p>Sexo:{" "} {perro.sexo === "M" ? (<>Macho <FaMars /></>) : (<>Hembra <FaVenus /></>)}</p>
       <p>Observaciones: {perro.descripcion ? perro.descripcion : ""}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Perro;