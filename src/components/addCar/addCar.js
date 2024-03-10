import React from "react";
import './carStyle.css'

function CarAdd(props) {
    return (
        <div className="containerCarAdd">
            <div className="addCar">
            <h2 className="addCarro">Adicionar Carro</h2>
            <input
                type="text"
                value={props.nomeCarro}
                onChange={(e) => props.setNomeCarro(e.target.value)}
                placeholder="Nome do Carro"
            />
            <input
                type="text"
                value={props.marcaCarro}
                onChange={(e) => props.setMarcaCarro(e.target.value)}
                placeholder="Marca do Carro"
            />
            <input
                type="text"
                value={props.corCarro}
                onChange={(e) => props.setCorCarro(e.target.value)}
                placeholder="Cor do Carro"
            />
            <input
                type="text"
                value={props.anoCarro}
                onChange={(e) => props.setAnoCarro(e.target.value)}
                placeholder="Ano do Carro"
            />
            <button className="btn-success" onClick={props.adicionarCarro}>Adicionar Carro</button>
            </div>
        </div>
    )
}

export default CarAdd