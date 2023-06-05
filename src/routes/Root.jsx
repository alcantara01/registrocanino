import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Componentes/Navbar";
import Home from "../Componentes/Home";
import Pedigree from "../Componentes/Pedigree";
import Perro from "../Componentes/Perro";
import ErrorPage from "../Componentes/ErrorPage";
import Footer from "../Componentes/Footer";

function Root() {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>¡Mi Proyecto React!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pedigree" element={<Pedigree />} />
          <Route path="/Pedigree/Perro/:id" element={<Perro />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Root;
