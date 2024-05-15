import React from 'react';
import './Contact.css'
import ContactInfo from '../cards/contactInfo';

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
                    title='Chat to us'
                    caption='Our Friendly team is here to help'
                    info='+6161616161'                    />
                </div>
                <div className='contact-form'>

                </div>
            </div>
        </div>
    );
}

export default Contact;