import React from "react";
import AddCar from "./pags/addCarro";
import Sobre from "./pags/sobre";
import Home from "./pags/home";
import Carros from "./pags/carros";
import EditCar from "./pags/ediCar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/carros" element={<Carros></Carros>} />
        <Route path="/sobre" element={<Sobre></Sobre>} />
        <Route path="/addCarro" element={<AddCar></AddCar>} />
        <Route path="/editar/:id" element={<EditCar></EditCar>} />
      </Routes>
    </Router>
  );
}

export default App;
