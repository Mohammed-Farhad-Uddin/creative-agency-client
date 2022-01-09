import React  from 'react';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Header from './Header/Header';
import OurWork from './OurWork/OurWork';
import Services from './Services/Services';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
 
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurWork></OurWork>
            <ClientFeedback></ClientFeedback>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;<h1>home</h1>