import React from "react";
import iconM from '../img/mensages.png';
import '../styles/menssages.css';
import PropTypes from 'prop-types';

function Mensages (props){
    
    return (
        <div className="menu-item">
            <img className="icone-mensage" src={iconM} />
            <p>{props.message}</p>
        </div>
    )
}

Mensages.propTypes = {
    message: PropTypes.string,
}

export default Mensages