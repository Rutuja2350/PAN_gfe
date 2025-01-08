import React from 'react';
import './ContactUs.css';
import leave_key from '../../../public/leave_key.png';
import Card from 'react-bootstrap/Card';

const ContactUs = () => {
    return (
        <div className='homepage_contact'>
            <div className='contact grid grid-row-3 grid-col-flow'>
                <div className='grid grid-rows-1 grid-flow-col'>
                    <div className='contact_heading justify-self-center'>
                        Contact <br />
                        <center>Us</center>
                    </div>
                    {/* <div className='grid grid-rows-2 grid-flow-col justify-items-center text-xl'> */}
                    <div className='right_content'>
                        <p>
                            <b>Mobile no. : </b> <br />
                            +91-95940-76605 ( Pradnya Niphade ) <br />
                            +91-99704-05605 ( Surekha Kadam ) <br />
                            +91-70283-92775 ( Vijaya Jagtap ) <br /><br />
                            <b>Timing :</b><br />
                            10 am to 6 pm <br /><br />
                            <b>Email : <br />
                            </b>pangreenfieldenviro@gmail.com <b> / </b> bagul_pradnya@rediffmail.com <br /><br />
                            <b>For account & billing related :</b><br />
                            Mrs. Prajakta Waje <br />
                            panenviroacc@gmail.com <br />
                            +91-97020-30669 <br /><br />
                        </p>
                    </div>
                </div>
                <div className='grid grid-rows-1 grid-flow-col'>
                    <img src={leave_key} alt='' className='justify-self-center key_leaf' />
                    <h1 className='justify-self-center pt-10 heading_key'>Key Person</h1>
                </div>
                <div className='grid grid-rows-1 grid-flow-col'>
                    {/* <div> */}
                    <Card className='card_body'>
                        <Card.Body>
                            <center><Card.Title className='card_title'>Mrs. Pradnya A Niphade</Card.Title></center>
                            <Card.Text className='contact_info'>
                                <br />
                                <b>15 years of Experience :</b> <br />
                                NABET Accredited EC Coordinator - 38, 39 & 21 Sector
                                NABET Accredited FAE – SW, WP & RH <br /><br />
                                <b>Email :</b> <br />
                                bagul_pradnya@rediffmail.com <br /><br />
                                <b>Mob :</b> +91-95940-76605<br /><br />
                                <b>Location : </b>Thane
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* </div> */}
                    {/* <div> */}
                    {/* <div> */}
                    <Card className='card_body'>
                        <Card.Body>
                            <center><Card.Title className='card_title'>Mrs. Surekha M Kadam</Card.Title></center>
                            <Card.Text className='contact_info'>
                                <br />
                                <b>10 years of Experience :</b> <br />
                                NABET Accredited EC Coordinator - 38 Sector
                                NABET Accredited FAE – SHW, WP & LU <br /><br />
                                <b>Email :</b> <br />
                                pangreenfieldenviro@gmail.com <br /><br />
                                <b>Mob :</b> +91-99704-05605<br /><br />
                                <b>Location : </b>Pune
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
