/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.css";
import Foto from "../img/sancho.png"
import {
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contacto = () => {
  return (
    <div className="container-fluid pt-1">
      <h1 className="titulo-pagina">Contáctanos</h1>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card card-horizontal h-100 justify-content-center border-0">
                  <div className="row no-gutters d-flex align-items-center">
                    <div className="col-md-5">
                      <img
                        src={Foto}
                        alt="Foto del creador"
                        className="card-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body redessociales">
                        <h2 className="card-title">¡Síguenos en nuestras redes sociales!</h2>
                        <div className="social-media">
                          <p><a href="https://www.facebook.com/presasAlcantara"><FaFacebookSquare /></a> &nbsp;
                          Únete a nuestra página de <a href="https://www.facebook.com/presasAlcantara" style={{color: "white"}}>Facebook</a>.</p>
                          <p><a href="https://www.tiktok.com/@presasdealcantara"><FaTiktok /></a> &nbsp;
                          ¡Ven a ver nuestros vídeos en <a href="https://www.tiktok.com/@presasdealcantara" style={{color: "white"}}>Tiktok</a>!</p>
                          <p><a href="https://instagram.com/presascanariosdalcantara"><FaInstagram /></a> &nbsp;
                          ¡Pásate a ver más fotos nuestras en <a href="https://instagram.com/presascanariosdalcantara" style={{color: "white"}}>Instagram</a>!</p>
                          <p><a href="https://youtube.com/@presascanariosdealcantara893"><FaYoutube /></a> &nbsp;
                          <a href="https://www.youtube.com/@presascanariosdalcantara1265"><FaYoutube /></a> &nbsp;
                          Visita nuestros canales de <a href="https://youtube.com/@presascanariosdealcantara893" style={{color: "white"}}>Youtube</a>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pt-2">
                <div className="map-wrapper text-center">                 
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14173.857577409692!2d-3.9238787313248893!3d40.11246118282961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41efca1828ceb9%3A0x6c79c48fff61b622!2s45214%20Cedillo%20del%20Condado%2C%20Toledo!5e0!3m2!1ses!2ses!4v1686158026864!5m2!1ses!2ses"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;