import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from '../../Home/Header/HeaderNav';
import DashboardList from '../DashboardList/DashboardList';


const AdminAddService = () => {
    const [serviceData, setServiceData] = useState({});
    const [file, setFile] = useState('');

    const handleInputBlur = (e) => {
        const newServiceData = { ...serviceData };
        newServiceData[e.target.name] = e.target.value;
        setServiceData(newServiceData);
    }
    console.log(serviceData);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];//only ek ta file nibe tai [0] diye ek ta bujaice;
        setFile(newFile);
    }
    console.log(file);

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', serviceData.title);
        formData.append('description', serviceData.description);
        console.log(formData);
        fetch('http://localhost:5000/adminAddService', {
            method: 'POST',
            body: formData//file format jabe tai stringify kora jabe na
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                alert('Service Added');

            })
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image').value = '';
        e.preventDefault();
    }

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
                            <form className='p-3' action="" onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Service Title</label>
                                            <input onBlur={handleInputBlur} name='title' type="text" className="form-control" id="title" required />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label">Service Description</label>
                                            <textarea onBlur={handleInputBlur} name='description' className="form-control" id="description" rows="3" required></textarea>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleFormControlInput1" className="form-label">Service Icon</label>
                                        <input type="file" name='file' onChange={handleFileChange} style={{width:'65%'}}  className="form-control mb-3" id="image" required />
                                    </div>
                                    <button style={{ width: '100px' }} className='btn btn-primary m-auto' type='submit'> Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminAddService;