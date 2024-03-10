import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarros, setCarros } from "../data/carros";
import EditCarro from "../components/editCarros/editCarro";

function EditCar() {
    const { id } = useParams();
    const nav = useNavigate(); 
    const [nomeCarro, setNomeCarro] = useState('');
    const [marcaCarro, setMarcaCarro] = useState('');
    const [corCarro, setCorCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [carrosList, setCarrosList] = useState(getCarros()); 

    const carro = carrosList.find((carro, index) => index === parseInt(id));

    useEffect(() => {
        if (carro) {
            setNomeCarro(carro.nome);
            setMarcaCarro(carro.marca)
            setCorCarro(carro.cor)
            setAnoCarro(carro.ano);
        } else {
            nav("/carros");
        }
    }, [carro, nav]);

    const salvarEdicao = () => {
        const novosCarros = carrosList.map((car, index) => {
            if (index === parseInt(id)) {
                return { 
                    nome: nomeCarro || car.nome, 
                    marca: marcaCarro || car.marca, 
                    cor: corCarro || car.cor, 
                    ano: anoCarro || car.ano 
                };
            }
            return car;
        });
        setCarrosList(novosCarros); 
        setCarros(novosCarros); 
        nav('/carros')
    };
    
    return (
        <div>
            <EditCarro
            nomeCarro = {nomeCarro}
            setNomeCarro = {setNomeCarro}
            marcaCarro = {marcaCarro}
            setMarcaCarro = {setMarcaCarro}
            corCarro = {corCarro}
            setCorCarro = {setCorCarro}
            anoCarro = {anoCarro}
            setAnoCarro = {setAnoCarro}
            salvarEdicao = {salvarEdicao}
            />
        </div>
    );
}

export default EditCar;
