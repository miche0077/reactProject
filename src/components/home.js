import React from "react";
import home from '../img/home.svg';
import '../styles/home.css';
import PropTypes from 'prop-types';

function Home (props){
    return(
        <div className="menu-item">
        <img className="icon" src={home}/>
        <p>{props.home}</p>
        </div>
    )
}

Home.propTypes={
    home: PropTypes.string
}
export default Home