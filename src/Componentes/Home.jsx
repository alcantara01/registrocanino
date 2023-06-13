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
import  nagore from "../videos/nagore.mp4";
import  drakoadara from "../videos/drakoadara.mp4";


function Home() {
  return (
    <div className="container-fluid">
      <h1 className="titulo-pagina">Presas Canarios De Alcántara: Registro Canino</h1>
      <h3 className="titulo2-pagina">Cria y Seleccion del Perro de Presa Canario rústico, tradicional, funcional, carácter y equilibrio.</h3>
      <h3 className="titulo2-pagina">Una raza que para describirla hay que VIVIRLA.</h3>
      <div id="carouselExample" className="carousel slide d-flex align-items-center" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block mx-auto" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block mx-auto" alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block mx-auto" alt="Imagen 3" />
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
      <div className="videonagore">
      <video width="640" height="360"  className="center-video" controls>
        <source src={nagore} type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
      </div>
      <div className="videodrakoadara">
      <video width="640" height="360"  className="center-video" controls>
        <source src={drakoadara} type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
      </div>
      <div class="accordion accordion-flush m-5" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            ¿Presa Canario o Dogo Canario?
          </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
              <div class="accordion-content">
                <div class="accordion-text">
                  ¿Por qué tanta polémica? ¿Es la misma raza? ¿En qué se diferencian? La respuesta es: depende de con quien hables. Hay criadores que confirman que son la misma, otros que vienen de líneas diferentes, pero lo que no cabe duda es 
                  que tienen muchas características prácticamente iguales. Cuidado, no estamos hablando del Dogo Argentino, que esta raza si es distinta. Si investigamos podemos encontrar tantas respuestas distintas que es preferible que cada 
                  uno investigue por sí mismo y saque sus propias conclusiones. Recomiendo esta <strong><a href="https://reygladiador.com/dogo-o-presa-canario-historia-de-una-polemica/">revista</a></strong> para empezar a ver de que trata la polémica.
                </div>
                <div class="accordion-image">
                  <img src="ruta-de-la-imagen.jpg" alt="Imagen del item" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
