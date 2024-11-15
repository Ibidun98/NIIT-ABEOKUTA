import React from 'react'
import classes from "./TextProps.module.css";
//  import Logo from "../../Assests/Logo.png";
//  import student from "../../Assests/AboutImage.png";
//  import Background from "../../Assests/backImage.png";
import { Link } from "react-router-dom";


const TextProps = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.aboutBack}>
                <img src={props.Background} alt="Background" />
            </div>
            <div className={classes.innerContainer}>
                <div className={classes.aboutText}>
                    <div className={classes.Logo}>
                        <img src={props.Logo} alt="Logo" />
                    </div>
                    <h5> {props.about}</h5>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <Link to="/aboutus">
                        <button>{props.More}</button>
                    </Link>
                </div>

                <div className={classes.aboutImage}>
                    <img src={props.student} alt="student" />
                </div>
            </div>
        </div>
    )
}

export default TextProps