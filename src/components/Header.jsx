import React from 'react'
import './Header.css'

function Header() {
    
    return (
        <section id='home' className="hero">
            <div className="hero-text">
                <h1>Welcome to Mun Interior</h1>
                <p>The joy and excitement of creating custom furniture is what drives us. A home is not only filled with furniture, but also with lifestyle and memories. Bertungku envisions a thoughtful living space with the hope that precious and valuable families will create a lot of history together.</p>
                <a href="#portfolio" className="btn">Check Our Work</a>
            </div>
        </section>
    );
}

export default Header