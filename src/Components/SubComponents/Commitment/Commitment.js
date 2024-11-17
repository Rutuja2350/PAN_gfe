import React from 'react';
import './Commitment.css';
import commitment from '../../../public/commitment.png';

const Commitment = () => {
    return (
        <div className='commitment'>
            <div className='commitment_head_div grid grid-rows-1 grid-flow-col'>
                <div className='commitment_heading com-slide-text'>
                    We Promise You That
                </div>
                <div className='place-self-center'>
                    <img src={commitment} alt='' className='commitment_image fade-in-out' />
                </div>
            </div>
            <div className='commitment_content fade-in-out'>
                <ul>
                    <li>
                        We will provide technical support and quality service while handling project & presenting before respective committees.
                    </li>
                    <li>
                        We will provide the assistance during project co-ordination upto completion of work.
                    </li>
                    <li>
                        We give assurance about target to be completed as decided.
                    </li>
                    <li>
                        We will give our 100% efforts to set the Goal and the completion the project as per Goal.
                    </li>
                    <li>
                        We are tying to cover customer satisfaction related to project handling and clearance process.
                    </li>
                    <li>
                        We are committed to fulfilling these needs and building long-term customer loyalty and its our first commitment.
                    </li>
                    <li>
                        We have an experts in handling the project independently and with a good sense of communication with the client.
                    </li>
                    <li>
                        We always welcome our customers comments, complaints, suggestions and feedback.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Commitment;