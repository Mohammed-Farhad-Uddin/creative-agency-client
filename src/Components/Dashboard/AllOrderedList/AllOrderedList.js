import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../../Home/Header/HeaderNav';
import DashboardList from '../DashboardList/DashboardList';

const AllOrderedList = () => {
    const [allOrderedList, setAllOrderedList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getAllOrderedList')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setAllOrderedList(result);
            })
    }, [allOrderedList]);

    return (
        <div >
            <HeaderNav></HeaderNav>
            <Container>
                <div className='row'>
                    <div className='col-md-3'>
                        <DashboardList></DashboardList>
                    </div>
                    <div className='col-md-9 bg-light '>
                        <h2 className='text-center my-3'>All Ordered List</h2>
                        <div>
                            <table class="table table-dark table-hover mb-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Project Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrderedList.map((allOrder, index) =>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{allOrder.name}</td>
                                                <td>{allOrder.email}</td>
                                                <td>{allOrder.title}</td>
                                                <td>{allOrder.description}</td>
                                                <td>{allOrder.status}</td>
                                            </tr>
                                            )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AllOrderedList;