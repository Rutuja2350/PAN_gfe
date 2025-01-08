import React from 'react';
import './AboutUs.css';
import pink_leaf from '../../../public/pink_leaf.png';

const AboutUs = () => {
    return (
        <div className='homepage_about h-screen'>
            <div className='about grid grid-rows-1 grid-flow-col about_content'>
                <div className='left_column'>
                    <h1 className='about_heading'>
                        About <br />
                        <center>Us</center>
                    </h1>
                    <img src={pink_leaf} alt='' className='pink_leaf' />
                </div>
                <div className='right_column place-self-start'>
                    <ul>
                        <li>
                            We are in Environmental Consultancy services since 2018.
                        </li>
                        <li>
                            We have deep expertise in dealing with Environmental related issues, Clearance work at Ministry of Environment and Forest & Climate Change, Delhi (MoEF&CC),  State Environmental Impact Assessment Authority (SEIAA) and State Expert Appraisal Committee (SEAC) under EIA Notification 2006 and its amendments as per Environmental (Protection) Act, 1986
                        </li>
                        <li>
                            We do have experienced and professional team in dealing with consent related issues at Maharashtra Pollution Control Board (MPCB) under the Water (P&CP) Act, 1974, Air (Prevention and Control of Pollution) Act, 1981, Water (Cess) Act, 1977, Authorization under Rule 6 of the Hazardous & Other Wastes (M &  T M ) Rules 2016
                        </li>
                        <li>
                            We have an experience to deal the legal aspect under the National Green Tribunal (NGT) Act, 2010
                        </li>
                        <li>
                            Having knowledge related EIA notifications, Rules, Circulars, Office Memorandum and Acts etc.,
                        </li>
                        <li>
                            Well knowledge of the environmental clearance process, issues related to environmental concerns.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
