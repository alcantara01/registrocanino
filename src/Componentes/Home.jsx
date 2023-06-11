/* eslint-disable prettier/prettier */
import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slide1 from "../img/carrusel/slide1.jpg";
import Slide2 from "../img/carrusel/slide2.jpg";
import Slide3 from "../img/carrusel/slide3.jpg";
import Noticia1 from "../img/noticias/noticia1.jpg";
import Noticia2 from "../img/noticias/noticia2.jpg";
import Noticia3 from "../img/noticias/noticia3.jpg";


function Home() {
  return (
    <div className="container-fluid">
      <h2 className="titulo-pagina">Presas Canarios De Alcántara: Registro Canino</h2>
      <p>Home no acabada</p>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100" alt="Imagen 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="noticias m-4">
        <h2 className="titulo-pagina">Noticias relacionadas</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4 p-3">
            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-4 d-flex">
              <div class="card h-100">
                <img class="card-img-top" src={Noticia1} alt="Juan A. Hernández responsable del Grupo Lanzaroteño del Presa Canario con su perra Orisha"/>
                <div class="card-body justificado">
                  <a href="https://www.biosferadigital.com/articulo/biosferatv/presas-canarios-guardianas-ermitas-haria-musica-kevin-giraldo/20220722110815116078.html">
                    <h5 class="card-title">Presa canario, las guardianas de las ermitas de Haría y la música de Kevin Giraldo</h5>
                    <p class="card-text">En el Magazine de Obe hablamos de la belleza del presa canario, de las voluntarias que cuidan 
                    de las ermitas del municipio de Haría y del cantante Kevin Giraldo. Nuestro primer invitado fue Juan A. Hernández 
                    responsable del Grupo Lanzaroteño del Presa Canario que vino...</p>
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 1 year ago</small>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-4">
              <div class="card h-100">
                <img class="card-img-top" src={Noticia2} alt="Muestra de los carteles del concurso"/>
                <div class="card-body justificado">
                  <a href="https://www.diariodelanzarote.com/noticia/tinajo-alberga-el-concurso-de-presa-canario-el-pr%C3%B3ximo-domingo-19#:~:text=El%20Ayuntamiento%20de%20Tinajo%20present%C3%B3,veterinaria%20desde%20las%209.30%20horas." >
                    <h5 class="card-title">Tinajo alberga el concurso de Presa Canario el próximo domingo 19</h5>
                    <p class="card-text">"Cada año realizamos este concurso de presa canario porque tenemos como objetivo poner en valor
                    a esta raza autóctona y promover el cuidado y el bienestar de los canes y animales en general. Es un evento que atrae 
                    a participantes de otras islas", destacó el alcalde de Tinajo, Jesús Machín.</p>
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 months ago</small>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-xl-4">
              <div class="card h-100">
                <img class="card-img-top" src={Noticia3} alt="La alcaldesa de la Villa de Tegueste, Ana Rosa Mena, y Cristo Javier Santana, junto a la hembra de presa canario galardonada, Naila." />
                <div class="card-body justificado">
                  <a href="https://www.eldia.es/tenerife/2022/07/12/naila-presa-canaria-proclama-promesa-68253800.html">
                    <h5 class="card-title">Naila, la presa canaria que se proclama promesa mundial de cachorros en el World Dog Show</h5>
                    <p class="card-text">Una hembra de presa canario de 9 meses ha ganado el título Promesa mundial cachorro, en el certamen
                    World Dog Show Madrid 2022. Se llama Naila y pertenece al criadero de Tegueste Crisdoco.  La alcaldesa de la Villa de 
                    Tegueste, Ana Rosa Mena, recibió este martes a representantes del criadero de Tegueste Crisdoco y a la recién galardonada Naila.</p>
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 4 months ago</small>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
