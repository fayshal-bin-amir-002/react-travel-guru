import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-montserrat">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;