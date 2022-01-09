import React from 'react';

const OrderList = ({ ordered }) => {
    return (
        <div className='col-md-6'>
            <div style={{backgroundColor:'white',borderRadius:'7px'}} className='mb-4 p-4 text-center box'>
                <div className='d-flex my-3'>
                    <div>
                        <img style={{ height: '50px' }} src={`data:image/jpeg;base64,${ordered.imageInfo.image}`} alt="service icon" />
                    </div>
                    <div className='ms-auto'>
                        <button className='btn btn-success'>{ordered.status}</button>
                    </div>
                </div>
                <h6>{ordered.title}</h6>
                <p>{ordered.description}</p>
            </div>

        </div>
    );
};

export default OrderList;