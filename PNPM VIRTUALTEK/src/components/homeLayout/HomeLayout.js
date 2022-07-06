import { Outlet } from "react-router-dom";

import Header from "../home/header/Header";
import Footer from "../Footer/Footer";
import MainNav from "../MainNav/MainNav";

export default function HomeLayout() {
    return (
        <>
            {/* <Header /> */}
            <MainNav/>
            <Outlet />
            <Footer />
        </>
    )
}