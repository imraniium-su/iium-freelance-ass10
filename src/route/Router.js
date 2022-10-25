import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Profile from "../others/Profile/Profile";
import TermsAndCondition from "../others/TermsAnsCondition/TermsAndCondition";
import About from "../page/About/About";
import Login from "../page/Catagory/Login/Login";
import Register from "../page/Catagory/Register/Register";
import Home from "../page/Home/Home";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <PrivateRoutes><Home></Home></PrivateRoutes> },
            { path: '/about', element: <About></About> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/terms', element: <TermsAndCondition></TermsAndCondition> },
            { path: '/profile', element: <PrivateRoutes><Profile></Profile></PrivateRoutes> }
        ]

    }
]);