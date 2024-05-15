import React, { useState } from 'react';
import './About.css'

function About() {
    const [showID, setShowID] = useState(false);
    const [show3D, setShow3D] = useState(false);

    return (
        <div className='about'>
            <div className='about-header'>
                <h1>Services</h1>
            </div>
            <div className='about-content'>
                <div className='blank'></div>
                <div className='content-text'>
                <a onClick={() => setShowID(!showID)}>
                    {showID? '- | ' : '+ | '}
                    Interior Design
                </a>
                    {showID && 
                    <div className='id-content'>
                        <p>We Prioritize close collaboration with you in every step, ensuring personalized attention to you preferences, eliminating any worries about lack of involvement or dissapointments. Following these steps:</p>
                        <li>Consultation</li>
                        <li>Design & Concept</li>
                        <li>Material Selection</li>
                        <li>Execution</li>
                        <li>Completion</li>
                        <p>Since quality is our best practice. We make sure everywork is detailed and perfect.</p>
                    </div>
                    }
                <a onClick={() => setShow3D(!show3D)}>
                    {show3D? '- | ' : '+ | '}
                    3D Visualization
                </a>
                    {show3D && 
                    <div className='3d-content'>
                        <p>We Offer a powerful and versatile tool for various industries to create, manipulate, and present digital three-dimensional models with 4 key components:</p>
                        <li>3D Modeling</li>
                        <li>3D Rendering</li>
                        <li>Animation</li>
                        <li>Virtual Reality (VR) and Augmented Reality (AR)</li>
                        <p>Transforming how ideas are communicated, designs are developed, and experiences are delivered.</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default About;