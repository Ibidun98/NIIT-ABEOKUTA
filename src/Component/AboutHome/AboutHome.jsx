import React from 'react'
import classes from "./AboutHome.module.css";
import Logo from "../../Assests/Logo.png";
import student from "../../Assests/AboutImage.png";
import Background from "../../Assests/backImage.png";
import {Link} from "react-router-dom";

const AboutHome = () => {
  return (
    <div className={classes.container}>
        <div className={classes.aboutBack}>
                <img src={Background} alt="Background" />
            </div>
        <div className={classes.innerContainer}>
        <div className={classes.aboutText}>
        <div className={classes.Logo}>
            <img src={Logo}alt="Logo"/>
        </div>
        <h5> About us</h5>
        <p>NIIT is a leading Skills and Talent Development Corporation that is building 
          a manpower pool for global industry requirements.</p>
        <p>The company, which was set up in 1981 to help the nascent IT industry overcome its human resource challenges, today ranks among the world's leading training companies owing to its vast and comprehensive array of talent development programs.</p>
        <Link to="/aboutus">
           <button>Learn More</button>
            </Link>
        </div>

        <div className={classes.aboutImage}>
        <img src={student} alt="student" />
        </div>
    </div>
    </div>
  )
}

export default AboutHome