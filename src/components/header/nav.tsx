import React from "react";
import { Icon } from "@iconify/react";


const Nav = () =>{

    return (<>
        <nav className="nav-menu">
            <ul className="main-menu d-flex">
            <li className="main-menu-item">
            <Icon icon="ic:round-home" height={30} width={30} className="icon"/>
            </li>
            </ul>
        </nav>
     </>)
}


export default Nav;