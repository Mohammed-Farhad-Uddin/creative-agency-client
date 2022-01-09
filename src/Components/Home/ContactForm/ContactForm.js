import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactForm.css';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    return (
        <div className='contact-bg'>
            <Container>
                <div className='row p-5'>
                    <div className='col-md-6 col-sm-6'>
                        <h2>Let us handle your <br /> project,professionally.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, repellat praesentium quod neque non maiores.</p>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                       <form action="">
                           <input className='input-bar' type="email" placeholder='Enter Your Email' />
                           <br />
                           <input className='input-bar' type="text" placeholder='Designation' />
                           <br />
                           <textarea className='input-bar' cols="30" rows="10" placeholder='Message'></textarea>
                           <br />
                           <button className='btn btn-secondary'>Submit</button>
                       </form>
                    </div>
                </div>
                <footer className='text-center'>copyright Mohammed Farhad Uddin {new Date().getFullYear()}</footer>
            </Container>
        </div>
    );
};

export default ContactForm;