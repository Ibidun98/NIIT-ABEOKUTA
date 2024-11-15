import React from 'react'
import { useRoutes } from "react-router"
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";




const Router = () => {
    return useRoutes([

        {
            path: "/",
            element: <Home />,
        },

        {
            path: "/courses",
            element: <Courses />,
        },

        {
            path: "/contactus",
            element: <Contact />,
        },

        {
            path: "/aboutus",
            element: <About />,
        },

        {
            path: "/register",
            element: <Register/>,
        },

    ]
    )


}


export default Router