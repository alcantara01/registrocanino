/* eslint-disable prettier/prettier */
import React from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <div className="container-fluid pt-3">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Ponerse en contacto</h3>
                  <div id="form-message-warning" className="mb-4"></div>
                  <form onSubmit={handleSubmit} className="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">Nombre</label>
                          <input type="text" className="form-control" name="name" id="name" placeholder="Nombre" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="email">Correo Electrónico</label>
                          <input type="email" className="form-control" name="email" id="email" placeholder="Correo Electrónico" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">Asunto</label>
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="message">Mensaje</label>
                          <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Mensaje"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="submit" value="Enviar mensaje" className="btn bg-secondary mt-2" />
                          <div className="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                <div className="info-wrap w-100 p-lg-5 p-4">
                  <h3 className="mb-4 mt-md-4">Información de contacto</h3>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-4">
                      <p><span>Dirección:</span> Cedillo del Condado, Toledo (45214)</p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-4">
                      <p><span>Teléfono:</span> +34 669 143 825</p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-4">
                      <p><span>Email:</span> uguina220777@hotmail.com</p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text pl-4">
                      <p><span>Sitio web:</span></p>
                    </div>
                  </div>
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
