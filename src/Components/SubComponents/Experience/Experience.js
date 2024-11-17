import React from 'react';
import './Experience.css';
import experience from '../../../public/experience.png';

const Experience = () => {
    return (
        <div className='experience place-self-center'>
            <h1 className='experience_heading w-full place-self-center'>
                Our Experience Includes
            </h1>
            <div className='experience_info grid grid-row-1 grid-flow-col'>
                <div className='experience_points fade-in-out place-items-center'>
                    <ul>
                        <li>
                            New proposed, expansion, Amendment, Re-validation - having BUA area below and above 1,50,000 sq.mt.
                        </li>
                        <li>
                            Residential & Commercial projects were comes under difference corporations.
                        </li>
                        <li>
                            Township development and Area Development projects.
                        </li>
                        <li>
                            Commercial projects, Hospital projects, IT projects, Mall etc.
                        </li>
                        <li>
                            Violation projects comers under Environmental (Protection) Act, 1986 and MoEF Notification dated 14th March 2017 and its amendments.
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={experience} alt='' className='fade-in-out' />
                </div>
            </div>

        </div>
    )
}

export default Experience;
