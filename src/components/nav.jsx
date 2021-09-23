import React from "react";
import './css/style.css';
const Nav = () => {return (

  <nav className="nav-style">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#photo-link"><i className="fa fa-fw fa-user"></i>Photo</a>
                <a href="#name-link"><i className="fa fa-fw fa-xing"></i>Name</a>
                <a href="#skills-link"><i className="fa fa-github-alt"></i>Skills</a> 
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </nav>
        )
};
export default Nav;