import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo1.png'
import './navStyle.css'

function NavBar() {
    return (
        <div className="navbar">
            <div>
                <Link className="linksNav img" to={'/'}><img src={logo}/></Link>
            </div>
            <div>
                <Link className="linksNav" to={'/'}>Home</Link>
                <Link className="linksNav" to={'/sobre'}>Sobre</Link>
                <Link className="linksNav" to={'/carros'}>Carros</Link>
                <Link className="linksNav" to={'/addCarro'}>Adicionar Carro</Link>
            </div>
        </div>
    )
}

export default NavBar