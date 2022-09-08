import React from "react";
import Stats from "./Stats";
import Table from "./Table";
import { MdDashboard } from 'react-icons/md';
import { FaUserAlt, FaVideo, FaUserPlus } from 'react-icons/fa';
import { IoIosWarning, IoMdInformationCircle, IoMdNotifications } from 'react-icons/io';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';

const Admin = () => {

    return (
        <React.Fragment>
            <div className="navbar bg-[#0f1d32] shadow-xl">
                <div className="flex-none block lg:hidden">
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost flex items-center lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current lg:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1">
                    <img src="/images/logo.png" className="w-10 bg-white" alt="" />
                </div>
            </div>
            <div className="flex gap-6 bg-[#131d32] h-full">
                <div className="w-80 bg-[#253046] h-screen hidden lg:block">
                    <ul className="menu menu-vertical p-4 overflow-y-auto w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a className="text-white active"><MdDashboard />Dashboard</a></li>
                        <li><a><FaUserAlt />WOW Users</a></li>
                        <li><a><FaVideo />Video Clips</a></li>
                        <li><a><IoIosWarning />Reported Content</a></li>
                        <li><a><FiLayers />Category</a></li>
                        <li><a><IoMdInformationCircle />Info Page</a></li>
                        <li><a><AiFillQuestionCircle />FAQ</a></li>
                        <li><a><IoMdNotifications />Push Notifications</a></li>
                        <li><a><FaUserPlus />Internal User</a></li>
                    </ul>
                </div>
                <div className="w-full h-full">
                    <Stats />
                    <Table />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Admin;