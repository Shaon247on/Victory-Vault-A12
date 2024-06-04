import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    return (
        <div className="flex justify-between">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-5">
                    {
                        isAdmin ?

                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                                </li>                               
                                <li>
                                    <NavLink to='/dashboard/manageBookings'><FaBook></FaBook> Manage Contest</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageUsers'><FaUsers></FaUsers>Manage Users</NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'><FaAd></FaAd> Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'><FaList></FaList> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>

                    {/* shared nav links */}
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'><IoMenu></IoMenu> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>
                    <li><NavLink to='/order/contact'><FaEnvelope></FaEnvelope> Contact Us</NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;