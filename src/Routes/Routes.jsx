import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AllCourses from "../Pages/AllCourses/AllCourses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allCourses',
                element:<AllCourses></AllCourses>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    },
]);


export default router;