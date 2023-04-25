import React, {useState, createContext } from "react";
import Toggle from "./toggle";
import logo from '../../assets/image/logo.png';
import Nav from "./nav";
import NavMobile from "./navMobile";
import { Link } from "react-router-dom";

export const SharedContext:any = createContext({openMenu: false, setOpenMenu: () => {}});


const Header = () =>{
    const [openMenu, setOpenMenu] = useState(false);
    const windowWIdth:number = window.innerWidth;
    const MOBILE_WIDTH = 768;

    return (<>
    <header>
        <Link to={'/'}>
            <img src={logo} className="header-brand"/>
        </Link>
        
       <SharedContext.Provider value={{openMenu, setOpenMenu}}>
       <Toggle/>
        {windowWIdth <= MOBILE_WIDTH ? <NavMobile/> : <Nav/>}
       </SharedContext.Provider>
    </header>
     </>)
}


export default Header;