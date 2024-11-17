import React from 'react';
import Button from 'react-bootstrap/Button';
// import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <div className="landing text-center place-content-center grid">
            <div><h1 className='font-medium text-8xl font-mono'>PAN GREEN FIELD ENVIRO</h1></div>
            <div><p className='pt-20 pb-10 text-3xl'>We help you getting NOC & Clearance from component authorities.</p></div>
            <div><Button variant="danger" onClick={handleClick} className='btn_landing'><p className='text-2xl mb-1 z-10'>Explore</p></Button></div>
        </div>
    )
}

export default LandingPage;
