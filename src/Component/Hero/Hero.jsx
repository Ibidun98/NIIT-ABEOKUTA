import React from 'react'
import classes from "./Hero.module.css"
import HeroImage from "../../Assests/Logo.png";
import Line from "../../Assests/Line.png";


const Hero = () => {
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.hero}>
                    <div className={classes.HeroImage}>
                        <img src={HeroImage} alt="Logo" />
                    </div>

                    <h2>LET YOUR CAREER GROWTH GO VIRAL </h2>
                    <p>Welcome to the digital era. Get Yourself skilled in Our Digital marketing program at NIIT today.</p>
                </div>
            </div>
            <div className={classes.line}>
                <img src={Line}alt="Line" />
            </div>
        </div>

        
    )
}

export default Hero