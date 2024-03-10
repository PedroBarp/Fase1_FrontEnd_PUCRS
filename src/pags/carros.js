import React, { useState, useEffect } from "react";
import { getCarros, setCarros } from "../data/carros";
import NavBar from "../components/navBar/navbar";
import ListaCarro from "../components/CarroLista/carrolista";

function AddCar() {
    const [ListCarros, setListCarros] = useState(getCarros());

    // Função para excluir o item da lista
    function eliminarTarefa(ind) {
        const carrosExcluidos = ListCarros.filter((val, index) => index !== ind);
        setListCarros(carrosExcluidos);
        setCarros(carrosExcluidos); 
    }

    useEffect(() => {
        setCarros(ListCarros); 
    }, [ListCarros]);

    return (
        <div>
            <NavBar></NavBar>
            <ListaCarro
            ListCarros = {ListCarros}
            eliminarTarefas = {eliminarTarefa}
            />
        </div>
    );
}

export default AddCar;
