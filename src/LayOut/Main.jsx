import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;