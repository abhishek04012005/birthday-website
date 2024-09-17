import React from 'react';
import { WhatsApp, Facebook, YouTube, Instagram } from '@mui/icons-material'; // Correct imports
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer-item">
                    <div className="footer-link">
                        <ul>
                            <li><p><WhatsApp fontSize="large" /> </p></li>   {/* Optional: fontSize can be adjusted */}
                            <li><Facebook fontSize="large" /></li>
                            <li><YouTube fontSize="large" /></li>
                            <li><Instagram fontSize="large" /></li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p> Copyright &copy; 2024 <a href="www.abhishekchoudhary.co.in">www.AbhishekChoudhary.co.in</a></p>
                        <p>Designed and Developed by Abhishek Choudhary</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
