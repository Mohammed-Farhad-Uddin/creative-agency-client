import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../../App';
import HeaderNav from '../../Home/Header/HeaderNav';
import DashboardList from '../DashboardList/DashboardList';
import OrderList from './OrderList';

const ClientOrderedList = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const [orderedList,setOrderedList]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getClientOrderedList', {
            method: 'POST',
            body: JSON.stringify({email:userLoggedIn.email}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res=>res.json())
        .then(result=>{
            setOrderedList(result);
        })
    },[orderedList]);

    return (
        <div >
            <HeaderNav></HeaderNav>
            <Container>
                <div className='row'>
                    <div className='col-md-3'>
                        <DashboardList></DashboardList>
                    </div>
                    <div className='col-md-9 bg-light'>
                        <h2 className='text-center mt-3'>Ordered List</h2>
                        <div className='row'>
                           {/* {
                                orderedList.map((ordered,index)=><OrderList ordered={ordered} key={index}></OrderList>)
                           } */}

                           {

                           }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ClientOrderedList;