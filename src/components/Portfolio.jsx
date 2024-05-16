import React from 'react'
import BasicCard from '../cards/basicCard';
import './Portfolio.css'


function Portfolio() {
    return (
        <div className='project'>
            <div className='project-header' id='portfolio'>
                <h1>Projects</h1>
            </div>
            <div className='project-cards'>
                <BasicCard 
                title='Project 1'
                location='Medan1'
                imageUrl='/assets/project1.webp'
                />
                <BasicCard 
                title='Project 2'
                location='Medan2'
                imageUrl='/assets/project2.webp'
                />
            </div>
            <div className='project-cards'>
                <BasicCard 
                title='Project 3'
                location='Medan3'
                imageUrl='/assets/project3.webp'
                />
                <BasicCard 
                title='Project 4'
                location='Medan4'
                imageUrl='/assets/project4.webp'
                />
            </div>
            <div className='project-cards'>
                <BasicCard 
                title='Project 5'
                location='Medan5'
                imageUrl='/assets/project5.webp'
                />
                <BasicCard 
                title='Project 6'
                location='Medan6'
                imageUrl='/assets/project6.webp'
                />
            </div>
            {/* <div className='more'>
                <h2>See More</h2>
            </div> */}
        </div>
    );
}

export default Portfolio;