import React from 'react';
import './Expertise.css';
import hazardousWaste from '../../../public/hazardousWaste.png';
import plasticwaste from '../../../public/plasticwaste.png';
import construction from '../../../public/construction.png';
import watercess from '../../../public/watercess.png';

const Expertise = () => {
    return (
        <div className='expertise'>
            <h1 className='expertise_heading ext-slide-text'>
                We Have Expertise In
            </h1>
            <div className='grid grid-rows-1 grid-flow-col'>
                <div>
                    <img src={hazardousWaste} alt='' className='fade-in-out' />
                    <img src={construction} alt='' className='img_left2 fade-in-out' />
                </div>
                <div className='expertise_content fade-in-out'>
                    <ul>
                        <li>Hazardous Waste Applications</li>
                        <li>Plastic related applications</li>
                        <li>Bio-medical waste application</li>
                        <li>Municipal Solid Waste Applications</li>
                        <li>E-waste applications</li>
                        <li>Battery applications</li>
                        <li>Environment Statement – Form V</li>
                        <li>Water cess</li>
                        <li>Construction & Demolition Applications</li>
                        <li>Other application as applicable under Act</li>
                    </ul>
                </div>
                <div>
                    <img src={watercess} alt='' className='img_right1 fade-in-out' />
                    <img src={plasticwaste} alt='' className='img_right2 fade-in-out' />
                </div>
            </div>

        </div>
    )
}

export default Expertise;
