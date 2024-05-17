import React from 'react';
import './Navigation.css'

function Navigation() {
    const goToPortfolio = () => {
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    };
    const goToService = () => {
        document.querySelector('#service').scrollIntoView({ behavior: 'smooth' });
    };
    const goToContact = () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className='navigation'>
            <div className='logo'>
                <img src="identity/mun-icon.png" alt="mun logo" />
            </div>
            <div className='content'>
                <a onClick={goToPortfolio}>Projects</a>
                <a onClick={goToService}>Services</a>
                <a onClick={goToContact}>Contacts</a>
            </div>
        </nav>
    );
}

export default Navigation;