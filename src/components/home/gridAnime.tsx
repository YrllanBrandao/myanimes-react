import React from "react";
import { Link } from "react-router-dom";



const RecentAnimes = () => {

    
    return(<>
        <ul className="grid-anime-home">
            <Link className="grid-anime-item-home" to={"/home"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home" to={"/"}></Link>
            <Link className="grid-anime-item-home mobile-only" to={"/"}></Link>
            
            {/*  */}
        </ul>
    </>)
}

export default RecentAnimes;