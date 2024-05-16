import React from 'react';
import './Contact.css'
import ContactInfo from '../cards/contactInfo';
import ContactForm from '../cards/contactForm';

function Contact() {

    return (
        <div className='contact'>
            <div className='contact-header'>
                <h1>Contacts</h1>
            </div>
            <div className='contact-content'>
                <div className='contact-info'>
                    <ContactInfo 
                    iconClass='fab fa-whatsapp'
                    title='Chat us'
                    caption='Our Friendly team is here to help'
                    info='+6161616161'                    
                    />
                    <ContactInfo 
                    iconClass='fab fa-instagram'
                    title='Follow us'
                    caption='Check out our daily activity'
                    info='@muninterior'                    
                    />
                    <ContactInfo 
                    iconClass='fa fa-neuter'
                    title='Meet us'
                    caption='We are happy to discuss your needs'
                    info='Rumah Tjong A Fie, Medan'                    
                    />
                </div>
                <div className='contact-form'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;