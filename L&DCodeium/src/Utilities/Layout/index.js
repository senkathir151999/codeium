import React from "react";
import PrivateRoute from "../Privateroute";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <PrivateRoute>
            <Outlet></Outlet>
        </PrivateRoute>
    )
}
export default Layout;