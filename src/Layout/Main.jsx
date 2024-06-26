import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import NavBar from "../pages/Home/Home/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;