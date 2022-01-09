import React from 'react';
import { Container } from 'react-bootstrap';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const HeaderFoot = () => {
    return (
        <div className='mb-5' >
            <Container>
                <div className='grid-row justify-content-center'>
                    <img style={{ height: '40px', marginRight: '60px' }} src={airbnb} alt="airbnb" />
                    <img style={{ height: '40px', marginRight: '60px' }} src={google} alt="google" />
                    <img style={{ height: '40px', marginRight: '60px' }} src={netflix} alt="netflix" />
                    <img style={{ height: '40px', marginRight: '60px' }} src={slack} alt="slack" />
                    <img style={{ height: '40px' }} src={uber} alt="uber" />
                </div>
            </Container>
        </div>
    );
};

export default HeaderFoot;