import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AllCourses from "../Pages/AllCourses/AllCourses";
import SignUp from "../Pages/SignUp/SignUp";

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
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
]);


export default router;