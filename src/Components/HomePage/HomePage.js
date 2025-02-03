import { useState } from 'react';
import Header from '../Header/Header';
import './HomePage.css';
import AboutUs from '../SubComponents/AboutUs/AboutUs';
import Associates from '../SubComponents/Associates/Associates';
import Commitment from '../SubComponents/Commitment/Commitment';
import ContactUs from '../SubComponents/ContactUs/ContactUs';
import Experience from '../SubComponents/Experience/Experience';
import Expertise from '../SubComponents/Expertise/Expertise';
import WhatWeDo from '../SubComponents/WhatWeDo/WhatWeDo';

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('WhatWeDo');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    const sectionColors = {
        Home: 'black',
        WhatWeDo: '#7496B6',
        AboutUs: '#C38888',
        Associates: '#C18C5D',
        Commitment: '#99A751',
        ContactUs: '#938A9E',
        Experience: '#A9ABA6',
        Expertise: '#97A77E',
    };

    return (
        <div
            className="outer_div min-h-screen transition-colors duration-500"
            style={{ backgroundColor: sectionColors[activeSection] || 'black' }}
        >
            <Header activeSection={activeSection} onNavClick={handleNavClick} />
            {activeSection === 'WhatWeDo' && <WhatWeDo />}
            {activeSection === 'AboutUs' && <AboutUs />}
            {activeSection === 'Associates' && <Associates />}
            {activeSection === 'Commitment' && <Commitment />}
            {activeSection === 'ContactUs' && <ContactUs />}
            {activeSection === 'Experience' && <Experience />}
            {activeSection === 'Expertise' && <Expertise />}
        </div>
    );
};

export default HomePage;