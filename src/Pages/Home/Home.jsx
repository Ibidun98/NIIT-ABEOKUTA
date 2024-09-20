import React from 'react'
import Hero from "../../Component/Hero/Hero";
import Sponsors from "../../Component/Sponsors/Sponsors";
import AboutUs from "../../Component/AboutHome/AboutHome";
import Courses from "../../Component/Courses/Courses";
import Students from "../../Component/Students/Students";
import Testimonials from '../../Component/Testimonials/Testimonials';
const Home = () => {
  return (
    <div>
        <Hero/>
        <Sponsors/>
        <AboutUs/>
        <Courses/>
        <Students/>
        <Testimonials/>
    </div>
  )
}

export default Home
