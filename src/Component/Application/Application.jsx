import React, {useRef, useState} from 'react'
import classes from "./Application.module.css";
import emailjs from "@emailjs/browser";

const Result=() =>{
  return <p> Your application has been submitted successfully.</p>
};

const Application =() => {
  const [result, showResult] = useState (false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_uzv0aze",
      "template_r593bqf",
      form.current,
      "ltXnL01e8BNH8el52"
    )

    .then(
      (result) =>{
        console.log(result.text);
        console.log(
          "Your application has been submitted successfully."
        );
      },
      (error) => {
        console.log(error.text);
        console.log("Message not sent");
      }
    );

    form.current.reset();
    showResult(true);
  };

  setTimeout(() =>{
    showResult(false);
  }, 5000 );

  return (
    <div className={classes.container}>
       <div className={classes.hero}>
        <h3>COURSE REGISTRATION</h3>
       </div>

       <form ref={form} onSubmit= {sendEmail} className={classes.register}>
        <h3>Welcome to NIIT ABEOKUTA</h3>
        <label For="full_name">Full Name</label><br/>
        <input type="first name" id="full_name" name="full_name" placeholder='Please enter your full name'required/><br/>

        <label For="Email">Email</label><br/>
        <input type="email" id="email" name="email" placeholder='Please enter your email address'required/><br/>

        <label For="Phone Number">Phone Number</label><br/>
        <input type="phone" id="phone_Number" name="phone_Number"placeholder='Please enter your full name'required/><br/>

        <label For="Location">Location</label><br/>
        <input type="location" id="location" name="location" placeholder='Please enter your house address'required/><br/>

        <label For="gender">Gender</label><br/>
        <input type="text" id="Gender" name="Gender" placeholder='Please select  your Gender'required/><br/>

        <label For="course">Course of Study</label><br/>
        <input type="text" id="course" name="course" placeholder='Please select  your Course to Study'required/><br/>

        <label For="attendance">Mode of Attendance</label><br/>
        <input type="attendance" id="attendance" name="attendance" placeholder='Please select  your  prefered Mode'required/><br/>

        <div className={classes.submit}>
        <button>Submit</button>
        </div>
        <div className={classes.myRow}>{result ? <Result/> :null}</div>
       </form>
    </div>
  )
}

export default Application