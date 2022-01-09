import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/getAllServices')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllServices(data)
      })
  }, [allServices])
  return (
      <div className='services'>
        <Container>
        <h2 className='text-center my-5'>Provides Awesome <span style={{color:'green'}}>Service</span></h2>
        <div className='row'>
          {
            allServices.map((serviceInfo, index) => <Service serviceInfo={serviceInfo} key={index}></Service>)
          }
        </div>
      </Container>
      </div>
  );
};

export default Services;