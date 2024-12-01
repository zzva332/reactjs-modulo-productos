import MenuSidebar from "./MenuSidebar";
import RouterManager from "../RouterManager";
import { BrowserRouter } from "react-router-dom";

const LayoutDashboard = () => {
    return (
        <div className="d-flex">
            <BrowserRouter>
                <MenuSidebar/>
                <main>
                    <header className="d-block text-end">
                        <img src="https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg" width="45px" />
                    </header>
                    <div className="container">
                        <RouterManager/>
                    </div>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default LayoutDashboard;