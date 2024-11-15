import React from 'react'
import Hero from "../../Component/AboutHero/AboutHero";
import Job from "../../Component/AboutJob/AboutJob";
import AboutProps from "../../Component/CourseAbout/CourseAbout";

const About = () => {
  return (
    <div>
      <Hero/>
      <Job/>
      <AboutProps/>
    </div>
  )
}

export default About