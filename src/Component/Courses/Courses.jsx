import React from 'react'
import classes from "./Courses.module.css";
import student from "../../Assests/python.png" ;
import student2 from "../../Assests/Digital.png";
import student3 from "../../Assests/Web.png";
const Courses = () => {
  return (
   < div className={classes.container}>
    <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
        <h3>POPULAR PROGRAMMES</h3>
        <p>Elevate your skills with our most in-demand programmes</p>
        <div className={classes.lines}>
            <hr />
        </div>
        <div className={classes.btn}>
            <button>SHORT TERM COURSE</button>
            <button>LONG TERM COURSE</button>
        </div>
        </div>

        <div className={classes.cardWrap}>
        <div className={classes.card}>
        <div className={classes.cardImage}>
        <img src={student} alt="student"/>
        </div>
        < div className={classes.cardText}>
        {/* <p>PYTHON PROGRAMMING</p> */}
        </div>
        </div>

        
        <div className={classes.card}>
        <div className={classes.cardImage}>
        <img src={student2} alt="student"/>
        </div>
        < div className={classes.cardText}>
        {/* <p>DIGITAL MARKETING</p> */}
        </div>
        </div>
       

        
        <div className={classes.card}>
        <div className={classes.cardImage}>
        <img src={student3} alt="student"/>
        </div>
        < div className={classes.cardText}>
        {/* <p>WEB DESIGN</p> */}
        </div>
        </div>
        </div>

        < div className={classes.butt}>
        <button>EXPLOR MORE</button>
        </div>
    </div>
   </div>
  )
}

export default Courses