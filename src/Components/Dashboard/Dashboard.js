import React from 'react';
import HeaderNav from '../Home/Header/HeaderNav';
import DashboardList from './DashboardList/DashboardList';

const Dashboard = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <DashboardList></DashboardList>
        </div>
    );
};

export default Dashboard;