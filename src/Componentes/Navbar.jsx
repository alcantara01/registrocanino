/* eslint-disable prettier/prettier */
import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav>
      <div className="container-fluid">
        <ul>
        <li className="navbar-item"><NavLink exact to="/" className="navbar-link"activeClassName="active">Inicio</NavLink></li>
        <li className="navbar-item"><NavLink to="/origen" className="navbar-link" activeClassName="active" >Origen</NavLink></li>
        <li className="navbar-item"><NavLink to="/adiestramiento" className="navbar-link" activeClassName="active">Adiestramiento</NavLink></li>
        <li className="navbar-item"><NavLink to="/pedigree" className="navbar-link" activeClassName="active">Pedigree</NavLink></li>
        <li className="navbar-item"><NavLink to="/contacto" className="navbar-link" activeClassName="active">Contacto</NavLink></li>     
      	<div class="animation start-home"></div>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
