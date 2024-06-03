import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LinearGradient } from "react-text-gradients";
import ButtonFilled from "../../../Components/Button/ButtonFilled";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const navLink = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/allCourses'><li>All Courses</li></NavLink>
    </>

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        logOut()
        navigate('/login')
    }

    const handleToggle = (e) => {
        console.log(e.target.value);
        if (e.target.checked) {
            setTheme('dim')
        } else {
            setTheme('light')
        }
    }
    return (
        <div className="navbar bg-base-100">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
            </div>
            <div className="flex-1 ">
                <Link to='/'>
                    <div className="flex flex-col items-center">
                        <img src={`${theme === 'light' ? "https://i.ibb.co/gdm3HVn/Untitled-design-2.png" : "https://i.ibb.co/qNBqy1k/Untitled-design-3.png"}`} className="w-[40px] rounded-xl" />
                        <h1 className="text-xl font-extrabold">Victory<LinearGradient className='text-xl font-extrabold' gradient={['to right', '#3158ef ,#b765e7']}>Vault</LinearGradient></h1>
                    </div>
                </Link>
            </div>
            <div className="flex gap-4">
                <ul className="gap-4 hidden md:flex">
                    {navLink}
                </ul>
                <div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                </div>
                {/* uncomment it after user setup */}

                <div className="flex gap-4 items-center">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {user ?
                        <><Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <div className="w-10 rounded-full">
                                <img className="rounded-full" src={`${user ? user?.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}`} />
                            </div>
                        </Button><Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                                <MenuItem >Profile</MenuItem>
                                <MenuItem >My account</MenuItem>
                                <MenuItem onClick={handleLogOut} click>Logout</MenuItem>
                            </Menu></> :
                        <Link to='/login'><ButtonFilled text="Login"></ButtonFilled></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;