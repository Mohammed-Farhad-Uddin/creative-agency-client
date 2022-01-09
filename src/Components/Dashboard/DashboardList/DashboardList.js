import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './DashboardList.css';
import { AiOutlineUserAdd, AiOutlineShoppingCart, AiOutlineMessage } from 'react-icons/ai';
import { GrFormAdd, GrBusinessService } from 'react-icons/gr';

const DashboardList = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin`, {
            method: 'POST',
            body: JSON.stringify({ email: userLoggedIn.email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                if(result){setIsAdmin(true)}
            })
    }, []);


    return (
        <div className='mt-4'>
            <ul className='ul'>
                {
                    isAdmin ?
                        <>
                            <li><Link to='/dashboard/allOrderedList'><GrBusinessService className='me-2 mb-1' />All Ordered List</Link></li>
                            <li><Link to='/dashboard/allOrderedList'><GrFormAdd className='me-2 mb-1' />Add Service</Link></li>
                            <li><Link to='/dashboard/addAdmin'><AiOutlineUserAdd className='me-2 mb-1' />Make</Link></li>
                        </>
                        :
                        <>
                            <li><Link to='/dashboard/order'><AiOutlineShoppingCart className='me-2 mb-1' />Order</Link></li>
                            <li><Link to='/dashboard/clientOrderedList'><GrBusinessService className='me-2 mb-1' />Your Ordered List</Link></li>
                            <li><Link to='/dashboard/postReview'><AiOutlineMessage className='me-2 mb-1' />Review</Link></li>
                        </>
                }
            </ul>
        </div>
    );
};

export default DashboardList;