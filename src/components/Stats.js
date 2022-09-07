import React, { useContext, useEffect } from 'react';
import { BsDownload, BsGraphUp } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { RiUninstallLine } from 'react-icons/ri';
import { GoGraph } from 'react-icons/go';
import { FiUserCheck } from 'react-icons/fi';
import StatsContext from '../context/StatsContext';
import './index.css';

const Stats = () => {
    const { stats, fetchData, loading } = useContext(StatsContext);

    useEffect(() => {
        fetchData();
    }, []);

    const statItem = (icon, statNumber, statName) => {
        const percentages = ["Churn Rate", "Alive Churn Rate"];
        return (
            <div className="flex items-center gap-6">
                <div className="rounded-full bg-white">
                    {icon}
                </div>
                {!loading &&
                    <div>
                        <h1 className='text-white font-semibold text-xl'>{percentages.includes(statName) ? statNumber + "%" : statNumber}</h1>
                        <p className='text-white text-sm font-semibold'>{statName}</p>
                    </div>
                }
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-y-5 bg-[#213046]">
            {statItem(<BsDownload className='stat-icon' />, stats && stats.totalInstall ? stats.totalInstall : 0, "App Installed")}
            {statItem(<AiOutlineThunderbolt className='stat-icon' />, stats && stats.activeinstall ? stats.activeinstall : 0, "Active Installs")}
            {statItem(<GoGraph className='stat-icon' />, stats && stats.churn ? stats.churn : 0, "Churn Rate")}
            {statItem(<RiUninstallLine className='stat-icon' />, stats.totaluninstall, "App Un-Installed")}
            {statItem(<FiUserCheck className='stat-icon' />, stats.aliveappusers, "Alive App Users")}
            {statItem(<BsGraphUp className='stat-icon' />, stats.alivechurn, "Alive Churn rate")}
        </div>
    );
};

export default Stats;