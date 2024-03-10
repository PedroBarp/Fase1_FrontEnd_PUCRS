import React from "react";

function EditCarro(props) {
    return (
        <div style={{height: "100vh"}} className="containerCarAdd">
            <div>
                <h2 className="addCarro">Editar Carro</h2>
                <input
                    type="text"
                    defaultValue={props.nomeCarro}
                    onChange={(e) => props.setNomeCarro(e.target.value)}
                    placeholder="Nome do Carro"
                />
                <input
                    type="text"
                    defaultValue={props.marcaCarro}
                    onChange={(e) => props.setMarcaCarro(e.target.value)}
                    placeholder="Marca do Carro"
                />
                <input
                    type="text"
                    defaultValue={props.corCarro}
                    onChange={(e) => props.setCorCarro(e.target.value)}
                    placeholder="Cor do Carro"
                />
                <input
                    type="text"
                    defaultValue={props.anoCarro}
                    onChange={(e) => props.setAnoCarro(e.target.value)}
                    placeholder="Ano do Carro"
                />
                <button className="btn-success" onClick={props.salvarEdicao}>Salvar Edição</button>
            </div>
        </div>
    )
}

export default EditCarro