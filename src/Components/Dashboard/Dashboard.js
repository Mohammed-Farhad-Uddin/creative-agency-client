import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../Home/Header/HeaderNav';
import DashboardList from './DashboardList/DashboardList';

const Dashboard = () => {
    return (
        <Container>
            <HeaderNav></HeaderNav>
            <DashboardList></DashboardList>
        </Container>
    );
};

export default Dashboard;