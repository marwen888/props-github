import React from "react";
import './css/style.css';

const Actionlink = () => { function handleClick(e){e.preventDefault();
    alert("marwen")};
    
    
    return (
        <a href="/" onClick={handleClick}> Warning </a>
 
);
}
export default Actionlink;