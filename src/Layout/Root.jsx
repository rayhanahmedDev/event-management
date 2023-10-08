import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";



const Root = () => {
    return (
        <div className="bg-[#F5F5F6]">
            <div className="max-w-[1540px] mx-auto">
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <div className="max-w-7xl mx-auto my-12">
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;