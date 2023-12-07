import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
    return (
        <div className="container mx-auto h-screen">
            <Navigation></Navigation>
            <div className="grid grid-cols-12">
                <Sidebar></Sidebar>
                <Outlet className="col-span-9"></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;