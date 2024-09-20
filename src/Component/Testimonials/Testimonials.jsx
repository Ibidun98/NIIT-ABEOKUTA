import React from 'react'
import classes from "./Testimonials.module.css";
import client from "../../Assests/Adeshina.png";

const Testimonials = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
      <h2>Testimonials</h2>
        <div className={classes.testimonySlide}>
          <p>"Before coming to NIIT, i had only Microsoft Office and Graphic Design skills. But after spending 12 Months in NIIT, i have achieved a lot. With great joy, now i can prouldy say i have acquired Java programing and Web Development Skills."</p>
          < div className={classes.wrap}>
            <div className={classes.clientImage}>
            <img src={client} alt="Adeshina" />
            </div>
            < div className={classes.clientName}>
            <h5>Adesina Oluwayanmife Justified</h5>
            <p>SOFTWARE ENGINEER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials