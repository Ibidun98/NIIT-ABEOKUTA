import React from 'react'
import classes from "./Sponsor.module.css";
import country from "../../Assests/Country.png";
import Learners from "../../Assests/Leaners.png";
import Schools from "../../Assests/Schools.png";
import Faculty from "../../Assests/Faculty.png";
import Certification from "../../Assests/Certification.png";
import University from "../../Assests/University.png";
import HDFC from "../../Assests/HDFC.png";
import Finoculus from "../../Assests/Finoculus.png";
import sentienz from "../../Assests/sentienz.png";
import HDB from "../../Assests/HDB.png";
import ITSolutionServices from "../../Assests/IT Solution Services.png";
import NeptuneSoftware from "../../Assests/Neptune Software.png";


const Sponsors = () => {
    return (
        <div className={classes.container}>
            <div className={classes.sponsor}>
                <div className={classes.icons}>
                    <div className={classes.iconImage}>
                        <img src={country} alt="icon" />
                    </div>

                    <div className={classes.iconText}>
                        <h5>PRESENT IN 40 COUNTIRES WORLDWIDE</h5>
                    </div>
                </div>

                <div className={classes.icons}>
                    <div className={classes.iconImage}>
                        <img src={Learners} alt="icon" />
                    </div>
                    <div className={classes.iconText}>
                        <h5>IMPACTED OVER 35 MILLION LEARNERS</h5>
                    </div>
                </div>
                <div className={classes.icons}>
                    <div className={classes.iconImage}>
                        <img src={Schools} alt="icon" />
                    </div>
                    <div className={classes.iconText}>
                        <h5>IMPACTED 17,000 SCHOOLS WORLDWIDE</h5>
                    </div>
                </div>


                <div className={classes.icons}>
                    <div className={classes.iconImage}>
                        <img src={Faculty} alt="icon" />
                    </div>
                    <div className={classes.iconText}>
                        <h5>We HAVE EXPERIENCED FACULITIES</h5>
                    </div>
                </div>

                <div className={classes.icons}>
                    <div className={classes.iconImage}>
                        <img src={Certification} alt="icon" />
                    </div>
                    <div className={classes.iconText}>
                        <h5>INTERNATIONAL CERTIFICATION MAPPED COURSES</h5>
                    </div>
                </div>

                <div className={classes.icons}>
                    <div className={classes.iconImage}>
                        <img src={University} alt="icon" />
                    </div>
                    <div className={classes.iconText}>
                        <h5>TIE-UP WITH TEESIDE UNIVERSITY</h5>
                    </div>
                </div>
            </div>
            
            <div className={classes.sponsor2}>
                <div className= {classes.iconImage}>
                    <img src={HDFC}alt="icon"/>
                </div>

                <div className={classes.iconImage}>
                    <img src={Finoculus}alt="icon"/>
                </div>

                <div className={classes.iconImage}>
                    <img src={sentienz}alt="icon"/>
                </div>

                <div className={classes.iconImage}>
                    <img src={HDB}alt="icon"/>
                </div>

                <div className={classes.iconImage}>
                    <img src={ITSolutionServices}alt="icon"/>
                </div>

                <div className={classes.iconImage}>
                    <img src={NeptuneSoftware}alt="icon"/>
                </div>
            </div>
            <p>Disclaimer: The aforementioned companies have no obligation to recruit NIIT students each year</p>
        </div>
    )
}

export default Sponsors