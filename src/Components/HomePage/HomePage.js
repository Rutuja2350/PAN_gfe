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

    return (
        <div>
            <div>
                <Header activeSection={activeSection} onNavClick={handleNavClick} />
            </div>
            {/* <div className={activeSection ? 'page' : 'home_page'}> */}
            <div className="page">
                {/* {activeSection === 'Home' && <Home />} */}
                {activeSection === 'WhatWeDo' && <WhatWeDo />}
                {activeSection === 'AboutUs' && <AboutUs />}
                {activeSection === 'Associates' && <Associates />}
                {activeSection === 'Commitment' && <Commitment />}
                {activeSection === 'ContactUs' && <ContactUs />}
                {activeSection === 'Experience' && <Experience />}
                {activeSection === 'Expertise' && <Expertise />}
            </div>
        </div>
    )
}

export default HomePage;