/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../img/mantenimiento/logo.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div >
    <nav className="navbar navbar-expand-md">
      <img src={Logo} className="logonavbar" alt="Logo" />
      <button
        className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
        type="button"
        onClick={toggleMenu} >
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-center ${ isMenuOpen ? "show" : "" }`} id="navbarNav">
        <ul className="navbar-nav custom-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/origen" className="nav-link" activeClassName="active">Origen</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/adiestramiento" className="nav-link"activeClassName="active">Adiestramiento</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pedigree" className="nav-link" activeClassName="active">Pedigree</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link" activeClassName="active">Contacto</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
