import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './CarList.css'

function ListaCarro(props) {
    return (
        <div className="containerCar">
            <div className="listCar">
                <h2 className="tituloCarros">Lista de Carros</h2>
                {props.ListCarros.map((obj, ind) => {
                    return (
                        <div key={ind}>
                            <div className="col mytask">
                                <span>{ind} : {obj.nome} - {obj.marca} || {obj.cor} - {obj.ano}</span>
                                <div className="icone">
                                    <span className="excluir" title="Excluir" onClick={() => props.eliminarTarefas(ind)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </span>
                                    <Link className="editar" to={`/editar/${ind}`} title="Editar">
                                        <FontAwesomeIcon icon={faPen} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })} <br/>
                <Link className="btn-success" to={'/addCarro'}>Adiconar carro</Link>
            </div>
        </div>
    )
}

export default ListaCarro