import React, {useContext} from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { SharedContext } from "./header";

type context ={
    openMenu: boolean
    setOpenMenu: (valeu: boolean) =>void;
}
const NavMobile = () =>{

   

    const {openMenu, setOpenMenu} = useContext<context>(SharedContext)
    return (<>
        <nav className={`nav-menu-mobile ${openMenu ? "active" : ''}`}>
            <ul className="main-menu d-flex">
            <li className="main-menu-item">
            <Link to={"/"}>
            <Icon icon="ic:round-home" height={30} width={30} className="icon" />
            
            </Link>
            </li>
            <li className="main-menu-item">
            <Link to={"/"}>
           ANIMES
            
            </Link>
            </li>
            <li className="main-menu-item">
            <Link to={"/"}>
           filmes
            
            </Link>
            </li>
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


export default NavMobile;