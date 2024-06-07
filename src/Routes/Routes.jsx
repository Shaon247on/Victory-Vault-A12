import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AllCourses from "../Pages/AllCourses/AllCourses";
import SignUp from "../Pages/SignUp/SignUp";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../LayOut/Dashboard";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageContests from "../Pages/Dashboard/Admin/ManageContests/ManageContests";
import AdminRoute from "./AdminRoutes";
import CreatorHome from "../Pages/Dashboard/Creator/CreatorHome/CreatorHome";
import AddContest from "../Pages/Dashboard/Creator/AddContest/AddContest";
import MyCreatedContest from "../Pages/Dashboard/Creator/MyCreatedContest/MyCreatedContest";
import ContestSubmitted from "../Pages/Dashboard/Creator/ContestSubmitted/ContestSubmitted";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            {
                path:'/contestDetails/:id',
                element: <ContestDetails></ContestDetails>,
                loader:({params})=> fetch(`http://localhost:5000/contest/${params.id}`)
            },

        ]
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            // Admin
            {
                path: 'manageUsers',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                
            },
            {
                path:'manageContests',
                element:<AdminRoute><ManageContests></ManageContests></AdminRoute>
            },
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            // Creators
            {
                path: 'creatorHome',
                element:<CreatorHome></CreatorHome>
            },
            {
                path: 'addContest',
                element:<AddContest></AddContest>
            },
            {
                path: 'myCreatedContest',
                element:<MyCreatedContest></MyCreatedContest>
            },
            {
                path: 'contestSubmitted',
                element:<ContestSubmitted></ContestSubmitted>
            },
            
            // Users            

        ]
    }
]);


export default router;