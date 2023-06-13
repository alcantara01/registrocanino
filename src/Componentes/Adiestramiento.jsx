/* eslint-disable prettier/prettier */
import React from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import zeus from "../videos/zeus.mp4";
import nagore from "../videos/nagoreadiestramiento.mp4";
import key from "../videos/key.mp4";

function Adiestramiento() {
  return (
    <div className="container-fluid adiestramiento">
      
      <div className="adiestramientocomplicado">
      <h2 className="titulo-pagina">El Presa Canario: un adiestramiento desafiante</h2>
      <p>
      El Presa Canario no es adecuado para dueños primerizos, por lo tanto, si estás considerando tener uno, 
      debes tener en cuenta que su adiestramiento puede ser complicado y que puede representar un riesgo si no se le entrena adecuadamente.
      </p>
      <p>
      El entrenamiento de esta raza requiere dedicar varias horas al día junto a un adiestrador profesional,
      así como practicar estos ejercicios siempre que sea posible. Sin embargo, si dispones del tiempo necesario, 
      espacio en casa, tienes experiencia como dueño de perros y sientes una afinidad especial por esta raza, 
      entonces adelante. El Presa Canario se convertirá en un leal aliado y en un protector del hogar.
      </p>
      <div className="videonagore">
          <video width="640" height="360"  className="center-video" controls>
            <source src={nagore} type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
        </div>
      </div>
      <div className="violenciadegenero">
      <h2 className="titulo-pagina">El perro guardián contra la violencia de género</h2>
        <p>Al igual que conocemos la increíble labor que realizan los Golden Retrievers y los Labradores como perros 
        guía, también existen otras razas que son perfectas para brindar otro tipo de asistencia. Uno de estos 
        ejemplos es el Presa Canario, que se destaca por su gran servicio como protector en casos de violencia de género.</p>

        <p>Desde el año 2003, esta raza se ha convertido en un perro guardián oficial en la lucha contra este tipo de maltrato. 
        La policía ha emitido un comunicado detallando las condiciones para solicitarlo, así como las cualidades y 
        características beneficiosas de tener un Presa Canario junto a la persona víctima de maltrato.</p>

        <p>Para poder solicitar un perro de esta raza, la persona deberá cumplir una serie de requisitos, como haber presentado 
        legalmente una orden de alejamiento contra el agresor. En este caso, el Presa Canario estará entrenado para acompañar
        en todo momento a la persona víctima de maltrato y actuar en su defensa si detecta el olor o la presencia del agresor
        a una distancia menor a la estipulada en la orden.</p>

        <p>Gracias a la increíble labor que realiza el Presa Canario y los testimonios positivos de las personas maltratadas
        sobre la seguridad que sienten a su lado, la reputación y el valor de esta raza han ido ganando reconocimiento en los últimos años.</p>
        <div className="videozeus">
          <video width="640" height="360"  className="center-video" controls>
            <source src={zeus} type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
        </div>
        <div className="videokey">
          <video width="640" height="360"  className="center-video" controls>
            <source src={key} type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
        </div>
      </div>
    </div>
);
}

export default Adiestramiento;
