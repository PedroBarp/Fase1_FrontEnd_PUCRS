import React, { useState } from "react";
import CarAdd from "../components/addCar/addCar";
import { getCarros, setCarros } from "../data/carros";
import NavBar from "../components/navBar/navbar";

function PaginaInicial() {
    const [nomeCarro, setNomeCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [marcaCarro, setMarcaCarro] = useState('');
    const [corCarro, setCorCarro] = useState('');
    const [carrosList, setCarrosList] = useState(getCarros());

    // Função para adicionar carro e apagar os valores dos input 
    const adicionarCarro = () => {
        { if (!nomeCarro || !anoCarro || !marcaCarro || !corCarro) return };
        const novoCarro = { nome: nomeCarro, marca: marcaCarro, cor: corCarro, ano: anoCarro };
        const novosCarros = [...carrosList, novoCarro];
        setCarrosList(novosCarros);
        setCarros(novosCarros);
        setNomeCarro('');
        setMarcaCarro('');
        setCorCarro('');
        setAnoCarro('');
    };

    return (
        <div>
            <NavBar></NavBar>
            <CarAdd
            nomeCarro = {nomeCarro}
            setNomeCarro = {setNomeCarro}
            anoCarro = {anoCarro}
            setAnoCarro = {setAnoCarro}
            marcaCarro = {marcaCarro}
            setMarcaCarro = {setMarcaCarro}
            corCarro = {corCarro}
            setCorCarro = {setCorCarro}
            carrosList = {carrosList}
            setCarrosList = {setCarrosList}
            adicionarCarro = {adicionarCarro}
            />
        </div>
    );
}

export default PaginaInicial;
