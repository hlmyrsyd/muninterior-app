import React from 'react';
import './contactInfo.css'

function ContactInfo({ iconClass, title, caption, info}) {
    return (
        <div className='Info-card'>
            <div className='icon'>
                <i className={iconClass}></i></div>
            <div className='card-contact'>
                <h1>{title}</h1>
                <h2>{caption}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
}

export default ContactInfo;