import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/courses/Courses";
import Home from "../Pages/Home/Home";
import Tuitions from "../Pages/Tuitions/Tuitions";
import Tuitors from "../Pages/Tutors/Tuitors";

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
        path:'/find-tutions',
        element:<Tuitions/>
    },
    {
        path:'/tutors',
        element:<Tuitors/>
    }
]
}
])