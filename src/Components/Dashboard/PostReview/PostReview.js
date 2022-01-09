import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import HeaderNav from '../../Home/Header/HeaderNav';
import DashboardList from '../DashboardList/DashboardList';
import './PostReview.css';


const PostReview = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.image = userLoggedIn.photo;
        data.email = userLoggedIn.email;
        console.log(data);
        fetch('http://localhost:5000/postReview', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Review sent');
                }
                document.getElementById('name').value = '';
                document.getElementById('designation').value = '';
                document.getElementById('description').value = '';
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
                        <h2 className='text-center mt-3'>Review</h2>
                        <div>
                            <form className='container form p-5' onSubmit={handleSubmit(onSubmit)}>
                                <input value={userLoggedIn.displayName} className='review-input' id='name' type='text' {...register("name", { required: true })} placeholder='Your Name' />
                                {errors.name && <span>This field is required</span>}
                                <br />
                                <input className='review-input' id='designation' type='text' {...register("designation", { required: true })} placeholder="Company's name, Designation" />
                                {errors.designation && <span>This field is required</span>}
                                <br />
                                <textarea className='review-input' id='description' type='text' {...register("description", { required: true })} placeholder="Description" />
                                {errors.description && <span>This field is required</span>}
                                <br />
                                <button className='btn btn-secondary' type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>




    );
};

export default PostReview;