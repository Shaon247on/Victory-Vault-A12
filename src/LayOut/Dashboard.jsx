import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingBag, FaTrophy, FaUsers, FaBookReader } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import useAdmin from "../Hooks/useAdmin";
import useCreator from "../Hooks/useCreator";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import useUser from "../Hooks/useUser";
import useAuth from "../Hooks/useAuth";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from "react";
import ButtonFilled from "../Components/Button/ButtonFilled";



const Dashboard = () => {
    const [theme, setTheme] = useState('light')
    const [isAdmin] = useAdmin()
    const [isCreator] = useCreator()
    const [isUser] = useUser()
    const { logOut, user } = useAuth()
    const navigate = useNavigate()
    console.log('user is:', isUser)

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setTheme('dim')
        } else {
            setTheme('light')
        }
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className="flex justify-between">
            <div className="hidden lg:block w-64 min-h-screen bg-gradient-to-l from-[#3158ef] to-[#b765e7]">
                <div className="flex flex-col items-center mt-4">
                    <img src="https://i.ibb.co/gdm3HVn/Untitled-design-2.png" className="w-[40px] rounded-xl" />
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
                                <NavLink to='/dashboard/creatorHome'><FaHome></FaHome> Creator Home</NavLink>
                            </li>
                            <li>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addContest'><IoMdAddCircle></IoMdAddCircle> Add Contest</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myCreatedContest'><FaAd></FaAd> My Created Contest</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/contestSubmitted'><FaList></FaList> Contest Submitted</NavLink>
                            </li>
                        </>
                    }
                    {
                        isUser &&
                        <>
                            <li>
                                <NavLink to='/dashboard/userProfile'><FaHome></FaHome> My Profile</NavLink>
                            </li>
                            <li>
                            </li>
                            <li>
                                <NavLink to='/dashboard/participatedContest'><FaCalendar></FaCalendar> My Participated Contest</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/winningContest'><FaAd></FaAd> My Winning Contest Page</NavLink>
                            </li>
                        </>
                    }

                    <div className="divider"></div>

                    {/* shared nav links */}
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/allCourses'><FaBookReader></FaBookReader> All Course</NavLink></li>
                    <li onClick={handleLogout}> <button><RiLogoutBoxRFill></RiLogoutBoxRFill> Logout</button></li>
                </ul>

            </div>
            <div className="flex-1">
                <div className="flex justify-end items-center pr-10 mt-7 gap-4">
                    <div className="dropdown dropdown-end md:dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-end lg:hidden"><IoMdMenu className="text-2xl"></IoMdMenu></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
                                        <NavLink to='/dashboard/creatorHome'><FaHome></FaHome> Creator Home</NavLink>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addContest'><IoMdAddCircle></IoMdAddCircle> Add Contest</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myCreatedContest'><FaAd></FaAd> My Created Contest</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/contestSubmitted'><FaList></FaList> Contest Submitted</NavLink>
                                    </li>
                                </>
                            }
                            {
                                isUser &&
                                <>
                                    <li>
                                        <NavLink to='/dashboard/userProfile'><FaHome></FaHome> My Profile</NavLink>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/participatedContest'><FaCalendar></FaCalendar> My Participated Contest</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/winningContest'><FaAd></FaAd> My Winning Contest Page</NavLink>
                                    </li>
                                </>
                            }

                            <div className="divider"></div>

                            {/* shared nav links */}
                            <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                            <li><NavLink to='/allCourses'><FaBookReader></FaBookReader> All Course</NavLink></li>
                            <li onClick={handleLogout}> <button><RiLogoutBoxRFill></RiLogoutBoxRFill> Logout</button></li>
                        </ul>
                    </div>
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {
                        user ?
                            <div>

                                <a
                                    id="my-tooltip"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={`${user.displayName}`}
                                    data-tooltip-place="top"
                                    className=""

                                >
                                    <img className="rounded-full avatar w-12 h-12 object-fill" src={user.photoURL} />
                                </a>
                                <Tooltip className="mt-5" id="my-tooltip">
                                </Tooltip>
                            </div>
                            :
                            <Link to='/login'><ButtonFilled text="Login"></ButtonFilled></Link>
                    }

                </div>
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;