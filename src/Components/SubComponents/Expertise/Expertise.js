import React from 'react';
import './Expertise.css';
import green_leaf from '../../../public/green_leaf.png';

const Expertise = () => {
    return (
        <div className='homepage_expertise'>
            <div className='expertise'>
                <h1 className='place-self-center heading_expertise'>
                    Expertise
                </h1>
                <div className='grid grid-row-1 grid-flow-col'>
                    <div className='grey_leaf h-full'>
                        <img src={green_leaf} alt='' className='fade-in-out grey_leaf_img self-end' />
                    </div>
                    <div className='expertise_content'>
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
                </div>
            </div>
        </div>
    )
}

export default Expertise;
