import React from "react";
import home from '../img/home.svg';
import '../styles/home.css';
function Home (){
    return(
        <div className="home-h">
        <img className="icon" src={home}/>
        </div>
    )
}

export default Home