import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Componentes/Navbar";
import Home from "../Componentes/Home";
import Origen from "../Componentes/Origen";
import Adiestramiento from "../Componentes/Adiestramiento";
import Pedigree from "../Componentes/Pedigree";
import Perro from "../Componentes/Perro";
import Contacto from "../Componentes/Contacto";
import ErrorPage from "../Componentes/ErrorPage";
import Footer from "../Componentes/Footer";

function Root() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Origen" element={<Origen />} />
          <Route path="/Adiestramiento" element={<Adiestramiento />} />
          <Route path="/Pedigree" element={<Pedigree />} />
          <Route path="/perros/:id" element={<Perro />} />
          {/* Ruta para la página individual del perro elegido */}
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default Root;
