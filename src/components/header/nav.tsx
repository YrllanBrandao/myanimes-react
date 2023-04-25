import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


const Nav = () =>{
 
    return (<>
        <nav className="nav-menu">
            <ul className="main-menu ">
            <li className="main-menu-item tooltip" data-tooltip="Início">
            <Link to={"/"}>
            <Icon icon="ic:round-home" height={30} width={30} className="icon" />
            </Link>
            

            </li>
            <li><button className="btn-menu" >Animes</button></li>
            
            <li><button className="btn-menu"  >Filmes</button></li>
            <li className="main-menu-item tooltip" data-tooltip='Random Anime'>
                <Link to={"/random"}>
                <Icon icon="ph:dice-five-fill" height={30} width={30} className="icon"/>
                </Link>
            </li>
            <li>
                <Link to={"/login"} className="btn-menu link-white">Entrar</Link>
            </li>
            <li>
                <Link to={"/register"} className="btn btn-theme px-1"> Cadastre-se</Link>
            </li>
            </ul>
            
        </nav>
     </>)
}


export default Nav;