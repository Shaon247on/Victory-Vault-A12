import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="container relative mx-auto">
            <Navbar className="absolute z-20"></Navbar>
            <Outlet className="absolute z-10"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;