import React from 'react'
import classes from "./AboutProps.module.css";
// import classes from "./Courses.module.css";
// import Student from "../../Assests/python.png";
// import Student2 from "../../Assests/Digital.png";
// import Student3 from "../../Assests/Web.png";
import {Link} from "react-router-dom"

const AboutProps = (Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
          <h3>{Props.text}</h3>
          <p>{Props.text1}</p>
          <div className={Props.line}>
            <hr />
          </div>
          <div className={classes.btn}>
            <button className={classes.shortTerm}>{Props.shortTerm}</button>
            <button className={classes.longTerm}>{Props.longTerm}</button>
          </div>
        </div>
        <div className={classes.cardWrap}>
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img src={Props.Student} alt="Student"  className={Props.myImage}/>
              <div className={classes.cardText}>
                <h3>{Props.Python}</h3>
                <hr/>
                <p>{Props.text2}</p>
                <Link to="/register">
                <button>{Props.Explore}</button>
                </Link>
              </div>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img src={Props.Student2} alt="Student"  className={Props.myImage}/>
                <div className={classes.cardText}>
                <h3>{Props.Digital}</h3>
                <hr/>
                <p>{Props.text2} </p>
                <Link to="/register">
                <button>{Props.Explore}</button>
                </Link>
              </div>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img src={Props.Student3} alt="Student"  className={Props.myImage}/>
                <div className={classes.cardText}>
                <h3>{Props.Web}</h3>
                <hr/>
                <p>{Props.text2} </p>
                <Link to="/register">
                <button>{Props.Explore}</button>
                </Link>
              </div>
              </div>
            </div>
        </div>
        <div className={classes.butt}>
          <button>{Props.Register}</button>
        </div>
      </div>
    </div>
  )
}

export default AboutProps