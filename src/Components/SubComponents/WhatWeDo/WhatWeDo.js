import React from 'react';
import blueleaf from '../../../public/blueleaf.png';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <div className='homepage_whatwedo'>
            <div className='whatwedo grid grid-rows-1 grid-flow-col'>
                <div className='left_div place-self-center'>
                    <h1 className='left_panel'>What</h1>
                    <h1 className='left_panel'>We</h1>
                    <h1 className='left_panel'>Do?</h1>
                    <img src={blueleaf} alt='' className='blueleaf fade-in-out pt-7' />
                </div>
                <div>
                    <div className='whatwedo_points'>
                        <ul>
                            <li>
                                Environmental Clearance
                            </li>
                            <li>
                                Environmental Impact Assessment report including baseline monitoring
                            </li>
                            <li>
                                Terms of Reference application
                            </li>
                            <li>
                                Consent to Establish, Operate, Renewal etc. from Maharashtra Pollution Control Board (MPCB)
                            </li>
                            <li>
                                Six monthly Compliance and Monitoring report to Nagpur, Env. Dept, MPCB
                            </li>
                            <li>
                                Compliance RO-Certification from MoEF, Nagpur Division
                            </li>
                            <li>
                                Central Ground Water Authority (CGWA) NOC
                            </li>
                            <li>
                                Preparation of Environmental Status report as require by Corporations.
                            </li>
                            <li>
                                CRZ clearance
                            </li>
                            <li>
                                Forest Clearance
                            </li>
                            <li>
                                NBWL NOC/ Clearance
                            </li>
                            <li>
                                Safety audit
                            </li>
                            <li>
                                Factory liaisons
                            </li>
                            <li>
                                Online form submission :
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
                            </li>
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default WhatWeDo;
