import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import HeaderNav from '../../Home/Header/HeaderNav';
import DashboardList from '../DashboardList/DashboardList';
import './AddAdmin.css'


const AddAdmin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch('http://localhost:5000/addAdmin', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(result => {
        //   console.log(result);
        if (result) {
          alert('Admin Added Successfully')
        }
      })
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  };
  return (
    <div >
      <HeaderNav></HeaderNav>
      <Container>
        <div className='row'>
          <div className='col-md-3'>
            <DashboardList></DashboardList>
          </div>
          <div className='col-md-9 bg-light '>
            <h2 className='text-center mt-3'>Add Admin</h2>
            <div>
              <form className=' container form p-5' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className='me-3' >Full Name :</label>
                <input className='input' id='name' type='text' {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <br />
                <label htmlFor="email" className='me-3' >Admin Email :</label>
                <input className='input' id='email' type='email' {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <br />
                <button className='btn btn-secondary' type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddAdmin;