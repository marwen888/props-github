import React from "react";
//import './css/style.css';
 const styleobject ={color:"red"}

const Skills = (props) => {return (
 
 <section className="skills-style">
<h1 id="skills-link">Profession:</h1>
<div style= {styleobject}>
<h4 style= {styleobject}>{props.profession} </h4> 
</div> 

</section>
        )
};
export default Skills;

