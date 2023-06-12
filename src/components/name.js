import React from "react";
import "../styles/name.css"
import PropTypes from 'prop-types';

function Name (props){
  
   return(
        <div className="menu-item">
           <h2 className="name">{props.nome}</h2>
        </div>
    )
}

Name.propTypes = {
   name: PropTypes.string,
}
export default Name