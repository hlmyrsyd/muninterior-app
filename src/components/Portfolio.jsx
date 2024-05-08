import React from 'react'
import BasicCard from '../cards/basicCard';
import './Portfolio.css'


function Portfolio() {
    return (
        <div className='project'>
            <div className='project-header'>
                <h1>Projects</h1>
            </div>
            <div className='project-cards'>
                <BasicCard 
                title='Project 1'
                location='Medan'
                imageUrl='/assets/project1.webp'
                />
                <BasicCard 
                title='Project 1'
                location='Medan'
                imageUrl='/assets/project2.webp'
                />
                <BasicCard 
                title='Project 1'
                location='Medan'
                imageUrl='/assets/project3.webp'
                />
                <BasicCard 
                title='Project 1'
                location='Medan'
                imageUrl='/assets/project4.webp'
                />
            </div>
        </div>
    );
}

export default Portfolio;