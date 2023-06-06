/* eslint-disable prettier/prettier */
import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide1 from "../img/sancho.png";


function Home() {
  return (
    <div className="container-fluid">
      <h2>Presas Canarios De Alcántara: Registro Canino</h2>
      <p>Bienvenido a mi proyecto React.</p>
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" className="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={Slide1} alt="First slide" className="img-fluid mx-auto d-block" />
          </div>
          <div className="carousel-item">
            <img src={Slide1} alt="Second slide" className="img-fluid mx-auto d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Slide1} alt="Third slide" className="img-fluid mx-auto d-block w-100" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
