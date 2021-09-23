import React from "react";
import './css/style.css';


//import dev from "./image/dev.jpg";

const Photo = (props) => {return (

 <section className="photo-style">

<img src={props.image} alt ='imagefrom src' width="240" height="240"/>
               
  </section>
        )
};
export default Photo;


  