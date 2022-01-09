import React from 'react';
import './Feedback.css'

const Feedback = ({review}) => {
    return (
        <div className='col-md-4 col-sm-6'>
            <div className='review-card'>
                <div className='d-flex'>
                    <div>
                        <img style={{height:'50px',borderRadius:'50%',marginRight:'10px'}} src={review.image} alt="client image" />
                    </div>
                    <div>
                        <h5>{review.name}</h5>
                        <h6>{review.designation}</h6>
                    </div>
                </div>
                <p className='break'>{review.description}</p>
            </div>
        </div>
    );
};

export default Feedback;