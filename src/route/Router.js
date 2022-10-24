import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About from "../page/About/About";
import Login from "../page/Catagory/Login/Login";
import Register from "../page/Catagory/Register/Register";
import Home from "../page/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/about', element: <About></About> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> }
        ]

    }
]);