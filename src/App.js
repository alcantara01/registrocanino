import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home";
import Origen from "./Componentes/Origen";
import Pedigree from "./Componentes/Pedigree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/origen" component={Origen} />
        <Route path="/pedigree" component={Pedigree} />
      </Routes>
    </Router>
  );
}

export default App;
