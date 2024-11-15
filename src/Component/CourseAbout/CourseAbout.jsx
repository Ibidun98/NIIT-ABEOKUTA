import React from 'react'
import Student from "../../Assests/python.png";
import Student2 from "../../Assests/Digital.png";
import Student3 from "../../Assests/Web.png";
import AboutProps from "../../Component/AboutProps/AboutProps";

const CourseAbout = () => {
  return (
    <div>
    <AboutProps
    text="Three Easy Steps  To Becoming An NIIT Student Today!"
    text1="You can do this on both your mobile and web devices"
    shortTerm="Medium Term"
    longTerm ="Overall Period"
    Phyton="Tell us a few details about you to help us create your transferwise account quickly."
    Digital="You’re ready to go. Kick Start your IT Career  with ease"
    Web="You can do this on both your mobile and web devices."
    Register= "Find more"
    Student={Student}
    Student2={Student2}
    Student3={Student3}
    Explore="click Here"

    />
    </div>
  )
}

export default CourseAbout