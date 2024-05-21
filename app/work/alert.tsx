import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faLinkedin } from '@fortawesome/free-brands-svg-icons'


const MailUs: React.FC = () => {
    return (
        <div 
        className='flex  rounded-3xl lg:h-96 h-[30vh] p-14 lg:mt-32 lg:w-[50vw] lg:left-[25%] bg-white/30 backdrop-blur-sm absolute z-50'>
            <h1 className='lg:text-5xl text-white lg:mt-10 lg:ml-[40%] '>DM Us</h1>
            <div className='flex flex-row lg:mt-44 lg:-ml-44 gap-10 mt-10'>
                <a href="mailto:mahabaleshwarbhat@agnihotriaerospace.com" className="basis-6 hover:opacity-30 
                ">
                                        <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",height:"60px"}} />
                                    </a>
                                    <a href="https://www.instagram.com/agnihotri_aerospace/" className="basis-12 mx-1 hover:opacity-30" >
                                    <FontAwesomeIcon icon={faInstagram } size="2xl" style={{color: "#ffffff",height:'60px'}} />
                                </a>
                               
                                <a href="https://www.linkedin.com/company/agnihotri-aerospace/" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",height:'60px'}} />
                                </a>
            </div>
        </div>
    );
};

export default MailUs;