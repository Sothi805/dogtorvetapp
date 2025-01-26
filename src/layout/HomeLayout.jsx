import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import './homeLayout.less';

const HomeLayout = () => {
    return (
        <div id="home-layout">
            <div className="side-navbar">
                <Navbar />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayout;
