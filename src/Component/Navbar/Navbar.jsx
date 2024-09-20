import React from 'react'
import classes from "./Navbar.module.css";
import Logo from "../../Assests/Logo.png";

import { Link} from "react-router-dom";

const Navbar =( ) =>{
    return(
        <div className={ classes.container}>
            <div>
            <img src={Logo} alt="Logo"/>
            </div>
            <nav>
                <Link to="/">    
                <li>Home</li>
                </Link>
                <Link to="/Courses">
                <li>Courses</li>
                </Link>
                <Link to="/About us">
                <li>Aboutus</li>
                </Link>
                <Link to="/Contact us">
                <li>Contactus</li>
                </Link>
                <Link to="/Register">
                <button>Register</button>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar