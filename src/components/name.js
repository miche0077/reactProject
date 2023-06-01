import React from "react";
import "../styles/name.css"

function Name (){

   const nome = "Michelle Vegas";   

   return(
        <div className="name">
           <header className="header-name">{nome}</header>
        </div>
    )
}

export default Name