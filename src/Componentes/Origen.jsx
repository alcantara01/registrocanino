/* eslint-disable prettier/prettier */
import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FotoOrigenPresa from "../img/origen/origenpresa.jpg";
import FotoAstray from "../img/origen/astray.jpg";
import FotoOrca from "../img/origen/orca.jpg";
import FotoDama from "../img/origen/damamanga.jpg";
import FotoDamaCain from "../img/origen/damaycain.jpg";
import FotoDrako from "../img/origen/drako.jpg";
import { FaPaw, FaRegHandPointer } from "react-icons/fa";
import Decada1930 from "../img/inicio/1930.jpg";
import Decada1973 from "../img/inicio/1973.jpg";

function Origen() {
  return (
    <div className="container-fluid origen">
       <header>
          <ul className="menu justify-content-center">
            <li><a href="#origenpresa">Origen del Presa Canario</a>&nbsp;&nbsp;<FaPaw /></li>
            <li><a href="#mihistoria">Mi historia</a>&nbsp;&nbsp;<FaPaw /></li>
            <li><a href="#nuestroestandar">Nuestro Estándar</a>&nbsp;&nbsp;<FaPaw /></li>
            <li><a href="#seleccion">Selección</a></li>&nbsp;&nbsp;<FaPaw />
          </ul>
      </header>
      <div className="origenpresa" id="origenpresa">
        <div className="card mb-3 card-origen justify-content-center border-0 h-100">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Origen del Presa Canario</h4>
                <hr />
                <p className="card-text text-justify">
                  Los relatos de los colonizadores españoles de las islas hacen mención a un perro de presa que se encontraba en todo el Archipiélago 
                  Canario y que se empleaba como protector y guía del ganado. Esta raza se fue cruzando con otras provenientes de la Península Ibérica 
                  de la familia del Presa Español y posteriormente con los canes tradicionales de pelea inglesa como el Bullterrier y el Bulldog. Fue 
                  cuando el presa canario empezó a ser utilizado como combatiente en los enfrentamientos que los ingleses introdujeron en las islas. 
                  Además, debemos tener en cuenta la influencia del Presa Majorero o Bardino, originario de las Islas Canarias, con el que también se
                  mezcla y del que hereda el tipo y color del pelaje, parte de la expresión y la habilidad para proteger el ganado. 
                </p>
                <p className="card-text text-justify">
                Con la prohibición 
                  de estas peleas en las islas, en los años 60 se llega a un punto cercano a la desaparición de esta raza, pero a partir de los 70 se 
                  inicia su recuperación y se ha logrado que el Presa Canario vuelva a estar presente en gran cantidad en todas las islas.
                  La historia del Presa Canario se remonta a la raza ganadera Presa Ibérica (Perro de Ganado Majorero), una raza de mastín de tamaño mediano 
                  y perro guardián intuitivo. Varios otros canes hispanos pueden haber contribuido a la formación del Presa Canario, en particular, el Presa 
                  Español, así como el Bardino Majorero, un perro pastor prehispánico originario de la isla de Fuerteventura.
                  Las raíces del Presa Canario las encontramos en las Islas Canarias, específicamente en las islas de Gran Canaria y Tenerife. De hecho, una 
                  teoría sugiere que las Islas Canarias deben su nombre a estos perros, que desde tiempos antiguos las habitaban. Can-arias haría referencia 
                  a "can", que significa perro en latín.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={FotoOrigenPresa} className="img-fluid" alt="Foto Origen ed Presa Canario" style={{ height: "100%" }} />
            </div>
          </div>
        </div>
     </div>
     <div className="presacanario ">
        <button type="button" class="buttonCard" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Presa Canario hace décadas <FaRegHandPointer />
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Perros de Presa Canario</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h3> Presa Canario de 1930</h3>
                <p> Década 1930. Una foto bastante antigua, podemos apreciar el corte de las orejas, que ya estaba presente en esa época.</p>
              <img src={Decada1930} alt="Presa Canario de 1930" style={{ maxWidth: '100%', height: 'auto' }} />
                <h3> Presa Canario de 1973</h3>
                <p> Cachorro de Presa Canario de Gran Canaria. Año 1973. Foto archivo de don Clemente Reyes Santana. Fuente: «El Perro de Presa Canario, su verdadero origen».</p>
              <img src={Decada1973} alt="Cachorro de Presa Canario de 1973" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mihistoria" id="mihistoria">
        <div className="card mb-3 card-origen justify-content-center border-0 h-100">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
              <h4 className="card-title">Mi historia</h4>
                <hr />
                <p className="card-text text-justify">
                  Desde mi más pronta infancia en el barrio de Canillejas-San Blas de Madrid he tenido contacto con los perros ya que mis padres
                  criaban Doberman siempre he estado rodeado de cachorros y eso era algo que me gustaba mucho, pero el doberman aun siendo un
                  gran perro no terminaba de llenarme del todo. Con el paso de los años fui teniendo varias y diferentes razas como Pit Bull o
                  Mastín Napolitano, pero sin encontrar en ellos ese ejemplar que tuviese las expectativas que debía ,a mi entender de cumplir, un
                  perro completo. </p>
                  <p className="card-text text-justify">
                  Un día paseando por el barrio ví el primer ejemplar de Presa Canario, "Astray", era propiedad de Jose.
                  Cuando le ví trabajar me quede impactado y al instante supe que esa era la raza de perros que tanto había deseado y que tenía
                  que hacerme con un ejemplar como ese. Inmediatamente le dí mi número de teléfono al dueño de Astray para que me avisara tan
                  pronto como tuviera algún cachorro. Y a los tres meses me avisó que tenía una camada y así me hice con mi primer presa Canario,
                  una cachorra a la que llame “Orca”. </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={FotoAstray} className="img-fluid" alt="Foto de Astray" style={{ height: "100%" }} />
            </div>
          </div>
        </div>
        <div className="card mb-3 card-origen justify-content-center border-0 h-100">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={FotoOrca} className="img-fluid " alt="Foto de Orca" style={{ height: "100%" }}  />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                  <p className="card-text text-justify">                
                  Desde ese momento me inicié en el mundo del Perro de Presa Canario allá por 1996. En 2005
                  decidí que debía criar Perros de Presa Canario bajo mi criterio y selección como perro de trabajo funcional sin perder esa
                  esencia rustica y tradicional que nunca debe perder esta Raza.
                  Así que di de alta el Afijo "de Alcántara" en la Federación Cinológica Española, desde entonces llevamos criando y fomentando 
                  El Perro de Presa Canario como perro de trabajo funcional con enorme satisfacción.
                </p>
                <p className="card-text text-justify">              
                  Desde ese momento me inicié en el mundo del Perro de Presa Canario allá por 1996. En 2005
                  decidí que debía criar Perros de Presa Canario bajo mi criterio y selección como perro de trabajo funcional sin perder esa
                  esencia rustica y tradicional que nunca debe perder esta Raza.
                  Así que di de alta el Afijo "de Alcántara" en la Federación Cinológica Española, desde entonces llevamos criando y fomentando 
                  El Perro de Presa Canario como perro de trabajo funcional con enorme satisfacción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nuestroestandar" id="nuestroestandar">
        <div className="card mb-3 card-origen justify-content-center border-0 h-100">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
              <h4 className="card-title">Nuestro Estándar</h4>
                <hr />
                <p className="card-text text-justify">
                  Nuestro Estándard está enfocado hacia la funcionalidad y el trabajo, respetando la morfología de los orígenes de la raza pero sin 
                  importar los cánones actualmente establecidos en los concursos o exposiciones de belleza. Estamos plenamente convencidos que si 
                  toda esa apariencia o morfología no cumple como medio que le proporcione utilidad como perro de trabajo perdería toda la esencia 
                  del Perro de Presa Canario.
                </p>
                  <p className="card-text text-justify">
                  Por eso todas las características morfológicas en las que basamos nuestro estándard y guían la selección tienen una razón lógica 
                  hacia la disposición para el trabajo. El Perro de Presa Canario debe transmitir seriedad y respeto a través de una fortaleza 
                  exterior visible, una buena estructura e imponente físico de marcada y visible musculatura.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={FotoDama} className="img-fluid" alt="Dama atacando la manga" style={{ height: "100%" }} />
            </div>
          </div>
        </div>
        <div className="card mb-3 card-origen justify-content-center border-0 h-100">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={FotoDamaCain} className="img-fluid " alt="Dama y Cain" style={{ height: "100%" }}  />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                  <p className="card-text text-justify">                
                  La cabeza debe ser masiva de hueso prominente y con unos buenos maseteros que potenciara la mordida. Morro ancho con unas vías nasales 
                  anchas que le permitan respirar adecuadamente durante el ejercicio físico. Belfos recogidos. Dientes fuertes que encajen correctamente 
                  proporcionándole buena mordida. El cuello debe ser fuerte, musculado, recubierto de una piel dura y gruesa. 
                  </p>
                  <p className="card-text text-justify">
                  El tórax amplio, de musculatura marcada de apariencia fuerte y potente, acompañado de una caja torácica amplia que alberga los órganos
                  vitales. En cuanto a las extremidades, las anteriores deben estar aplomadas, de hueso ancho y fuertes sustentadas por pies fuertes y 
                  dedos apretados. Las posteriores deben contar con muslos largos de gran musculatura y buenas angulaciones que le ayuden a amortiguar 
                  su gran físico durante el movimiento.
                </p>
              </div>
            </div>
          
          </div>
        </div>
        
      </div>
      <div className="seleccion">
        <div className="card mb-3 card-origen justify-content-center border-0 h-100">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
              <h4 className="card-title" id="seleccion">Selección</h4>
                <hr />
                <p className="card-text text-justify">
                Seleccionamos nuestros perros reproductores con el claro objetivo de la utilidad y la funcionalidad, manteniendo un equilibrio entre 
                la morfología de nuestro estandar y la predisposición para el trabajo. El Perro de Presa Canario debe ser despierto, ágil y potente 
                en sus movimientos, observador, con un fuerte carácter y temperamento a la vez que familiar, equilibrado mentalmente. 
                <br/>
                De mirada seria y carácter fogoso, bregador, un luchador incansable, bravo y fiel guardián noble y familiar. Un perro de gran 
                fortaleza exterior y buena estructura poco delicado, que goce de gran salud, libre de displasias y equilibrado mentalmente. Un 
                excelente perro para la guarda y la defensa.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={FotoDrako} className="img-fluid" alt="Drako" style={{ height: "400px" }} />
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Origen;
