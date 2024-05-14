import React from 'react'
import './Header.css'

function Header() {
    const handleClick = () => {
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id='home' className="hero">
            <div className="hero-text">
                <h1>Bespoke Interior Design <br/>and 3D Visual</h1>
                <a className="btn" onClick={handleClick}>Check Our Work</a>
            </div>
        </div>
    );
}

export default Header