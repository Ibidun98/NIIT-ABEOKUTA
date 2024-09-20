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
            path: "/Courses",
            element: <Courses />,
        },

        {
            path: "/Contact us",
            element: <Contact />,
        },

        {
            path: "/About us",
            element: <About />,
        },

        {
            path: "/Register",
            element: <Register/>,
        },

    ]
    )


}


export default Router