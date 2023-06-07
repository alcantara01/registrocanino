/* eslint-disable prettier/prettier */
import React from "react";
// importamos bootstrap
import "bootstrap/dist/css/bootstrap.css";
// estos son los iconos de react para el footer
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
// importamos el css del footer
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container-footer-sup container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-6 footer-about">
             <br></br><br></br>
              <p>Página creada por :</p>
              <p>Cristina Alcántara</p>
            </div>
            <div className="col-md-4 footer-contact">
              <h2>Contáctanos</h2>
              <p>
                <FaMapMarkerAlt /> Cedillo del Condado, Toledo (45214)
              </p>
              <p>
                <FaPhoneAlt /> Teléfono: 669143825
              </p>
              <p>
                <FaEnvelope /> Email: uguina220777@hotmail.com  
              </p>
            </div>
            <div className="col-md-4 footer-terminos">
              <div className="row">
                <div className="col">
                  <h2>Términos</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <a
                      className="terminos-link"
                      href="https://www.amnesty.org/es/privacy-policy/"
                    >
                      Politica de privacidad
                    </a>
                  </p>
                  <p>
                    <a
                      className="terminos-link"
                      href="https://www.amnesty.org/es/permissions/"
                    >
                      Permisos
                    </a>
                  </p>
                  <p>
                    <a
                      className="terminos-link"
                      href="https://www.amnesty.org/es/cookie-statement/"
                    >
                      Uso de cookies
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-footer-inf container-fluid">
          <div className="row">
            <div className="col-md-6 footer-copyright">
              © Presas Canarios De Alcántara{" "}
            </div>
            <div className="col-md-6 footer-redes">
              <a href="https://www.facebook.com/presasAlcantara">
                <FaFacebookSquare />
              </a>
              <a href="https://www.tiktok.com/@presasdealcantara">
                <FaTiktok />
              </a>
              <a href="https://instagram.com/presascanariosdalcantara">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@presascanariosdealcantara893">
                <FaYoutube />
              </a>
              <a href="https://www.youtube.com/@presascanariosdalcantara1265">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
