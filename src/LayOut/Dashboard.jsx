import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingBag, FaTrophy, FaUsers,FaBookReader  } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";
import useCreator from "../Hooks/useCreator";
import useUser from "../Hooks/useUser";
import useAuth from "../Hooks/useAuth";
import { LinearGradient } from "react-text-gradients";



const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isCreator] = useCreator()
    const [isUser] = useUser()
    const {logOut} = useAuth()
    const navigate = useNavigate()
    console.log('user is:', isUser)

    const handleLogout= ()=>{
        logOut()
        .then(()=>{
            navigate('/')
        })
    }

    return (
        <div className="flex justify-between">
            <div className="w-64 min-h-screen bg-gradient-to-l from-[#3158ef] to-[#b765e7]">
            <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co/gdm3HVn/Untitled-design-2.png" className="w-[40px] rounded-xl"/>
                        <h1 className="text-xl font-extrabold">Victory <span className="text-white">Vault</span></h1>
                    </div>
                <ul className="menu p-5">
                    {
                        isAdmin &&

                        <>
                            <li>
                                <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageContests'><FaTrophy></FaTrophy> Manage Contests</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageUsers'><FaUsers></FaUsers>Manage Users</NavLink>
                            </li>
                        </>
                    }
                    {
                        isCreator &&
                        <>
                            <li>
                                <NavLink to='/dashboard/userHome'><FaHome></FaHome> Creator Home</NavLink>
                            </li>
                            <li>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Add Contest Page</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><FaAd></FaAd> My Created Contest</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'><FaList></FaList> Contest Submitted Page</NavLink>
                            </li>
                        </>
                    }
                    {
                        isUser &&
                        <>
                            <li>
                                <NavLink to='/dashboard/userHome'><FaHome></FaHome> My Profile</NavLink>
                            </li>
                            <li>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> My Participated Contest</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><FaAd></FaAd> My Winning Contest Page</NavLink>
                            </li>                            
                        </>
                    }
                    
                    <div className="divider"></div>

                    {/* shared nav links */}
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/allCourses'><FaBookReader></FaBookReader> All Course</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>
                    <li onClick={handleLogout}> <button><RiLogoutBoxRFill></RiLogoutBoxRFill> Logout</button></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;