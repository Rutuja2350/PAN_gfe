import React from 'react';
import './Associates.css';
import orange_leaf from '../../../public/orange_leaf.png';

const Associates = () => {
    return (
        <div className='homepage_associates'>
            <div className='associates grid grid-row-1 grid-flow-col'>
                <div>
                    <div className='associate_heading'>
                        Associates
                    </div>
                    <div className='associates_content grid grid-rows-1 grid-flow-col '>
                        <div>
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
                    </div>
                </div>
                <div className='justify-self-end'>
                    <img src={orange_leaf} alt='' className='orange_leaf' />
                </div>
            </div>
        </div>
    )
}

export default Associates;
