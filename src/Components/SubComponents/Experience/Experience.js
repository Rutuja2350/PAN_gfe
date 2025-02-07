import React from 'react';
import './Experience.css';
import grey_leaf from '../../../public/grey_leaf.png';

const Experience = () => {
    return (
        <div className='homepage_experience'>
            <div className='experience'>
                <h1 className='place-self-center heading_experience'>
                    Experience
                </h1>
                <div className='experience_info grid grid-row-1 grid-flow-col'>
                    <div className='experience_points place-items-center'>
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
                        <img src={grey_leaf} alt='' className='fade-in-out grey_leaf' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
