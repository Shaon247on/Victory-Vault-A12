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
import ParticipatedContest from "../Pages/Dashboard/Creator/User/ParticipatedContest/ParticipatedContest";
import WinningContest from "../Pages/Dashboard/Creator/User/WinningContest/WinningContest";
import Profile from "../Pages/Dashboard/Creator/User/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import CreatorRoutes from "./CreatorRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allCourses',
                element: <AllCourses></AllCourses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/contestDetails/:id',
                element: <PrivateRoutes><ContestDetails></ContestDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/contest/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // Admin
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>

            },
            {
                path: 'manageContests',
                element: <AdminRoute><ManageContests></ManageContests></AdminRoute>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            // Creators
            {
                path: 'creatorHome',
                element: <CreatorRoutes><CreatorHome></CreatorHome></CreatorRoutes>
            },
            {
                path: 'addContest',
                element: <CreatorRoutes><AddContest></AddContest></CreatorRoutes>
            },
            {
                path: 'myCreatedContest',
                element: <CreatorRoutes><MyCreatedContest></MyCreatedContest></CreatorRoutes>
            },
            {
                path: 'contestSubmitted',
                element: <CreatorRoutes><ContestSubmitted></ContestSubmitted></CreatorRoutes>
            },

            // Users 
            {
                path: 'userProfile',
                element: <Profile></Profile>
            },

            {
                path: 'participatedContest',
                element: <ParticipatedContest></ParticipatedContest>
            },
            {
                path: 'winningContest',
                element: <WinningContest></WinningContest>
            },


        ]
    }
]);


export default router;