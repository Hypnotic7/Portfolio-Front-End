import React from 'react';
import './navigation.css';
import HomeIcon from '../../Icons/home-icon.png';
import ResumeIcon from '../../Icons/resume-icon.png';
import GameControllerIcon from '../../Icons/game-controller-icon.png';
import SoftwareIcon from '../../Icons/software-icon.png';
import WebsiteIcon from '../../Icons/website-icon.png';
import ContactIcon from '../../Icons/contact-icon.png';

const Navigation = () => {  
        return (
            <header>
                <h1 className="hvr-pulse animated tada slower mt1 mb0 fw1 f1">Welcome to my portfolio Website</h1>
                <h2 className="mt4 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
                <nav className="bt bb bw2 tc mw7 center mt4">
                <div className="ml3 hvr-grow-rotate infinite animated ">
                    <img style={{paddingTop:'5px', width:'36px', height:'36px'}} alt='logo' src={HomeIcon}/>    
                    <h2 className="mt0 mb2 f6 fw4 ttu tracked">Home</h2>            
                </div>     
                <div className="ml3 hvr-grow-rotate infinite animated ">
                    <img style={{paddingTop:'5px',paddingLeft:'25px', width:'36px', height:'36px'}} alt='logo' src={ResumeIcon}/>                    
                    <h2 className="ml4 mt1 mb2 f6 fw4 ttu tracked">Resume</h2>
                </div>    
                <div className="ml3 hvr-grow-rotate infinite animated ">
                    <img style={{paddingTop:'5px',paddingLeft:'25px', width:'36px', height:'36px'}} alt='logo' src={GameControllerIcon}/>                    
                    <h2 className="ml4 mt1 mb2 f6 fw4 ttu tracked">Games</h2>
                </div>     
                <div className="ml3 hvr-grow-rotate infinite animated ">
                    <img style={{paddingTop:'5px',paddingLeft:'25px', width:'36px', height:'36px'}} alt='logo' src={SoftwareIcon}/>                    
                    <h2 className="ml4 mt1 mb2 f6 fw4 ttu tracked">Software</h2>
                </div>      
                <div className="ml3 hvr-grow-rotate infinite animated ">
                    <img style={{paddingTop:'5px',paddingLeft:'25px', width:'36px', height:'36px'}} alt='logo' src={WebsiteIcon}/>                    
                    <h2 className="ml4 mt1 mb2 f6 fw4 ttu tracked">Websites</h2>
                </div> 
                <div className="ml3 hvr-grow-rotate infinite animated ">
                    <img style={{paddingTop:'5px',paddingLeft:'25px', width:'36px', height:'36px'}} alt='logo' src={ContactIcon}/>                    
                    <h2 className="ml4 mt1 mb2 f6 fw4 ttu tracked">Contact</h2>
                </div>      
                </nav>
            </header>
             
        );            
}

export default Navigation;