import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Profile from "../others/Profile/Profile";
import TermsAndCondition from "../others/TermsAnsCondition/TermsAndCondition";
import Block from "../page/Block/Block";
import Catagories from "../page/Catagory/Catagories/Catagories";
import Login from "../page/Catagory/Login/Login";
import Register from "../page/Catagory/Register/Register";
import Checkout from "../page/Checkout/Checkout";
import Course from "../page/Couse/Course";
import FaQ from "../page/FaQ/FaQ";
import Home from "../page/Home/Home";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-drab.vercel.app/course')
            },
            { path: '/block', element: <Block></Block> },
            {
                path: '/catagory/:id',
                loader: ({ params }) => {
                    return fetch(`https://assignment-10-server-drab.vercel.app/catagory/${params.id}`)
                },
                element: <Catagories></Catagories>
            },
            {
                path: '/course/:id', element: <PrivateRoutes><Course></Course></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-10-server-drab.vercel.app/course/${params.id}`)
            },
            {
                path: '/course-checkout/:id', element: <PrivateRoutes><Checkout></Checkout> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-10-server-drab.vercel.app/course/${params.id}`)
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/terms', element: <TermsAndCondition></TermsAndCondition> },
            { path: '/profile', element: <PrivateRoutes><Profile></Profile></PrivateRoutes> },
            { path: '/faq', element: <FaQ></FaQ> }
        ]

    }
]);