import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNav from './HeaderNav';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div className='mb-5 background'>
            <HeaderNav></HeaderNav>
            <Container>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                            <h1 className='my-4'>Lets Grow Your <br /> Brand To The <br /> Next Level
                            </h1>
                            <p className='mb-4 w-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique beatae expedita eligendi ex enim</p>
                            <button className='btn btn-secondary px-4'>Hire Us</button>
                     
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <img style={{height:'330px'}} src={frame} alt="frame" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeaderMain;