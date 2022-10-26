import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Profile from "../others/Profile/Profile";
import TermsAndCondition from "../others/TermsAnsCondition/TermsAndCondition";
import About from "../page/About/About";
import Catagories from "../page/Catagory/Catagories/Catagories";

import Login from "../page/Catagory/Login/Login";
import Register from "../page/Catagory/Register/Register";
import Course from "../page/Couse/Course";
import Home from "../page/Home/Home";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course')
            },
            { path: '/about', element: <About></About> },
            {
                path: '/catagory/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/catagory/${params.id}`)
                },
                element: <Catagories></Catagories>
            },
            {
                path: '/course/:id', element: <PrivateRoutes><Course></Course></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/terms', element: <TermsAndCondition></TermsAndCondition> },
            { path: '/profile', element: <PrivateRoutes><Profile></Profile></PrivateRoutes> }
        ]

    }
]);