import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LinearGradient } from "react-text-gradients";

const Footer = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <div className="flex-1 ">
                    <Link to='/'>
                        <div className="flex flex-col items-center">
                            <img src={`${theme === 'light' ? "https://i.ibb.co/gdm3HVn/Untitled-design-2.png" : "https://i.ibb.co/qNBqy1k/Untitled-design-3.png"}`} className="w-[40px] rounded-xl" />
                            <h1 className="text-xl font-extrabold">Victory<LinearGradient className='text-xl font-extrabold' gradient={['to right', '#3158ef ,#b765e7']}>Vault</LinearGradient></h1>
                        </div>
                    </Link>
                </div>
                <p>VICTORY Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;