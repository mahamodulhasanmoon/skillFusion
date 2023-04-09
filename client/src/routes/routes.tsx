import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/courses/Courses";
import Home from "../Pages/Home/Home";
import Tuitions from "../Pages/Tuitions/Tuitions";
import Tuitors from "../Pages/Tutors/Tuitors";
import Login from "../Pages/Auth/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element: <Home/>,
                
    },
    {
        path:'/courses',
        element:<Courses/>
    },
    {
        path:'/course/'
    },
    {
        path:'/find-tutions',
        element:<Tuitions/>
    },
    {
        path:'/tutors',
        element:<Tuitors/>
    },
    {
        path:'/login',
        element:<Login/>
    }
]
}
])