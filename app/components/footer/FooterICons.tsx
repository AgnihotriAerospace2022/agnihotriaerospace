
import  "./footer.css"  ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram ,faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";



export default function Icons()
{
    return (<>
         <div className="flex flex-row hidden lg:inline-block lg:ml-10">
                                 <a href="https://www.instagram.com/agnihotri_aerospace/" className="basis-12 mx-1 hover:opacity-30" >
                                    <FontAwesomeIcon icon={faInstagram } size="2xl" style={{color: "#ffffff",}} />
                                </a>
                               
                                <a href="https://www.linkedin.com/company/agnihotri-aerospace/" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
                                </a>
                               
                                <a href="https://www.youtube.com/@AgnihotriAerospace" className="basis-12 mx-1 hover:opacity-30">
                                    <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#ffffff",}} />
                                </a>
                                
            </div>
            <div className="flex  lg:hidden ">
                                 <a href="https://www.instagram.com/agnihotri_aerospace/" className="basis-6 hover:opacity-30" >
                                    <FontAwesomeIcon icon={faInstagram } size="lg" style={{color: "#ffffff",}} />
                                </a>
                                
                                <a href="https://www.linkedin.com/company/agnihotri-aerospace/" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#ffffff",}} />
                                </a>
                                
                                <a href="https://www.youtube.com/@AgnihotriAerospace" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#ffffff",}} />
                                </a>
                                
            </div>
            <a href="mailto:mahabaleshwarbhat@agnihotriaerospace.com" className="basis-6 hover:opacity-30">
                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",}} />
                                </a>
    </>) ;
}