import React from "react";
import  {Icon} from '@iconify/react';
import Overlay from "../overlay";
import GridAnime from "./gridAnime";
import { Link } from "react-router-dom";
const Home = () =>{
    return(<>

        
        <Overlay/>
        <div className="home">
            <div className="home-bg"></div>
        <h1 className="home-title fs-4  text-white d-flex align-items-center gap-1">
        <Icon icon="material-symbols:play-circle-rounded" color="white"  width={30} height={30}/>
            Recentes
        </h1>
        <GridAnime/>

        <Link to={"/releases"} className="btn-release fs-6 text-white bg-primary d-flex justify-content-center align-items-center">
        <Icon icon="mdi:hot" color="white" width="25" height="25" />
            Últimos lançamentos
        </Link>
        </div>
    </>)
}

export default  Home;