import React from "react";
import './css/style.css';
import PropTypes from "prop-types"; 

const Name = (props) => {return (

 <section className="photo-style">
<h1 id="name-link">My name is :</h1>    
<h4> {props.nom} </h4>  

  </section>
)
};
Name.propTypes = {
  nom:PropTypes.string }
export default Name;