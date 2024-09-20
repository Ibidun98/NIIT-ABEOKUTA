import React from 'react'
import classes from "./Application.module.css";


const Application = () => {
  return (
    <div className={classes.container}>
       <div className={classes.hero}>
        <h3>COURSE REGISTRATION</h3>
       </div>

       <form className={classes.register}>
        <h3>Welcome to NIIT ABEOKUTA</h3>
        <label For="full_name">Full Name</label><br/>
        <input type="first name" id="full_name" placeholder='Please enter your full name'required/><br/>

        <label For="Email">Email</label><br/>
        <input type="email" id="email" placeholder='Please enter your email address'required/><br/>

        <label For="Phone Number">Phone Number</label><br/>
        <input type="phone" id="phone_Number" placeholder='Please enter your full name'required/><br/>

        <label For="Location">Location</label><br/>
        <input type="location" id="location" placeholder='Please enter your house address'required/><br/>

        <label For="gender">Gender</label><br/>
        <input type="text" id="Gender" placeholder='Please select  your Gender'required/><br/>

        <label For="course">Course of Study</label><br/>
        <input type="text" id="course" placeholder='Please select  your Course to Study'required/><br/>

        <label For="attendance">Mode of Attendance</label><br/>
        <input type="attendance" id="attendance" placeholder='Please select  your  prefered Mode'required/><br/>

        <div className={classes.submit}>
        <button>Submit</button>
        </div>
       </form>
    </div>
  )
}

export default Application