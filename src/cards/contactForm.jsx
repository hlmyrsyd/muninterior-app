import React from 'react';
import './contactForm.css'

function ContactForm() {
    return (
        <div className='contact-form'>
            <h1>Got something in mind? Let's Discuss with us!</h1>
            <h2>Tell us more about yourself by filling form below.</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor="name">Hello, My name is </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        placeholder='input name here' 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="needs">I need help for my </label>
                    <select 
                        id='need'
                        name='need'
                        required
                    >
                        <option value="" disabled>Select your needs</option>
                        <option value="interior design">Interior Design</option>
                        <option value="3d visualization">3D Visualization</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">I can be reach at </label>
                    <input 
                        type="email"
                        id='email'
                        name='email'
                        required
                        placeholder='input email here'
                    />
                </div>
                <button>- | Send Info</button>
            </form>
        </div>
    );
}

export default ContactForm;