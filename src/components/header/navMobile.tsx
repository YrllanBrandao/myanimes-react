import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


const NavMobile = () =>{

    return (<>
        <nav className="nav-menu-mobile">
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
            </ul>
        </nav>
     </>)
}


export default NavMobile;