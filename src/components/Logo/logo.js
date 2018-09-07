import React from 'react';
import Spiral from './spiral.png';
import './logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0 center'>            
                <div className="hvr-grow-rotate infinite animated pa3 ">
                    <img style={{paddingTop:'5px', marginTop: '100px'}} alt='logo' src={Spiral}/>
                </div>
        </div>
    );
}

export default Logo;
