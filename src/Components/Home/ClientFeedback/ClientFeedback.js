import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Feedback from './Feedback';


const ClientFeedback = () => {
    const [feedBack,setFeedBack]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getReview')
        .then(res=>res.json())
        .then(review=>{
            // console.log(review,'ami review');
            setFeedBack(review)
        })
    },[feedBack]);
    // console.log(feedBack,'ami feedback');
    return (
        <div className='my-5'>
            <Container>
                <div>
                    <h2 className='text-center my-5'>Client <span style={{color:'green'}}>Feedback</span></h2>
                    <div className='row'>
                        {
                            feedBack.map((review,index)=><Feedback review={review} key={index}></Feedback>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ClientFeedback;