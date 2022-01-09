import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ serviceInfo }) => {
    return (
        <div className='col-md-4 col-sm-6'>
            <Link to={`/dashboard/order/${serviceInfo._id}`}>
                <div className='text-center box'>
                    <img style={{ height: '80px' }} src={`data:image/jpeg;base64,${serviceInfo.imageInfo.image}`} alt="service icon" />
                    <h6>{serviceInfo.title}</h6>
                    <p>{serviceInfo.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Service;