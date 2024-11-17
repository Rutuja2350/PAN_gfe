import React from 'react';
import './Associates.css';
import associates from '../../../public/associates.png';

const Associates = () => {
    return (
        <div className='associates h-dvh grid grid-row-2'>
            <div className='associate_heading asso-slide-text'>
                We Are Associated With
            </div>
            <div className='associates_content grid grid-rows-1 grid-flow-col '>
                <div className='fade-in-out'>
                    <ul>
                        <li>
                            Architect – Design and  Interior designer
                        </li>
                        <li>
                            Mechanical, Electrical and Plumbing (MEP)
                        </li>
                        <li>
                            Sewage Treatment Plan (STP)
                        </li>
                        <li>
                            Organic Waste Composter (OWC)
                        </li>
                        <li>
                            Geo-hydrological study
                        </li>
                        <li>
                            Storm Water Drain and Rain Water Harvesting study
                        </li>
                        <li>
                            Landscape Architect
                        </li>
                        <li>
                            Energy Conservation Building Codes (ECBC)
                        </li>
                        <li>
                            Carbon Footprint analysis
                        </li>
                        <li>
                            Traffic study
                        </li>
                        <li>
                            Evacuation Analysis study
                        </li>
                        <li>
                            Laboratory services – Analytical  and Monitoring
                        </li>
                        <li>
                            Follow up technical team
                        </li>
                        <li>
                            NOC - Aviation
                        </li>
                        <li>
                            IGBC / GRIHA / LEED
                        </li>
                        <li>
                            Service provider - Solar panel
                        </li>
                    </ul>
                </div>
                <div className='justify-self-center'>
                    <img src={associates} alt='' className='associates_image fade-in-out' />
                </div>
            </div>
        </div>
    )
}

export default Associates;
