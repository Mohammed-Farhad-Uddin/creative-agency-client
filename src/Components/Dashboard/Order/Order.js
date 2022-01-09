import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../../Home/Header/HeaderNav';
import DashboardList from '../DashboardList/DashboardList';
import './Order.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Order = () => {
    const history = useHistory();
    const {id}=useParams();
    const [findIdService,setFindIdService]=useState({});
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(()=>{
        fetch(`http://localhost:5000/clickedService/${id}`)
        .then(res=>res.json())
        .then(result=>{
            // console.log(result);
            setFindIdService(result);
        })
    },[id]);
    // console.log(findIdService);

    const onSubmit = data => {
        data.title=findIdService.title;
        data.description=findIdService.description;
        data.status= 'Pending';
        data.imageInfo=findIdService.imageInfo;
        //  console.log(data);
        fetch('http://localhost:5000/postOrder', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result) {
                    history.replace('/dashboard/clientOrderedList');
                }
            })
    };


    return (
        <div >
            <HeaderNav></HeaderNav>
            <Container>
                <div className='row'>
                    <div className='col-md-3'>
                        <DashboardList></DashboardList>
                    </div>
                    <div className='col-md-9 bg-light'>
                        <h2 className='text-center mt-3'>Order</h2>
                        <div className='mt-4 mb-5 ms-3'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='input-order' value={userLoggedIn.displayName} {...register("name")} />
                                <br />
                                <input className='input-order' value={userLoggedIn.email} {...register("email")} />
                                <br />
                                <input className='input-order' value={findIdService.title} {...register("title")} />
                                <br />
                                <textarea className='input-order' value={findIdService.description} {...register("description")} />
                                <br />
                                <input className='input-order' defaultValue='10$' {...register("price", { required: true })} />
                                {errors.price && <span>Price is required</span>}
                                <br />
                                <input className='btn btn-success' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Order;